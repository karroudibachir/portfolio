import { Injectable, signal } from '@angular/core';
import { Project, SkillCategory, ExperienceItem, PersonalInfo, EducationItem, LanguageItem, CertificationItem } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  public readonly personalInfo = signal<PersonalInfo>({
    name: 'Bachir Karroudi',
    role: 'Technical Lead | Senior Développeur Full Stack Java',
    titles: [
      'Technical Lead & Architecte Microservices',
      'Senior Développeur Full Stack Java (Spring Boot • Angular)',
      'Spécialiste Event-Driven & Apache Kafka',
      'Expert DevOps (Docker, Jenkins, GitLab CI/CD) & Oracle PL/SQL',
    ],
    bio: "Développeur Full Stack et Technical Lead avec plus de 6 ans d'expérience dans la conception, le développement et le déploiement d'applications web d'entreprise. Expertise confirmée en Java, Spring Boot, Angular, microservices et Kafka, ainsi qu'en DevOps et intégration continue.",
    extendedBio: `Développeur Full Stack et Technical Lead avec plus de 6 ans d'expérience dans la conception, le développement et le déploiement d'applications web d'entreprise. 
    Expertise confirmée en Java (8/11/17), Spring Boot, Angular (v12+), architectures microservices et Apache Kafka, ainsi qu'en DevOps et intégration continue (Docker, Jenkins, GitLab CI/CD).
    Expérience solide dans le pilotage technique, l'encadrement des équipes, la conception d'architectures scalables, l'optimisation des performances de bases de données Oracle SQL / PL/SQL et la mise en production de solutions robustes. À la recherche de rôles Tech Lead / Senior Full Stack Java orientés architecture et développement.`,
    location: 'Tunis, Tunisie (Disponible sur place & Remote)',
    email: 'bachir422018@gmail.com',
    phone: '+216 92 657 905',
    github: 'https://github.com/bachir422018',
    linkedin: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
    twitter: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
    stats: [
      { label: "Années d'expérience", value: '6', suffix: '+' },
      { label: 'Gain de performance applicatif', value: '30', suffix: '%' },
      { label: 'Pratiques TDD & CI/CD', value: '100', suffix: '%' },
      { label: 'Projets d’Entreprise Réalisés', value: '11', suffix: '+' },
    ],
  });

  public readonly certifications = signal<CertificationItem[]>([
    /* =================================================================
       IA & LLM (ANTHROPIC CLAUDE & IBM)
       ================================================================= */
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      year: 'Oct. 2026',
      badgeColor: '#0f62fe',
      category: 'IA & LLM',
      verifyUrl: 'https://www.credly.com/badges/7e01b03a-f452-4982-acae-af68503cb470/linked_in_profile',
      skills: ['AI Fundamentals', 'Machine Learning', 'IBM Watson'],
    },
    {
      title: 'Claude Academy: Claude Code 101',
      issuer: 'Anthropic',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: '3c2ed18adb4bf10d8fe9e8d81ab0554f',
      badgeColor: '#d97706',
      category: 'IA & LLM',
      verifyUrl: 'https://academy.claude.com/verify/3c2ed18adb4bf10d8fe9e8d81ab0554f',
      skills: ['Claude Code', 'Agentic Coding', 'CLI Workflows'],
    },
    {
      title: 'Claude Academy: Claude with Amazon Bedrock',
      issuer: 'Anthropic',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: 'ae747e801b433ae25226460ee553bdad',
      badgeColor: '#d97706',
      category: 'IA & LLM',
      verifyUrl: 'https://academy.claude.com/verify/ae747e801b433ae25226460ee553bdad',
      skills: ['Anthropic Claude', 'Amazon Bedrock', 'AWS Cloud AI'],
    },
    {
      title: 'Claude Academy: Introduction to Model Context Protocol',
      issuer: 'Anthropic',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: '41c06a28974e9fcef94ba3c27f374601',
      badgeColor: '#d97706',
      category: 'IA & LLM',
      verifyUrl: 'https://academy.claude.com/verify/41c06a28974e9fcef94ba3c27f374601',
      skills: ['Model Context Protocol (MCP)', 'Tool Use', 'Anthropic Claude'],
    },
    {
      title: 'Claude Academy: Building with the Claude API',
      issuer: 'Anthropic',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: '52ac21d14d24d7a0f025f8dd8500101d',
      badgeColor: '#d97706',
      category: 'IA & LLM',
      verifyUrl: 'https://academy.claude.com/verify/52ac21d14d24d7a0f025f8dd8500101d',
      skills: ['Claude API', 'Prompt Engineering', 'Intégration LLM'],
    },
    {
      title: 'Claude Academy: Claude Code in action',
      issuer: 'Anthropic',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: '774a9d884a2389a771a0f382c4506414',
      badgeColor: '#d97706',
      category: 'IA & LLM',
      verifyUrl: 'https://academy.claude.com/verify/774a9d884a2389a771a0f382c4506414',
      skills: ['Claude Code', 'Automation', 'Pair Programming IA'],
    },
    {
      title: 'Claude Academy: Claude 101',
      issuer: 'Anthropic',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: '40a2c6a712f8b34aa5783771ff4d3aa7',
      badgeColor: '#d97706',
      category: 'IA & LLM',
      verifyUrl: 'https://academy.claude.com/verify/40a2c6a712f8b34aa5783771ff4d3aa7',
      skills: ['Anthropic Claude', 'LLM Fundamentals', 'Prompt Design'],
    },

    /* =================================================================
       JAVA & FULL STACK (SIMPLILEARN & ONEROADMAP)
       ================================================================= */
    {
      title: 'Getting Started with Full Stack Java Development',
      issuer: 'Simplilearn',
      year: 'Oct. 2026',
      credentialId: '10905171',
      badgeColor: '#0ea5e9',
      category: 'Java & Full Stack',
      verifyUrl: 'https://certificates.simplicdn.net/share/10905171_11258768_1792267286124.pdf',
      skills: ['Angular', 'Java', 'Spring Boot', 'Full Stack'],
    },
    {
      title: 'Getting started with Kafka',
      issuer: 'Simplilearn',
      year: 'Oct. 2026',
      credentialId: '10901413',
      badgeColor: '#6366f1',
      category: 'Java & Full Stack',
      verifyUrl: 'https://certificates.simplicdn.net/share/10901413_6500015_1792180018123.pdf',
      skills: ['Apache Kafka', 'Java', 'Spring Boot', 'Event-Driven'],
    },
    {
      title: 'Full Stack Developer',
      issuer: 'OneRoadmap',
      year: 'Oct. 2026',
      credentialId: 'CERT-EA646914',
      badgeColor: '#ec4899',
      category: 'Java & Full Stack',
      verifyUrl: 'https://www.oneroadmap.io/skills/fs/certificate/CERT-EA646914',
      skills: ['Java', 'Angular', 'Spring Boot', 'REST APIs', 'Frontend & Backend'],
    },
    {
      title: 'Java',
      issuer: 'OneRoadmap',
      year: 'Oct. 2026',
      credentialId: 'CERT-AFB18D38',
      badgeColor: '#f97316',
      category: 'Java & Full Stack',
      verifyUrl: 'https://www.oneroadmap.io/skills/java/certificate/CERT-AFB18D38',
      skills: ['Java', 'Spring Boot', 'Architecture Orientée Objet', 'Design Patterns'],
    },

    /* =================================================================
       DEVOPS & CLOUD (SIMPLILEARN, SCHOLARHAT, ONEROADMAP, AWS)
       ================================================================= */
    {
      title: 'Getting Started with Jenkins',
      issuer: 'Simplilearn',
      year: 'Oct. 2026',
      credentialId: '10901634',
      badgeColor: '#d97706',
      category: 'DevOps & Cloud',
      verifyUrl: 'https://certificates.simplicdn.net/share/10901634_11258768_1792195112859.pdf',
      skills: ['Jenkins', 'CI/CD', 'DevOps', 'Pipeline Automation'],
    },
    {
      title: 'Introduction to Kubernetes',
      issuer: 'Simplilearn',
      year: 'Oct. 2026',
      credentialId: '10900460',
      badgeColor: '#326ce5',
      category: 'DevOps & Cloud',
      verifyUrl: 'https://certificates.simplicdn.net/share/10900460_11257584_1792164587089.pdf',
      skills: ['Kubernetes', 'DevOps', 'Orchestration', 'Pods & Services'],
    },
    {
      title: 'Containers & Orchestration - Docker + Kubernetes Certification',
      issuer: 'OneRoadmap',
      year: 'Oct. 2026',
      credentialId: 'CERT-4CF816B4',
      badgeColor: '#06b6d4',
      category: 'DevOps & Cloud',
      verifyUrl: 'https://www.oneroadmap.io/skills/docker-kubernetes/certificate/CERT-4CF816B4',
      skills: ['Kubernetes', 'DevOps', 'Docker', 'Conteneurisation'],
    },
    {
      title: 'DockerFoundations Course',
      issuer: 'ScholarHat',
      year: 'Oct. 2026',
      credentialId: 'D5V3161026',
      badgeColor: '#2563eb',
      category: 'DevOps & Cloud',
      verifyUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/overlay/Certifications/1163532421/treasury/?profileId=ACoAAE5dzP8BuZAc6WEWaNw0ZQ27JiJOGB1jkjQ',
      skills: ['DevOps', 'Docker', 'Images & Conteneurs'],
    },
    {
      title: 'AWS Lambda Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: 'Oct. 2026',
      badgeColor: '#f59e0b',
      category: 'DevOps & Cloud',
      verifyUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/overlay/Certifications/623205373/treasury/?profileId=ACoAAE5dzP8BuZAc6WEWaNw0ZQ27JiJOGB1jkjQ',
      skills: ['AWS Lambda', 'Serverless', 'Cloud Architecture'],
    },

    /* =================================================================
       DATA & SQL
       ================================================================= */
    {
      title: 'SQL',
      issuer: 'OneRoadmap',
      year: 'Oct. 2026',
      expires: 'Oct. 2036',
      credentialId: 'CERT-3FE0B91D',
      badgeColor: '#14b8a6',
      category: 'Data & SQL',
      verifyUrl: 'https://www.oneroadmap.io/skills/sql/certificate/CERT-3FE0B91D',
      skills: ['Oracle SQL Developer', 'MySQL', 'Modélisation', 'Requêtes SQL'],
    },

    /* =================================================================
       AGILITÉ & LEADERSHIP
       ================================================================= */
    {
      title: 'Agile Scrum Master',
      issuer: 'Simplilearn',
      year: 'Oct. 2026',
      credentialId: '10901379',
      badgeColor: '#10b981',
      category: 'Agilité & Leadership',
      verifyUrl: 'https://certificates.simplicdn.net/share/10901379_11257584_1792186880104.pdf',
      skills: ['DevOps', 'Méthodes agiles', 'Scrum Master', 'Sprints & Cérémonies'],
    },
    {
      title: 'Leadership Essentials Certificate',
      issuer: 'Cornerstone OnDemand Foundation',
      year: 'Oct. 2026',
      badgeColor: '#8b5cf6',
      category: 'Agilité & Leadership',
      verifyUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/overlay/Certifications/630134043/treasury/?profileId=ACoAAE5dzP8BuZAc6WEWaNw0ZQ27JiJOGB1jkjQ',
      skills: ['Leadership technique', 'Management d’équipe', 'Communication'],
    },
  ]);

  public readonly education = signal<EducationItem[]>([
    {
      degree: 'Master Professionnel — Ingénierie Logicielle Open Source',
      institution: 'Université de Tunis',
      period: '2023 – 2025',
      description: 'Cours avancés en ingénierie logicielle open source, systèmes distribués, qualité logicielle et développement cloud-native.',
    },
    {
      degree: "Licence Appliquée — Technologie de l'Informatique",
      institution: 'Institut Supérieur des Études Technologiques',
      period: '2017 – 2020',
      description: 'Fondamentaux en développement logiciel, bases de données, réseaux, systèmes et architecture informatique.',
    },
  ]);

  public readonly languages = signal<LanguageItem[]>([
    { language: 'Français', proficiency: 'Courant', flag: '🇫🇷' },
    { language: 'Anglais', proficiency: 'Courant (Professionnel)', flag: '🇬🇧' },
    { language: 'Arabe', proficiency: 'Langue maternelle', flag: '🇹🇳' },
  ]);

  public readonly projects = signal<Project[]>([
    /* =================================================================
       QUALIFOUR PROJECTS
       ================================================================= */
    {
      id: 'qualifour-qualite-2d3d',
      title: 'Solution de Gestion de la Qualité Industrielle avec Visualisation 2D/3D (QualiFour)',
      tagline: 'Visualisation 2D/3D des non-conformités, contrôle qualité temps réel & coordination technique',
      category: 'Microservices & Kafka',
      description: "Conception, architecture et déploiement d'une solution logicielle de gestion de qualité industrielle avec modélisation et visualisation 2D/3D des pièces et non-conformités, et coordination d'équipes techniques pour livraisons de haute qualité chez QualiFour.",
      problem: "Nécessité de modéliser visuellement en 2D/3D les anomalies sur les lignes d'assemblage industriel et de coordonner les équipes de développement pour assurer des livraisons strictes sans défauts.",
      solution: "Mise en place d'une architecture microservices résiliente avec Spring Boot et Apache Kafka pour le streaming temps réel des alertes de non-conformité, associée à une interface Angular interactive intégrant la cartographie 2D/3D des défauts.",
      keyFeatures: [
        'Moteur de rendu et visualisation 2D/3D interactive des pièces et zones de non-conformité',
        'Streaming temps réel des contrôles qualité avec Apache Kafka et Spring Kafka',
        'Tableaux de bord analytiques pour le suivi des taux de non-conformité par poste de production',
        'Coordination d’équipes techniques, revues de code et animation des cérémonies Agiles',
        'Tests automatisés avec JUnit et Mockito pour garantir la haute qualité des livraisons',
      ],
      techStack: ['Java 17', 'Spring Boot', 'Apache Kafka', 'Angular', 'Visualisation 2D/3D', 'Docker', 'JUnit', 'Mockito'],
      metrics: 'Réduction de 40% du temps d’identification et de traitement des non-conformités',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      featured: true,
      architecture: {
        pattern: 'Architecture Microservices Orientée Événements (EDA) avec Rendu 2D/3D',
        layers: [
          { name: 'Couche Présentation (Frontend)', tech: 'Angular v17+, Three.js / Canvas 2D/3D, RxJS', description: 'Rendu 2D/3D réactif, inspection visuelle des pièces et réception des alertes via WebSockets' },
          { name: 'Passerelle API & Sécurité', tech: 'Spring Cloud Gateway, Spring Security, JWT', description: 'Routage dynamique des requêtes, authentification stateless et validation des tokens' },
          { name: 'Bus de Messages / Streaming', tech: 'Apache Kafka & Spring Kafka', description: 'Topics d’événements de contrôle, partitionnement par poste de travail et Dead Letter Queue (DLQ)' },
          { name: 'Services Métiers Backend', tech: 'Microservices Spring Boot (Contrôle, Télémétrie, Alertes)', description: 'Traitement asynchrone des flux de mesures et consolidation des états de conformité' },
          { name: 'Persistance & Stockage', tech: 'Oracle Database & PostgreSQL', description: 'Stockage relationnel des historiques d’anomalies et plans d’actions correctives' },
        ],
        dataFlow: [
          '1. Détection d’une anomalie ou saisie d’un contrôle sur le poste d’assemblage',
          '2. Publication instantanée de l’événement dans le topic Kafka partitionné par atelier',
          '3. Consommation asynchrone par le microservice d’analyse et historisation sécurisée',
          '4. Push WebSocket vers l’interface Angular pour mise à jour immédiate de la pièce en 2D/3D',
        ],
        securityAndResilience: [
          'Tolérance aux pannes avec retry exponentiel et redirection vers Dead Letter Topic (DLQ)',
          'Isolement des microservices dans des conteneurs Docker avec contrôle d’accès strict',
          'Automatisation des tests d’intégration avec JUnit et Mockito dans la pipeline GitLab CI',
        ],
      },
    },
    {
      id: 'qualifour-traceur-gps',
      title: 'Traceur GPS Voiture pour Agence de Location de Voiture (QualiFour)',
      tagline: 'Géolocalisation temps réel, suivi de flotte automobile & gestion des contrats',
      category: 'Microservices & Kafka',
      description: "Développement d'un système complet de tracking GPS et de gestion de flotte pour agence de location de véhicules : géolocalisation en direct, télémétrie, geofencing et gestion dématérialisée des contrats de location.",
      problem: "Besoin de sécuriser les véhicules en location, d'éviter les vols, de surveiller le kilométrage réel et d'être alerté instantanément en cas de sortie de périmètre autorisé.",
      solution: "Ingestion continue des trames GPS via Apache Kafka, traitement asynchrone des événements de position avec Spring Boot, et interface cartographique temps réel en Angular avec alertes de geofencing.",
      keyFeatures: [
        'Suivi cartographique temps réel de la flotte avec tracé des itinéraires et vitesses',
        'Gestion de zones de circulation autorisées (Geofencing) et déclenchement d’alertes immédiates',
        'Module de gestion des contrats de location, fiches véhicules et état des lieux',
        'Traitement asynchrone à haute fréquence des paquets de télémétrie via Apache Kafka',
      ],
      techStack: ['Java', 'Spring Boot', 'Apache Kafka', 'Angular', 'Geofencing GPS', 'PostgreSQL', 'Docker'],
      metrics: 'Supervision simultanée de centaines de véhicules avec latence GPS <1 seconde',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      featured: true,
      architecture: {
        pattern: 'Streaming Télématique Temps Réel & Traitement Géospatial Distribué',
        layers: [
          { name: 'Ingestion Télématique', tech: 'Apache Kafka (Topic gps-telemetry)', description: 'Partitionnement par identifiant unique de véhicule (VIN) pour garantir l’ordre chronologique' },
          { name: 'Moteur de Calcul Spatial', tech: 'Microservice Spring Boot & Spatial Engine', description: 'Calcul de vitesse, détection de franchissement de polygones de Geofencing et alertes' },
          { name: 'Couche Cartographique Frontend', tech: 'Angular, Leaflet / Mapbox, WebSockets', description: 'Affichage dynamique des marqueurs de véhicules et rafraîchissement sans rechargement' },
          { name: 'Base Géospatiale', tech: 'PostgreSQL avec extension PostGIS', description: 'Indexation spatiale (GIST) pour des requêtes d’inclusion polygonale ultra-rapides' },
        ],
        dataFlow: [
          '1. Boîtier télématique du véhicule émettant une trame de coordonnées GPS toutes les 3 secondes',
          '2. Ingestion massive et persistante dans Apache Kafka avec découplage complet des producteurs',
          '3. Évaluation géométrique des zones autorisées par le worker Spring Boot',
          '4. Notification d’alerte par SMS/Email en cas de sortie de zone et affichage en temps réel',
        ],
        securityAndResilience: [
          'Chiffrement des paquets de télémétrie et sécurisation des endpoints d’ingestion',
          'Scalabilité horizontale des consommateurs Kafka pour absorber les pics de flotte',
        ],
      },
    },
    {
      id: 'qualifour-erp-callcenter',
      title: 'ERP pour Centre d’Appel (QualiFour)',
      tagline: 'Gestion des flux d’appels, plannings des téléopérateurs, prospects & KPIs',
      category: 'Full Stack (Spring / Angular)',
      description: "Conception et réalisation d'un progiciel de gestion intégré (ERP) dédié aux centres d'appels : gestion des campagnes d'appels entrants/sortants, distribution intelligente des fiches prospects, et monitoring des téléopérateurs.",
      problem: "Organisation manuelle inefficace de la distribution des appels, perte de temps entre les communications et manque d'indicateurs de performance en direct.",
      solution: "Architecture d'une solution modulaire Full Stack avec Spring Boot pour l'orchestration des flux et Angular pour une interface de téléphonie et de gestion ultra-réactive.",
      keyFeatures: [
        'Distribution automatisée des fiches prospects selon la disponibilité des téléopérateurs',
        'Tableau de bord de supervision en direct (durée moyenne d’appel, taux de transformation)',
        'Gestion des plannings d’équipes, pauses et historique des échanges clients',
        'APIs REST sécurisées et persistance optimisée des bases relationnelles',
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'REST APIs', 'Spring Security', 'MySQL'],
      metrics: '+25% de productivité constatée sur les campagnes de téléprospection',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)',
      featured: false,
      architecture: {
        pattern: 'Architecture Modulaire 3-Tiers avec Moteur de Distribution Temps Réel',
        layers: [
          { name: 'Interface Téléopérateur & Supervision', tech: 'Angular, Bootstrap, WebSockets', description: 'Fiche client interactive, numérotation rapide et suivi des états des agents en temps réel' },
          { name: 'Cœur Métier & Distribution', tech: 'Spring Boot, Spring MVC, REST APIs', description: 'Orchestration des règles de dispatching d’appels et calcul des statistiques DMT' },
          { name: 'Sécurité & Droits', tech: 'Spring Security, RBAC (Rôles Agents / Superviseurs / Admins)', description: 'Cloisonnement strict des accès aux données prospects et écoutes' },
          { name: 'Persistance', tech: 'MySQL Relationnel avec pool HikariCP', description: 'Gestion transactionnelle des fiches d’appels et historiques de téléprospection' },
        ],
        dataFlow: [
          '1. Import des listes de prospects et attribution automatique selon les compétences des agents',
          '2. Présentation instantanée de la fiche prospect à l’écran de l’agent disponible',
          '3. Enregistrement des motifs d’appels et déclenchement des actions de rappel',
          '4. Agrégation en direct des statistiques de performance pour les superviseurs',
        ],
        securityAndResilience: [
          'Protection des données confidentielles prospects (conformité RGPD)',
          'Audit trail complet sur les modifications de fiches et exports',
        ],
      },
    },

    /* =================================================================
       TIMSOFT GROUP PROJECTS
       ================================================================= */
    {
      id: 'timsoft-factures-paiement',
      title: 'Plateforme de Paiement de Factures en Ligne (Timsoft Group)',
      tagline: 'Paiement sécurisé multicanal, rapprochement bancaire & émission de reçus',
      category: 'Optimisation & Data',
      description: "Développement d'une plateforme sécurisée de règlement de factures en ligne : consultation des créances, passerelle de paiement bancaire, génération automatique des reçus et synchronisation avec les bases de données Oracle.",
      problem: "Volume massif de transactions à traiter lors des clôtures de facturation, nécessitant une tolérance aux pannes et des temps de réponse inférieurs à la seconde.",
      solution: "Audit et optimisation des requêtes et procédures stockées PL/SQL Oracle (+30% de gain mesuré), sécurisation par Spring Security et interface Angular ergonomique.",
      keyFeatures: [
        'Intégration de passerelles de paiement électronique sécurisées avec chiffrement de bout en bout',
        'Optimisation des requêtes complexes Oracle SQL et procédures PL/SQL (+30% de temps de réponse)',
        'Génération automatique des avis de règlement et quittances au format PDF téléchargeable',
        'Tableaux de bord d’administration pour le suivi des encaissements et rapprochements',
      ],
      techStack: ['Angular', 'Spring Boot', 'Oracle SQL', 'PL/SQL', 'SQL Developer', 'Spring Security', 'REST APIs'],
      metrics: 'Gain de 30% sur les temps de réponse applicatifs et zéro incident de paiement',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
      featured: true,
      architecture: {
        pattern: 'Architecture Haute Performance N-Tiers avec Tuning Oracle PL/SQL',
        layers: [
          { name: 'Portail Client & Espace Usager', tech: 'Angular, SCSS, Reactive Forms', description: 'Consultation du relevé de compte, sélection des factures et validation sécurisée' },
          { name: 'Service Bancaire & Paiement', tech: 'Spring Boot, Spring Security, Chiffrement TLS', description: 'Intégration de la passerelle de paiement bancaire et vérification d’intégrité' },
          { name: 'Moteur de Persistance & Tuning', tech: 'Oracle Database, Procédures stockées PL/SQL', description: 'Plans d’exécution optimisés, indexation partitionnée et réduction de 30% de la latence' },
          { name: 'Générateur Documentaire', tech: 'JasperReports / PDF Engine', description: 'Édition instantanée des quittances et certificats de paiement acquittés' },
        ],
        dataFlow: [
          '1. Interrogation du montant des créances via procédure stockée Oracle indexée',
          '2. Redirection sécurisée vers la passerelle de paiement avec tokenisation carte',
          '3. Notification bancaire asynchrone (IPN) et validation transactionnelle ACID en base Oracle',
          '4. Mise à disposition immédiate du reçu de règlement pour téléchargement par l’usager',
        ],
        securityAndResilience: [
          'Conformité stricte aux exigences de sécurité des transactions financières',
          'Gestion des rollbacks transactionnels en cas de coupure réseau pour éviter tout débit non justifié',
        ],
      },
    },
    {
      id: 'timsoft-abonnement-bus',
      title: 'Système de Gestion d’Abonnement de Bus (Timsoft Group)',
      tagline: 'Gestion des titres de transport, souscription dématérialisée & contrôle',
      category: 'Full Stack (Spring / Angular)',
      description: "Développement du système de gestion des abonnements pour réseaux de transport en bus : portail usager pour la souscription en ligne, gestion des circuits et lignes, et back-office de validation des titres de transport.",
      problem: "Files d'attente importantes aux guichets physiques et complexité de gestion manuelle des dossiers scolaires et professionnels.",
      solution: "Création d'un portail web moderne en Angular avec workflow de validation Spring Boot, intégrant la vérification des pièces justificatives et l'émission des cartes de transport.",
      keyFeatures: [
        'Souscription, renouvellement et paiement d’abonnements de bus en ligne',
        'Module administratif de gestion des lignes, arrêts, tarifs et catégories d’usagers',
        'Vérification des justificatifs et notification automatique de validation de dossier',
        'APIs REST modulaires avec contrôle d’accès basé sur les rôles (RBAC)',
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'Oracle SQL', 'REST APIs', 'Bootstrap'],
      metrics: 'Dématérialisation de plus de 30 000 dossiers d’abonnés par an',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
      featured: false,
      architecture: {
        pattern: 'Architecture SOA Modulaire avec Workflow Documentaire Dématérialisé',
        layers: [
          { name: 'Front-Office Usagers & Portail Scolaire', tech: 'Angular, Bootstrap, PWA', description: 'Dépôt des dossiers, choix des circuits et suivi de l’état d’avancement' },
          { name: 'Back-Office Gestionnaire', tech: 'Angular, DataGrid, Validation de pièces', description: 'Contrôle des justificatifs d’identité et de scolarité et validation des titres' },
          { name: 'Services de Traitement', tech: 'Spring Boot, Spring Data JPA', description: 'Gestion des quotas par ligne de bus et tarifications spéciales' },
          { name: 'Base de Données', tech: 'Oracle Database relationnelle', description: 'Persistance sécurisée des dossiers usagers et des transactions d’abonnement' },
        ],
        dataFlow: [
          '1. Saisie des informations de l’abonné et téléchargement des pièces justificatives',
          '2. Contrôle automatique des formats et stockage sécurisé des documents',
          '3. Workflow de validation par les agents administratifs du réseau de transport',
          '4. Génération de la carte numérique avec QR Code sécurisé pour le contrôle en bus',
        ],
        securityAndResilience: [
          'Chiffrement des documents personnels et conformité aux règles de protection des données',
          'Couverture de tests unitaires avec JUnit garantissant le bon calcul des tarifications',
        ],
      },
    },
    {
      id: 'timsoft-ecommerce',
      title: 'Plateforme E-Commerce B2B / B2C (Timsoft Group)',
      tagline: 'Boutique en ligne, catalogue produits dynamique & gestion des commandes',
      category: 'Full Stack (Spring / Angular)',
      description: "Conception et développement d'une plateforme de commerce électronique complète : catalogue de produits dynamique avec recherche facettée, gestion du panier d'achat, tunnel de commande et suivi de livraison.",
      problem: "Nécessité de moderniser l'expérience d'achat en ligne avec une interface rapide, responsive et connectée aux stocks en temps réel.",
      solution: "Frontend Angular réactif avec gestion d'état fluide, connecté à un backend Spring Boot robuste garantissant la cohérence transactionnelle des commandes.",
      keyFeatures: [
        'Catalogue produits avec filtres dynamiques, variantes et recherche multicritères',
        'Tunnel de commande optimisé avec gestion du panier et modes de livraison',
        'Back-office commerçant pour la gestion des stocks, commandes et promotions',
        'Design 100% responsive adapté aux achats sur mobile et desktop',
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'REST APIs', 'Oracle Database', 'Bootstrap'],
      metrics: 'Amélioration de 35% de la vitesse de navigation et chargement du catalogue',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%)',
      featured: false,
      architecture: {
        pattern: 'Architecture E-Commerce Découplée (Headless) avec Gestion Transactionnelle',
        layers: [
          { name: 'Boutique Client (Storefront)', tech: 'Angular, SCSS, Lazy Loading', description: 'Expérience d’achat fluide, recherche instantanée et panier persistant' },
          { name: 'Services Métiers E-Commerce', tech: 'Spring Boot REST APIs', description: 'Gestion des catalogues, calcul des remises promotionnelles et gestion de panier' },
          { name: 'Moteur de Persistance & Stock', tech: 'Oracle Database avec verrous pessimistes/optimistes', description: 'Garantie de non-dépassement des stocks physiques lors des commandes simultanées' },
        ],
        dataFlow: [
          '1. Navigation dans le catalogue avec filtres facettés optimisés',
          '2. Ajout au panier avec vérification de disponibilité en temps réel',
          '3. Validation du tunnel de commande et réservation temporaire de stock',
          '4. Confirmation du paiement et transmission de l’ordre de préparation au magasin',
        ],
        securityAndResilience: [
          'Sécurisation des paiements et protection contre les injections SQL et failles CSRF',
          'Mise en cache des fiches articles pour maintenir des temps de réponse inférieurs à 200ms',
        ],
      },
    },

    /* =================================================================
       NAZA DEV SOLUTIONS PROJECTS
       ================================================================= */
    {
      id: 'naza-smart-farm',
      title: 'Smart Farm — Solution IoT & Agriculture Intelligente (NAZA Dev Solutions)',
      tagline: 'Monitoring de capteurs agricoles, irrigation connectée & télémétrie',
      category: 'DevOps & CI/CD',
      description: "Développement d'une plateforme IoT pour l'agriculture intelligente (Smart Farm) : collecte et visualisation en direct des données de capteurs (humidité du sol, température, météo) et pilotage automatique de l'irrigation.",
      problem: "Gaspillage d'eau d'irrigation et manque de données précises sur les besoins hydriques réels des parcelles agricoles.",
      solution: "Système connecté avec microservices Spring Boot pour l'ingestion des mesures de sondes, déclenchement automatisé des vannes d'irrigation, et tableau de bord de supervision en Angular.",
      keyFeatures: [
        'Ingestion et affichage temps réel des mesures de capteurs agricoles (sondes IoT)',
        'Algorithme de déclenchement automatique d’irrigation selon les seuils configurés',
        'Conteneurisation Docker et chaîne d’intégration continue avec GitLab CI/CD',
        'Cartographie interactive des parcelles et historique des consommations d’eau',
      ],
      techStack: ['Spring Boot', 'Angular', 'IoT Sensors', 'Docker', 'GitLab CI/CD', 'MySQL'],
      metrics: 'Économie d’eau estimée à plus de 30% grâce au pilotage automatisé',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
      featured: true,
      architecture: {
        pattern: 'Architecture IoT Réactive avec Déploiement Continu Docker & GitLab CI',
        layers: [
          { name: 'Passerelle Capteurs IoT', tech: 'MQTT / HTTP REST Ingestion', description: 'Réception des mesures d’humidité, de conductivité et de température du sol' },
          { name: 'Moteur de Règles Agricoles', tech: 'Spring Boot Services', description: 'Comparaison des valeurs mesurées aux seuils agronomiques et pilotage des électrovannes' },
          { name: 'Dashboard Exploitant', tech: 'Angular, Chart.js, Cartographie', description: 'Visualisation des graphes de dessèchement du sol et statut des vannes en direct' },
          { name: 'Industrialisation & DevOps', tech: 'Docker, GitLab CI/CD, Linux', description: 'Builds automatisés, tests unitaires JUnit et déploiements conteneurisés' },
        ],
        dataFlow: [
          '1. Les sondes IoT transmettent leurs mesures périodiques au backend Spring Boot',
          '2. L’algorithme analyse l’humidité et détermine s’il faut déclencher l’arrosage',
          '3. Envoi du signal d’ouverture/fermeture vers le contrôleur d’irrigation',
          '4. Mise à jour automatique des graphiques sur le tableau de bord exploitant',
        ],
        securityAndResilience: [
          'Continuité de fonctionnement hors-ligne en cas de coupure temporaire de liaison cloud',
          'Images Docker multi-stage légères et sécurisées scannées contre les vulnérabilités',
        ],
      },
    },
    {
      id: 'naza-carbon-converter',
      title: 'Carbon Converter — Calculateur d’Empreinte Carbone (NAZA Dev Solutions)',
      tagline: 'Conversion et estimation des émissions de CO2 par activité & reporting RSE',
      category: 'Full Stack (Spring / Angular)',
      description: "Application web de calcul et conversion d'empreinte carbone : estimation des émissions de gaz à effet de serre (CO2) par activité (transports, énergie, consommation) et simulateur de réduction pour particuliers et entreprises.",
      problem: "Complexité d'évaluer concrètement l'impact environnemental des activités quotidiennes et manque d'outils visuels de sensibilisation aux émissions de CO2.",
      solution: "Moteur de calcul basé sur des facteurs d'émissions certifiés, avec interface interactive en Angular permettant de visualiser l'impact sous forme d'équivalents concrets.",
      keyFeatures: [
        'Formulaire de saisie dynamique des activités et habitudes de consommation',
        'Moteur de conversion instantané en kg/tonnes équivalent CO2 avec graphiques',
        'Comparateur d’impact et suggestions personnalisées de réduction d’empreinte',
        'Génération et export de synthèses au format PDF pour démarches RSE',
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'Chart.js', 'REST APIs', 'Bootstrap'],
      metrics: 'Utilisé par des centaines d’utilisateurs pour évaluer leur bilan carbone',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)',
      featured: false,
      architecture: {
        pattern: 'Architecture Modulaire de Calcul Analytique & Reporting',
        layers: [
          { name: 'Simulateur Interactif', tech: 'Angular, Reactive Forms, Chart.js', description: 'Calcul en temps réel côté client et visualisation dynamique par graphiques interactifs' },
          { name: 'Moteur de Facteurs d’Émission', tech: 'Spring Boot, Algorithmes certifiés', description: 'Base de données des coefficients de conversion carbone et agrégations sectorielles' },
          { name: 'Module d’Export RSE', tech: 'PDF Generator Service', description: 'Création automatisée de bilans synthétiques prêts à l’audit environnemental' },
        ],
        dataFlow: [
          '1. Renseignement des consommations énergétiques et déplacements professionnels',
          '2. Conversion instantanée via les tables de facteurs d’émission normalisées',
          '3. Restitution visuelle avec comparatifs sectoriels et équivalents visuels (arbres, vols)',
          '4. Téléchargement du rapport d’impact consolidé pour l’entreprise',
        ],
        securityAndResilience: [
          'Tests unitaires stricts sur les algorithmes de calcul mathématique (JUnit 5)',
          'Architecture stateless facilitant la montée en charge lors des campagnes de sensibilisation',
        ],
      },
    },
    {
      id: 'naza-comparateur-assurance',
      title: 'Comparateur d’Assurance en Ligne (NAZA Dev Solutions)',
      tagline: 'Moteur de comparaison de devis d’assurance auto, santé & habitation',
      category: 'Full Stack (Spring / Angular)',
      description: "Plateforme web de comparaison d'assurances en temps réel : simulation tarifaire multicritères (auto, moto, habitation, santé), génération de devis comparatifs et mise en relation directe avec les courtiers partenaires.",
      problem: "Processus fastidieux pour les assurés de solliciter chaque compagnie d'assurance individuellement pour comparer les garanties et tarifs.",
      solution: "Moteur d'agrégation d'offres avec questionnaire dynamique par étapes en Angular, calcul en temps réel des primes d'assurance via Spring Boot et envoi automatisé des devis.",
      keyFeatures: [
        'Tunnel de souscription dynamique en étapes avec validation instantanée',
        'Calcul comparatif des garanties, franchises et cotisations annuelles/mensuelles',
        'Génération automatisée de devis comparatifs au format PDF avec envoi d’emails',
        'Couverture de tests unitaires (JUnit/Mockito) pour garantir la fiabilité des calculs',
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'JUnit', 'Mockito', 'REST APIs', 'MySQL'],
      metrics: 'Comparaison instantanée de plus de 15 formules d’assurance en <3 secondes',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
      featured: false,
      architecture: {
        pattern: 'Architecture Micro-Services d’Agrégation Tarifaire & Moteur de Règles',
        layers: [
          { name: 'Tunnel de Saisie Multi-Étapes', tech: 'Angular Stepper, Reactive Forms', description: 'Questionnaire dynamique adaptatif avec contrôle d’intégrité des champs' },
          { name: 'Moteur de Scoring & Tarification', tech: 'Spring Boot Services', description: 'Évaluation des profils de risque et calcul des barèmes selon les grilles assureurs' },
          { name: 'Service de Notification & Devis', tech: 'JavaMail, PDF Engine', description: 'Génération et expédition asynchrone des synthèses comparatives par email' },
          { name: 'Persistance', tech: 'MySQL', description: 'Stockage des simulations et suivi des conversions vers les courtiers' },
        ],
        dataFlow: [
          '1. Saisie des caractéristiques du bien ou du profil conducteur par l’utilisateur',
          '2. Évaluation parallèle des grilles tarifaires partenaires par le moteur Spring Boot',
          '3. Classement des offres par rapport qualité/prix et mise en avant des garanties clés',
          '4. Choix de l’assuré et transmission instantanée du lead au courtier sélectionné',
        ],
        securityAndResilience: [
          'Chiffrement des données sensibles des assurés et anonymisation des simulations',
          'Validation TDD rigoureuse de chaque formule de calcul de prime et de franchise',
        ],
      },
    },
    {
      id: 'naza-gestion-formation',
      title: 'Plateforme de Gestion de Formation & LMS (NAZA Dev Solutions)',
      tagline: 'Planification des sessions, suivi des formateurs, inscriptions & certifications',
      category: 'Full Stack (Spring / Angular)',
      description: "Système de gestion intégrée pour organismes de formation professionnelle : gestion du catalogue de cours, planification des sessions et salles, gestion des présences, évaluations et édition d'attestations certifiées.",
      problem: "Gestion administrative éclatée entre feuilles Excel, plannings papier et suivi complexe des présences et certifications des apprenants.",
      solution: "Plateforme web centralisée développée avec Spring Boot et Angular, avec conteneurisation Docker et automatisation des déploiements par GitLab CI/CD.",
      keyFeatures: [
        'Gestion des catalogues de formation, plannings de sessions et affectation des formateurs',
        'Portail stagiaire pour l’inscription en ligne et le téléchargement des supports de cours',
        'Émargement numérique des présences et génération automatique des attestations de stage',
        'Automatisation des builds et déploiements continus avec Docker et GitLab CI',
      ],
      techStack: ['Angular', 'Spring Boot', 'Docker', 'GitLab CI/CD', 'MySQL', 'REST APIs'],
      metrics: 'Gestion fluide de dizaines de formations et des centaines d’apprenants',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #581c87 0%, #6b21a8 50%, #7e22ce 100%)',
      featured: false,
      architecture: {
        pattern: 'Architecture 3-Tiers Conteneurisée avec Pipeline CI/CD GitLab',
        layers: [
          { name: 'Portail Collaboratif', tech: 'Angular, Angular Material / Bootstrap', description: 'Interfaces dédiées pour les apprenants, les formateurs et les coordinateurs de stage' },
          { name: 'Services de Gestion Administrative', tech: 'Spring Boot REST APIs', description: 'Contrôle des présences, gestion des salles, émargement et évaluation' },
          { name: 'Chaîne DevOps', tech: 'Docker, GitLab CI/CD, Linux', description: 'Déploiement continu sans interruption de service et conteneurisation' },
          { name: 'Persistance Relationnelle', tech: 'MySQL', description: 'Gestion des inscriptions, notes d’évaluations et archives des certificats délivrés' },
        ],
        dataFlow: [
          '1. Publication des sessions de formation avec calendrier interactif',
          '2. Inscription en ligne des stagiaires et validation administrative',
          '3. Émargement dématérialisé à chaque séance avec signature électronique',
          '4. Génération automatique du certificat de réussite après complétion du cursus',
        ],
        securityAndResilience: [
          'Contrôle d’accès strict basé sur les rôles (Formateur, Apprenant, Administrateur)',
          'Sauvegardes automatisées des bases de données et des archives de certification',
        ],
      },
    },

    /* =================================================================
       ISE MENZAH PROJECT
       ================================================================= */
    {
      id: 'ise-contact-platform',
      title: 'Plateforme de Gestion du Contact Téléphonique (ISE Menzah)',
      tagline: 'Extraction de numéros d’annuaires & consultation synchronisée Web / Mobile',
      category: 'Full Stack (Spring / Angular)',
      description: "Conception et développement d'une plateforme complète de gestion du contact téléphonique chez ISE Menzah : extraction automatisée de numéros depuis des annuaires professionnels, et synchronisation pour consulter les contacts de son téléphone sur l'interface Web et sur application mobile.",
      problem: "Difficulté d'extraire rapidement les coordonnées téléphoniques d'annuaires variés, et absence de solution fluide permettant de synchroniser et consulter les contacts de son téléphone sur un ordinateur (Web) comme sur smartphone (Mobile).",
      solution: "Architecture d'une solution réactive Full Stack avec Spring Boot pour les services backend, le parsing d'annuaires et les APIs REST, couplé à Angular pour l'interface web réactive et une passerelle mobile.",
      keyFeatures: [
        'Extraction automatisée des numéros de téléphone à partir des annuaires',
        'Consultation des contacts de votre téléphone directement dans l’interface Web',
        'Accès et consultation synchronisée avec application mobile',
        'Création d’interfaces utilisateur interactives, fluides et responsives avec Angular',
        'Intégration transparente des services backend via des APIs RESTful documentées',
        'Mise en place des premiers tests unitaires pour fiabiliser l’intégrité des répertoires',
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'Mobile Sync', 'REST APIs', 'MySQL', 'Bootstrap', 'JUnit'],
      metrics: 'Extraction, synchronisation et consultation de plus de 50 000+ contacts téléphoniques',
      liveUrl: 'https://www.linkedin.com/in/bachir-karroudi-453392308/',
      githubUrl: 'https://github.com/bachir422018',
      imageGradient: 'linear-gradient(135deg, #2e1065 0%, #3b0764 50%, #7e22ce 100%)',
      featured: true,
      architecture: {
        pattern: 'Architecture de Synchronisation Cross-Plateforme Web & Mobile',
        layers: [
          { name: 'Interface Web Utilisateur', tech: 'Angular, SCSS, Responsive Web', description: 'Recherche instantanée de contacts, filtres par source et gestion des carnets' },
          { name: 'Moteur d’Extraction & Parsing', tech: 'Spring Boot, Web Scraper / Parser', description: 'Normalisation des formats téléphoniques internationaux et dédoublonnage' },
          { name: 'Passerelle Mobile & Synchronisation', tech: 'REST APIs, Sync Protocol', description: 'Communication sécurisée avec les applications mobiles pour l’accès bidirectionnel' },
          { name: 'Persistance', tech: 'MySQL', description: 'Indexation des répertoires pour une recherche instantanée sur de gros volumes' },
        ],
        dataFlow: [
          '1. Lancement du module d’extraction automatique sur les sources d’annuaires configurées',
          '2. Nettoyage, validation syntaxique et dédoublonnage des numéros récoltés',
          '3. Enregistrement sécurisé et synchronisation vers la passerelle de contacts',
          '4. Accès instantané aux coordonnées aussi bien sur le téléphone que sur le portail Web',
        ],
        securityAndResilience: [
          'Protection contre les accès non autorisés et chiffrement des listes de contacts',
          'Premiers tests unitaires JUnit automatisés pour garantir la stabilité de l’extraction',
        ],
      },
    },
  ]);

  public readonly skillCategories = signal<SkillCategory[]>([
    {
      name: 'Backend & Microservices',
      icon: 'backend',
      description: 'Conception de microservices robustes, scalables et sécurisés avec Java et l’écosystème Spring.',
      skills: [
        { name: 'Java (8 / 11 / 17)', level: 96, badge: 'Expert' },
        { name: 'Spring Boot', level: 95, badge: 'Expert' },
        { name: 'Spring Security & REST APIs', level: 92, badge: 'Avancé' },
        { name: 'Architecture Microservices', level: 94, badge: 'Expert' },
        { name: 'Spring MVC & Data', level: 90, badge: 'Avancé' },
      ],
    },
    {
      name: 'Messaging & Event-Driven (Kafka)',
      icon: 'messaging',
      description: 'Communication asynchrone, traitement d’événements en continu et découplage de systèmes distribués.',
      skills: [
        { name: 'Apache Kafka', level: 92, badge: 'Expert' },
        { name: 'Spring Kafka', level: 90, badge: 'Avancé' },
        { name: 'Topics, Partitions & Offsets', level: 94, badge: 'Expert' },
        { name: 'Consumer Groups & Scaling', level: 90, badge: 'Avancé' },
        { name: 'Gestion des erreurs & Dead Letter Queue (DLQ)', level: 88, badge: 'Avancé' },
      ],
    },
    {
      name: 'Frontend & UI Web',
      icon: 'frontend',
      description: 'Développement d’interfaces web dynamiques, réactives et responsives avec Angular et TypeScript.',
      skills: [
        { name: 'Angular (v12+)', level: 90, badge: 'Avancé' },
        { name: 'TypeScript', level: 90, badge: 'Avancé' },
        { name: 'HTML5 & CSS3 / SCSS', level: 92, badge: 'Avancé' },
        { name: 'Bootstrap & Responsive Design', level: 90, badge: 'Avancé' },
        { name: 'Visualisation 2D/3D & Cartographie', level: 86, badge: 'Avancé' },
      ],
    },
    {
      name: 'Bases de Données & Optimisation',
      icon: 'database',
      description: 'Modélisation relationnelle, procédures stockées, tuning de performances et requêtage complexe.',
      skills: [
        { name: 'Oracle SQL & PL/SQL', level: 92, badge: 'Avancé' },
        { name: 'Optimisation requêtes & schémas (+30%)', level: 92, badge: 'Expert' },
        { name: 'SQL Developer', level: 90, badge: 'Avancé' },
        { name: 'MySQL', level: 88, badge: 'Avancé' },
      ],
    },
    {
      name: 'DevOps, CI/CD & Déploiement',
      icon: 'devops',
      description: 'Automatisation des pipelines de livraison, conteneurisation et gestion des environnements Linux.',
      skills: [
        { name: 'Docker (Conteneurisation)', level: 88, badge: 'Avancé' },
        { name: 'Jenkins & GitLab CI/CD', level: 86, badge: 'Avancé' },
        { name: 'Environnements Linux & Prod', level: 88, badge: 'Avancé' },
        { name: 'Git & GitFlow', level: 94, badge: 'Expert' },
      ],
    },
    {
      name: 'Tests, Qualité & Leadership',
      icon: 'leadership',
      description: 'Culture de la qualité logicielle (TDD), revues de code, encadrement d’équipes et gestion de sprints.',
      skills: [
        { name: 'TDD (Test-Driven Development)', level: 90, badge: 'Avancé' },
        { name: 'JUnit & Mockito', level: 92, badge: 'Expert' },
        { name: 'SonarQube & Couverture de tests', level: 88, badge: 'Avancé' },
        { name: 'Leadership technique & Mentorat', level: 92, badge: 'Avancé' },
        { name: 'Agile / Scrum & Jira', level: 94, badge: 'Expert' },
      ],
    },
  ]);

  public readonly experience = signal<ExperienceItem[]>([
    {
      role: 'Technical Lead',
      company: 'QualiFour',
      location: 'Tunis, Tunisie',
      period: 'Septembre 2023 – Présent',
      type: 'CDI / Plein temps',
      description: "Pilotage technique et encadrement d'équipes de développement sur des applications d'entreprise Spring Boot / Angular. Conception d'architectures microservices résilientes et événementielles avec Apache Kafka.",
      achievements: [
        "Conception et déploiement d'une solution logicielle de gestion de qualité avec visualisation 2D/3D et coordination d'équipes techniques pour livraisons de haute qualité.",
        "Développement d'un système de traceur GPS voiture pour agence de location de voiture (suivi cartographique temps réel, géofencing, gestion des contrats).",
        "Conception et mise en œuvre d'un ERP dédié aux centres d'appels (gestion des campagnes, flux d'appels, agents et indicateurs de performance).",
        "Intégration d'Apache Kafka et Spring Kafka pour la communication asynchrone entre microservices (topics, partitions, consumer groups, et retraitement des erreurs via Dead Letter Queue).",
        "Promotion du TDD et des revues de code systématiques (JUnit, Mockito, SonarQube) pour garantir maintenabilité et haute couverture de tests.",
        "Mise en place de pipelines CI/CD (Jenkins, GitLab CI/CD) avec Docker, tests automatisés et déploiement continu.",
        "Mentorat technique, animation des revues d'architecture et coordination des livrables inter-équipes.",
      ],
      techStack: ['Java 17', 'Spring Boot', 'Angular', 'Apache Kafka', 'Visualisation 2D/3D', 'Docker', 'Jenkins', 'GitLab CI/CD', 'Oracle SQL', 'JUnit', 'Mockito'],
    },
    {
      role: 'Développeur Full Stack Senior',
      company: 'Timsoft Group',
      location: 'Tunis, Tunisie',
      period: 'Janvier 2022 – Août 2023',
      type: 'CDI / Plein temps',
      description: "Développement d'applications web d'entreprise avec Angular et Spring Boot dans un cadre Agile, avec optimisation des bases de données Oracle SQL / PL-SQL.",
      achievements: [
        "Développement de la plateforme de paiement de factures en ligne sécurisée avec émission de reçus et intégration bancaire.",
        "Conception du système de gestion d'abonnement de bus (titres de transport, souscriptions dématérialisées et contrôle d'accès).",
        "Développement d'une plateforme E-Commerce B2B/B2C complète (catalogue de produits dynamique, panier, commandes et paiements).",
        "Optimisation poussée des bases Oracle SQL et requêtes PL/SQL, améliorant les temps de réponse applicatifs d'environ 30 %.",
        "Conception et intégration d'APIs REST sécurisées avec couverture de tests unitaires et d'intégration.",
        "Participation aux déploiements en production, résolution d'incidents et maintenance applicative.",
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'Oracle SQL', 'PL/SQL', 'SQL Developer', 'REST APIs', 'Agile/Scrum'],
    },
    {
      role: 'Développeur Full Stack',
      company: 'NAZA Dev Solutions',
      location: 'Tunis, Tunisie',
      period: 'Décembre 2020 – Décembre 2021',
      type: 'CDI / Plein temps',
      description: "Conception et développement de plateformes métiers d'entreprise en microservices avec Angular et Spring Boot, et automatisation du cycle de livraison logiciel avec Docker et CI/CD.",
      achievements: [
        "Développement de la solution Smart Farm : plateforme IoT pour l'agriculture connectée, monitoring de capteurs et irrigation intelligente.",
        "Conception du Carbon Converter : calculateur d'empreinte carbone et conversion des émissions de CO2 par activité avec reporting RSE.",
        "Développement d'un comparateur d'assurance en ligne : simulation tarifaire multicritères et génération automatique de devis comparatifs.",
        "Développement de la plateforme de gestion de formation (LMS) : sessions, plannings des formateurs, inscriptions et émargement numérique.",
        "Automatisation des builds et déploiements continus avec Docker, Jenkins et GitLab CI/CD.",
        "Rédaction de tests unitaires et d'intégration (JUnit, Mockito) pour sécuriser les releases en production.",
      ],
      techStack: ['Spring Boot', 'Angular', 'Docker', 'Jenkins', 'GitLab CI/CD', 'IoT', 'Java', 'MySQL', 'REST APIs'],
    },
    {
      role: 'Développeur Full stack',
      company: 'ISE Menzah',
      location: 'Tunis, Tunisie',
      period: 'Août 2019 – Juillet 2020',
      type: 'Plein temps',
      description: "Conception et développement d'une plateforme de gestion du contact téléphonique avec Angular et Spring Boot, permettant l'extraction de numéros d'annuaires et la consultation synchronisée sur interface Web et application mobile.",
      achievements: [
        "Développement de la plateforme de gestion du contact téléphonique avec Angular et Spring Boot.",
        "Conception du module d'extraction des numéros de téléphone à partir des annuaires.",
        "Mise en place des fonctionnalités permettant de consulter les contacts de votre téléphone dans l'interface Web et avec application mobile.",
        "Création d'interfaces utilisateur interactives et responsives en Angular, intégration des services backend via APIs REST.",
        "Mise en place des premiers tests unitaires sur les services backend pour garantir la stabilité des fonctionnalités critiques.",
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'Mobile', 'REST APIs', 'HTML5/CSS3', 'Bootstrap', 'JUnit'],
    },
  ]);

  public readonly faqs = signal([
    {
      question: 'Quels types de postes et missions recherchez-vous ?',
      answer: "Je suis activement à l'écoute d'opportunités en tant que Technical Lead, Lead Developer ou Développeur Full Stack Java Senior orienté architecture, microservices, Angular et intégration Kafka (sur site, hybride à Tunis ou 100% remote).",
    },
    {
      question: "Quelle est votre expertise sur l'écosystème événementiel Apache Kafka ?",
      answer: "J'ai conçu et mis en production des architectures orientées événements complètes : configuration de clusters et topics, partitionnement, gestion des consumer groups, garantie de livraison, et implémentation de mécanismes de Dead Letter Queue (DLQ) pour le traitement des erreurs asynchrones.",
    },
    {
      question: 'Comment garantissez-vous la qualité logicielle et la robustesse ?',
      answer: "Je préconise le Test-Driven Development (TDD) avec JUnit et Mockito, des revues de code rigoureuses, des seuils de qualité SonarQube automatisés dans les pipelines CI/CD (GitLab CI / Jenkins) et des architectures modulaires bien découplées.",
    },
    {
      question: 'Quelle est votre expérience en optimisation de bases de données ?',
      answer: "J'ai optimisé des bases Oracle SQL et des procédures stockées PL/SQL complexes chez Timsoft Group, ce qui a permis d'améliorer les temps de réponse applicatifs d'environ 30 % sur des traitements critiques.",
    },
  ]);

  public getProjectById(id: string): Project | undefined {
    return this.projects().find((p) => p.id === id);
  }
}
