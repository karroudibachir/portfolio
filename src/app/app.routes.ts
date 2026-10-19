import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SkillsComponent } from './pages/skills/skills';
import { ProjectsComponent } from './pages/projects/projects';
import { CertificationsComponent } from './pages/certifications/certifications';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Bachir Karroudi | Technical Lead & Senior Développeur Full Stack Java',
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Compétences Techniques & Stack | Bachir Karroudi',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projets & Architectures | Bachir Karroudi',
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
    title: 'Certifications & Accréditations | Bachir Karroudi',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'À propos | Bachir Karroudi',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Bachir Karroudi',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
