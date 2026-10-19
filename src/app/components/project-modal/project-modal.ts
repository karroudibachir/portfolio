import { Component, Input, Output, EventEmitter, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/portfolio.models';

export type ModalTab = 'project' | 'architecture';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModalComponent {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  public activeTab = signal<ModalTab>('project');

  public setTab(tab: ModalTab): void {
    this.activeTab.set(tab);
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  public closeModal(): void {
    this.close.emit();
  }

  public onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
