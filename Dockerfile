# ===================================================================
# ÉTAPE 1 : Compilation de l'application Angular (Builder)
# ===================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Installation optimisée des dépendances avec mise en cache des layers Docker
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit

# Copie des fichiers sources du projet
COPY . .

# Compilation de production Angular
RUN npm run build -- --configuration production

# ===================================================================
# ÉTAPE 2 : Image d'Exécution Légère et Sécurisée (Nginx Alpine)
# ===================================================================
FROM nginx:1.27-alpine AS runner

# Métadonnées de l'image
LABEL maintainer="Bachir Karroudi <bachir422018@gmail.com>"
LABEL description="Portfolio Professionnel de Bachir Karroudi - Angular Production Build"

# Configuration Nginx optimisée pour SPA Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nettoyage du répertoire par défaut Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers compilés depuis l'étape de build
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

# Exposition du port HTTP
EXPOSE 80

# Contrôle d'état de santé du conteneur (Health Check)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/healthz || exit 1

# Démarrage de Nginx au premier plan
CMD ["nginx", "-g", "daemon off;"]
