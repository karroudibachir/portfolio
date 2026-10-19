import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  public portfolioService = inject(PortfolioService);

  public activeCategoryIndex = signal<number>(0);

  public activeCategory = computed(() => {
    const cats = this.portfolioService.skillCategories();
    return cats[this.activeCategoryIndex()] || cats[0];
  });

  public selectCategory(index: number): void {
    this.activeCategoryIndex.set(index);
  }
}
