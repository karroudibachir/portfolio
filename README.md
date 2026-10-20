# 🚀 Portfolio Professionnel — Bachir Karroudi

**Technical Lead | Senior Développeur Full Stack Java**  
*Spring Boot • Angular • Microservices • Apache Kafka • Docker • Oracle PL/SQL*  
📍 Tunis, Tunisie &bull; ✉️ bachir422018@gmail.com &bull; 📞 +216 92 657 905 &bull; [LinkedIn](https://linkedin.com/in/bachir-karroudi-453392308)

---

## 🎯 Présentation du Projet

Application web moderne, réactive et performante développée avec **Angular 22**, **TypeScript** et **SCSS**. Ce portfolio met en valeur le parcours professionnel, les compétences clés en architecture distribuée et microservices, les projets d'entreprise réalisés et un formulaire de contact interactif.

---

## 💼 Profil & Parcours

- **Expérience** : Plus de 6 ans dans la conception, le développement et le déploiement d'applications d'entreprise.
- **Rôle actuel** : **Technical Lead** chez **QualiFour** (Septembre 2023 – Présent) :
  - *Solution logicielle de gestion de qualité avec visualisation 2D/3D et coordination d'équipes techniques*
  - *Traceur GPS voiture pour agence de location de voiture*
  - *ERP pour centre d'appel*
- **Expériences précédentes** :
  - Développeur Full Stack Senior — **Timsoft Group** (2022 – 2023) :
    - *Plateforme de paiement de factures en ligne (optimisation Oracle SQL/PL-SQL +30%)*
    - *Gestion d'abonnement de bus*
    - *Plateforme E-Commerce B2B / B2C*
  - Développeur Full Stack — **NAZA Dev Solutions** (2020 – 2021) :
    - *Smart Farm (IoT agricole & irrigation connectée)*
    - *Carbon converter (calculateur d'empreinte carbone & CO2)*
    - *Comparateur d'assurance en ligne*
    - *Gestion de formation (LMS)*
  - Développeur Full stack — **ISE Menzah** (2019 – 2020) :
    - *Plateforme de gestion du contact téléphonique (extraction des annuaires, synchronisation Web & mobile)*
- **Diplômes** :
  - **Master Professionnel** : Ingénierie Logicielle Open Source (2023 – 2025)
  - **Licence Appliquée** : Technologie de l'Informatique (2017 – 2020)

---

## 🛠️ Compétences Techniques Clés

- **Backend** : Java 8/11/17, Spring Boot, Spring MVC, Spring Security, REST APIs, Microservices
- **Messaging / Event-Driven** : Apache Kafka, Spring Kafka, topics, partitions, consumer groups, offsets, gestion des erreurs et événements asynchrones (DLQ)
- **Frontend** : Angular (v12+ / Standalone / Signals), TypeScript, HTML5, CSS3/SCSS, Bootstrap, JavaScript
- **Bases de données** : Oracle SQL, PL/SQL, SQL Developer, MySQL, optimisation des requêtes et schémas (+30% de gain applicatif)
- **Tests & Qualité** : TDD, JUnit, Mockito, tests unitaires, tests d'intégration, SonarQube
- **DevOps & CI/CD** : Docker, Jenkins, GitLab CI/CD, Linux, déploiements en production
- **Méthodologies & Leadership** : Agile/Scrum, Jira, Git, revue de code, mentorat technique, planification de sprints

---

## ✨ Fonctionnalités du Portfolio

1. **Header & Navigation Responsive** :
   - Logo avec monogramme BK, statut de disponibilité dynamique.
   - Drawer mobile interactif avec navigation tactile.
   - Sélecteur de thème Sombre / Clair avec persistance dans le `localStorage`.
2. **Page d'Accueil (Home)** :
   - Titre animé avec rotation des rôles phares.
   - Indicateurs métriques en direct (6+ ans d'expérience, +30% de gain Oracle, TDD & CI/CD).
   - Carte terminal stylisée avec code Java (`BachirKarroudi.java`).
   - Piliers d'expertise et chronologie des expériences en entreprise.
   - Bouton de téléchargement du CV en direct (`Bachir-Karroudi-CV.md`).
3. **Page À Propos (About)** :
   - Biographie détaillée et vision de l'ingénierie logicielle.
   - Matrice interactive des compétences techniques avec jauges de progression par catégorie.
   - Section Diplômes & Formations (Master & Licence).
   - Section Langues (Français, Anglais, Arabe).
4. **Vitrine des Projets (Projects Showcase)** :
   - Moteur de recherche instantané par mot-clé, nom ou technologie.
   - Filtres par catégorie (*Tous*, *Microservices & Kafka*, *Full Stack (Spring / Angular)*, *DevOps & CI/CD*, *Optimisation & Data*).
   - Modal d'étude d'architecture détaillée (enjeux, solutions, points clés d'implémentation, stack).
5. **Formulaire & Contact (Contact)** :
   - Cartes coordonnées directes avec bouton de copie d'email en 1 clic.
   - Formulaire réactif avec validation Angular `ReactiveFormsModule` (Nom, Email, Objet, Catégorie, Message).
   - État de chargement asynchrone et écran de confirmation de succès.
   - Accordéon FAQ interactif.

---

## 🚀 Démarrage Rapide

### 1. Prérequis
- **Node.js** (v20+ ou v22+)
- **npm** (v10+)

### 2. Lancement en Mode Développement
```bash
npm start
```
L'application est accessible sur `http://localhost:4200/`.

### 3. Compilation pour la Production
```bash
npm run build
```
Les fichiers statiques optimisés sont générés dans `dist/portfolio/browser/`.

### 4. Prévisualisation Locale de la Production
```bash
npm run preview
```

---

## 🐳 Docker & Conteneurisation

L'application est entièrement conteneurisée avec une image **multi-stage build** légère et sécurisée basée sur **Node 22-alpine** (compilation) et **Nginx 1.27-alpine** (serveur de production HTTP avec compression gzip, en-têtes de sécurité et gestion de santé `/healthz`).

### 1. Construction de l'image Docker
```bash
docker build -t bachir-portfolio:latest .
# Ou via npm
npm run docker:build
```

### 2. Exécution du conteneur
```bash
docker run -d -p 8080:80 --name bachir-portfolio bachir-portfolio:latest
# Ou via npm
npm run docker:run
```
L'application est accessible sur `http://localhost:8080/`.

### 3. Arrêt du conteneur
```bash
npm run docker:stop
```

### 4. Orchestration avec Docker Compose
```bash
docker compose up -d --build
# Ou via npm
npm run docker:compose
```
Pour arrêter l'environnement :
```bash
npm run docker:compose:down
```

---

## 🚀 Déploiement en Production sur Render (100% Gratuit)

L'application est configurée pour un déploiement continu et automatisé sur **Render** via son blueprint officiel [`render.yaml`](file:///c:/Users/bachi/Desktop/Project/render.yaml) et son image conteneurisée [`Dockerfile`](file:///c:/Users/bachi/Desktop/Project/Dockerfile).

### Comment Déployer sur Render en 2 Minutes :

1. **Poussez votre projet sur GitHub** :
   ```bash
   git add .
   git commit -m "feat: portfolio configuré pour Render avec Docker"
   git push origin master
   ```

2. **Connectez votre dépôt à Render** :
   - Rendez-vous sur **[dashboard.render.com](https://dashboard.render.com)** (connexion gratuite avec GitHub).
   - Cliquez sur le bouton bleu **"New +"** en haut à droite.
   - Sélectionnez **"Blueprint"** (ou **"Web Service"**).
   - Choisissez votre dépôt GitHub contenant le projet.
   - Render détecte automatiquement le fichier [`render.yaml`](file:///c:/Users/bachi/Desktop/Project/render.yaml) :
     - **Runtime** : `Docker`
     - **Dockerfile** : `./Dockerfile`
     - **Plan** : `Free` (0€ à vie)
     - **Région** : `Frankfurt` (latence minimale)
     - **Health Check** : `/healthz`
   - Cliquez sur **"Apply"**.

3. **Résultat** :
   Render compile l'image Docker multi-stage Nginx et déploie le portfolio en HTTPS sécurisé avec une URL publique du type :  
   `https://portfolio-n890.onrender.com/`

Chaque nouveau `git push` sur la branche `master` (ou `main`) déclenchera automatiquement la recompilation et la mise à jour sans coupure.

---

## ⚙️ CI/CD Automatique avec GitHub Actions

Le fichier [`.github/workflows/deploy-render.yml`](.github/workflows/deploy-render.yml) automatise le pipeline complet à chaque `git push` sur `main` :

```
push → main
   │
   ├─ 🔨 Build Angular (production)
   │         ↓
   └─ 🌐 Deploy to Render (via Deploy Hook)
```

### Configurer les Secrets GitHub

Ajoutez ce secret dans **Settings → Secrets and variables → Actions** de votre dépôt GitHub :

| Secret | Description | Obligatoire |
|--------|-------------|-------------|
| `RENDER_DEPLOY_HOOK_URL` | URL du Deploy Hook Render (Dashboard → Service → Settings → Deploy Hook) | ✅ Oui |

### Obtenir le Deploy Hook Render

1. Connectez-vous sur [dashboard.render.com](https://dashboard.render.com)
2. Ouvrez votre service → **Settings**
3. Faites défiler jusqu'à **"Deploy Hook"** → Copiez l'URL
4. Collez-la dans GitHub Secrets sous le nom `RENDER_DEPLOY_HOOK_URL`

### Déclenchement Manuel

Le workflow peut aussi être déclenché manuellement depuis :
**GitHub → Actions → 🚀 CI/CD → Render → Run workflow**




