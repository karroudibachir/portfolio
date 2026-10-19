import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  public portfolioService = inject(PortfolioService);

  public activeCategoryIndex = signal<number>(0);

  public philosophies = signal([
    {
      number: '01',
      title: 'Architectures Événementielles & Résilience (Kafka)',
      desc: "Le découplage asynchrone permet aux microservices d'évoluer indépendamment, d'absorber les pics de charge et de garantir l'intégrité des données avec des stratégies de reprise sur erreur (DLQ).",
    },
    {
      number: '02',
      title: 'Culture de la Qualité & TDD (JUnit / Mockito / SonarQube)',
      desc: "Le Test-Driven Development et l'automatisation des tests d'intégration dans les pipelines CI/CD réduisent drastiquement la dette technique et sécurisent chaque mise en production.",
    },
    {
      number: '03',
      title: 'Leadership Technique, Mentorat & Performance',
      desc: "Un projet d'envergure réussit grâce à l'alignement des équipes : animation de revues d'architecture, transmission de compétences, et optimisation proactive des goulots d'étranglement (Oracle SQL / PL-SQL).",
    },
  ]);

  public selectCategory(index: number): void {
    this.activeCategoryIndex.set(index);
  }

  public get activeCategory(): SkillCategory {
    return this.portfolioService.skillCategories()[this.activeCategoryIndex()];
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
