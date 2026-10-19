import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  public contactService = inject(ContactService);

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
    category: ['Opportunité Recrutement', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(1500)]],
  });

  public isSubmitted = signal<boolean>(false);

  public get f() {
    return this.contactForm.controls;
  }

  public get messageLength(): number {
    return this.contactForm.get('message')?.value?.length || 0;
  }

  public async onSubmit(): Promise<void> {
    this.isSubmitted.set(true);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const val = this.contactForm.value;
    const success = await this.contactService.sendMessage({
      name: val.name,
      email: val.email,
      subject: val.subject,
      category: val.category,
      message: val.message,
    });

    if (success) {
      this.contactForm.reset({
        category: 'Opportunité Recrutement',
      });
      this.isSubmitted.set(false);
    }
  }

  public sendAnotherMessage(): void {
    this.contactService.resetStatus();
    this.contactForm.reset({
      category: 'Opportunité Recrutement',
    });
    this.isSubmitted.set(false);
  }
}
