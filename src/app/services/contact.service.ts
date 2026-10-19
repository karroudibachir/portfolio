import { Injectable, signal } from '@angular/core';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  sentAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public isSubmitting = signal<boolean>(false);
  public lastSubmissionSuccess = signal<boolean | null>(null);
  public submittedMessages = signal<ContactMessage[]>([]);

  public async sendMessage(payload: Omit<ContactMessage, 'id' | 'sentAt'>): Promise<boolean> {
    this.isSubmitting.set(true);
    this.lastSubmissionSuccess.set(null);

    // Simulate network request latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const newMessage: ContactMessage = {
      ...payload,
      id: 'msg-' + Date.now(),
      sentAt: new Date(),
    };

    this.submittedMessages.update((prev) => [newMessage, ...prev]);
    this.isSubmitting.set(false);
    this.lastSubmissionSuccess.set(true);

    return true;
  }

  public resetStatus(): void {
    this.lastSubmissionSuccess.set(null);
  }
}
