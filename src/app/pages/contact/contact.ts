import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactFormComponent } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  public portfolioService = inject(PortfolioService);

  public copiedEmail = signal<boolean>(false);
  public openFaqIndex = signal<number | null>(0);

  public toggleFaq(index: number): void {
    this.openFaqIndex.update((curr) => (curr === index ? null : index));
  }

  public copyEmail(): void {
    const email = this.portfolioService.personalInfo().email;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.copiedEmail.set(true);
        setTimeout(() => this.copiedEmail.set(false), 2500);
      });
    }
  }
}
