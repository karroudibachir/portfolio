import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';
import { ProjectModalComponent } from '../../components/project-modal/project-modal';
import { ContactFormComponent } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectModalComponent, ContactFormComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  public portfolioService = inject(PortfolioService);
  private platformId = inject(PLATFORM_ID);

  public selectedProject = signal<Project | null>(null);
  public activeRoleIndex = signal<number>(0);
  private roleTimer: any;

  public selectedCategory = signal<string>('Tous');
  public categories = [
    'Tous',
    'Microservices & Kafka',
    'Full Stack (Spring / Angular)',
    'DevOps & CI/CD',
    'Optimisation & Data',
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.roleTimer = setInterval(() => {
        const titles = this.portfolioService.personalInfo().titles;
        this.activeRoleIndex.update((curr) => (curr + 1) % titles.length);
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    if (this.roleTimer) {
      clearInterval(this.roleTimer);
    }
  }

  public get currentRole(): string {
    const titles = this.portfolioService.personalInfo().titles;
    return titles[this.activeRoleIndex()] || titles[0];
  }

  public get filteredProjects(): Project[] {
    const cat = this.selectedCategory();
    const projects = this.portfolioService.projects();
    if (cat === 'Tous') {
      return projects.filter((p) => p.featured);
    }
    return projects.filter((p) => p.category === cat);
  }

  public setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  public openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  public closeProjectModal(): void {
    this.selectedProject.set(null);
  }

  public downloadCV(): void {
    const info = this.portfolioService.personalInfo();
    const cvContent = `# ${info.name}\n` +
      `**${info.role}**\n` +
      `Localisation : ${info.location} | Tél : ${info.phone} | Email : ${info.email}\n` +
      `LinkedIn : ${info.linkedin} | GitHub : ${info.github}\n\n` +
      `## PROFIL PROFESSIONNEL\n` +
      `${info.extendedBio}\n\n` +
      `## EXPÉRIENCES PROFESSIONNELLES\n` +
      this.portfolioService.experience().map((exp) => (
        `### ${exp.role} — ${exp.company}, ${exp.location} (${exp.period})\n` +
        `${exp.description}\n` +
        `**Missions & Réalisations :**\n` +
        exp.achievements.map((a) => `- ${a}`).join('\n') +
        `\n**Technologies :** ${exp.techStack.join(', ')}\n`
      )).join('\n') +
      `\n## FORMATIONS\n` +
      this.portfolioService.education().map((edu) => (
        `- **${edu.degree}** (${edu.period}) — ${edu.institution}\n  ${edu.description}`
      )).join('\n') +
      `\n\n## CERTIFICATIONS & ACCRÉDITATIONS\n` +
      this.portfolioService.certifications().map((c) => (
        `- **${c.title}** (${c.year}) — ${c.issuer} (ID: ${c.credentialId || 'Vérifié'})`
      )).join('\n') +
      `\n\n## LANGUES\n` +
      this.portfolioService.languages().map((l) => `- ${l.language} : ${l.proficiency}`).join('\n');

    const blob = new Blob([cvContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Bachir-Karroudi-CV.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
