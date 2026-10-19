import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';
import { ProjectModalComponent } from '../../components/project-modal/project-modal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectModalComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  public portfolioService = inject(PortfolioService);

  public searchQuery = signal<string>('');
  public selectedCategory = signal<string>('Tous');
  public selectedProject = signal<Project | null>(null);

  public categories = [
    'Tous',
    'Microservices & Kafka',
    'Full Stack (Spring / Angular)',
    'DevOps & CI/CD',
    'Optimisation & Data',
  ];

  public setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  public updateSearch(query: string): void {
    this.searchQuery.set(query);
  }

  public clearFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set('Tous');
  }

  public get filteredProjects(): Project[] {
    const q = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    let list = this.portfolioService.projects();

    if (cat !== 'Tous') {
      list = list.filter((p) => p.category === cat);
    }

    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }

  public openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  public closeProjectModal(): void {
    this.selectedProject.set(null);
  }
}
