import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { CertificationItem } from '../../models/portfolio.models';

export type CertCategoryFilter = 'Tous' | 'IA & LLM' | 'Java & Full Stack' | 'DevOps & Cloud' | 'Data & SQL' | 'Agilité & Leadership';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
  public portfolioService = inject(PortfolioService);

  public selectedCategory = signal<CertCategoryFilter>('Tous');
  public searchQuery = signal<string>('');

  public categories: CertCategoryFilter[] = [
    'Tous',
    'IA & LLM',
    'Java & Full Stack',
    'DevOps & Cloud',
    'Data & SQL',
    'Agilité & Leadership',
  ];

  public filteredCertifications = computed(() => {
    const list = this.portfolioService.certifications();
    const cat = this.selectedCategory();
    const query = this.searchQuery().trim().toLowerCase();

    return list.filter((cert) => {
      const matchesCategory = cat === 'Tous' || cert.category === cat;
      if (!matchesCategory) return false;

      if (!query) return true;

      const titleMatch = cert.title.toLowerCase().includes(query);
      const issuerMatch = cert.issuer.toLowerCase().includes(query);
      const idMatch = cert.credentialId?.toLowerCase().includes(query) ?? false;
      const skillsMatch = cert.skills?.some((s) => s.toLowerCase().includes(query)) ?? false;

      return titleMatch || issuerMatch || idMatch || skillsMatch;
    });
  });

  public getCategoryCount(cat: CertCategoryFilter): number {
    const list = this.portfolioService.certifications();
    if (cat === 'Tous') return list.length;
    return list.filter((c) => c.category === cat).length;
  }

  public setCategory(cat: CertCategoryFilter): void {
    this.selectedCategory.set(cat);
  }

  public getActionLabel(cert: CertificationItem): string {
    if (!cert.verifyUrl) return 'Vérifier';
    if (cert.verifyUrl.includes('.pdf') || cert.verifyUrl.includes('simplicdn')) {
      return 'Afficher le diplôme (PDF)';
    }
    if (cert.verifyUrl.includes('credly.com')) {
      return 'Badge Officiel Credly';
    }
    if (cert.verifyUrl.includes('claude.com')) {
      return 'Vérifier sur Claude Academy';
    }
    if (cert.verifyUrl.includes('oneroadmap.io')) {
      return 'Certificat OneRoadmap';
    }
    return 'Afficher le diplôme';
  }

  public isPdf(cert: CertificationItem): boolean {
    return cert.verifyUrl?.includes('.pdf') || cert.verifyUrl?.includes('simplicdn') || false;
  }
}
