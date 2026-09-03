# Frontend React Application with Copilot Agent

Ce repository contient une application React configurée avec un **Agent Frontend React Spécialisé** pour automatiser les tâches de développement.

## 🎯 À Propos de l'Agent

L'Agent Frontend React est un assistant IA spécialisé capable de:

- ✅ Créer des composants React optimisés et accessibles
- ✅ Écrire des tests complets avec React Testing Library
- ✅ Refactoriser le code pour améliorer la maintenabilité
- ✅ Corriger des bugs et améliorer les performances
- ✅ Générer de la documentation
- ✅ Valider la qualité du code (ESLint, TypeScript, Prettier)

## 🚀 Démarrage Rapide

### 1. Installation

```bash
# Cloner le repository
git clone https://github.com/rekhisachraf83-ai/react-frontend-agent.git
cd react-frontend-agent

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### 2. Utiliser l'Agent

#### Option A: Via Issue
```bash
# 1. Créer une issue GitHub
# 2. Décrire la tâche
# 3. Assigner @copilot
```

#### Option B: Via Copilot Chat
```bash
# Dans le repository, ouvrir Copilot Chat et écrire:
@copilot Crée un composant Button réutilisable avec TypeScript et tests
```

## 📁 Structure du Projet

```
.
├── .copilot/
│   ├── frontend-agent-instructions.md  # Instructions de l'agent
│   └── mcp-config.yml                  # Configuration MCP servers
├── .github/
│   ├── workflows/
│   │   └── frontend-agent.yml          # Workflow GitHub Actions
│   ├── copilot-setup-steps.yml         # Configuration d'exécution
│   └── hooks/
│       ├── pre-commit.sh               # Validation avant commit
│       └── post-test.sh                # Vérification de couverture
├── src/
│   ├── components/
│   │   ├── common/                     # Composants réutilisables
│   │   ├── features/                   # Composants métier
│   │   └── layouts/                    # Layouts
│   ├── hooks/                          # Custom Hooks
│   ├── services/                       # API services
│   ├── utils/                          # Utilitaires
│   ├── types/                          # Types TypeScript
│   └── App.tsx
├── AGENT_GUIDE.md                      # Guide complet d'utilisation
└── package.json
```

## 🛠️ Commandes Disponibles

```bash
# Développement
npm run dev              # Démarrer le serveur local
npm run build            # Build production

# Qualité du Code
npm run lint             # Vérifier ESLint
npm run lint:fix         # Fixer les erreurs
npm run format           # Formater avec Prettier
npm run type-check       # Vérifier TypeScript

# Tests
npm run test             # Lancer les tests
npm run test:watch       # Mode watch
npm run test:coverage    # Rapport de couverture
```

## 📚 Fichiers de Configuration

### `.copilot/frontend-agent-instructions.md`
Instructions détaillées pour l'agent sur:
- Architecture React
- Standards de code
- Meilleures pratiques
- Checklist de code review

### `.copilot/mcp-config.yml`
Configuration des Model Context Protocol Servers:
- GitHub MCP (accès repository)
- Playwright MCP (tests browser)
- Sources de connaissance
- Profils de tâches

### `.github/copilot-setup-steps.yml`
Configuration d'exécution:

- Timeout (30 minutes)
- Steps de setup
- Hooks de validation
- Variables d'environnement

### `.github/workflows/frontend-agent.yml`
Workflow GitHub Actions:
- Installation des dépendances
- Linting et type checking
- Exécution des tests
- Build du projet

## 📖 Guide d'Utilisation Complet

Consultez **[AGENT_GUIDE.md](./AGENT_GUIDE.md)** pour:
- Exemples d'utilisation détaillés
- Cas d'usage courants
- Format de prompts recommandés
- Dépannage
- Bonnes pratiques

## 💡 Exemples de Tâches

### Créer un Composant
```markdown
@copilot Crée un composant Button réutilisable

- Support de variantes (primary, secondary)
- Props TypeScript complètes
- Accessibilité (ARIA labels)
- Tests React Testing Library (80%+ couverture)
- Styling Tailwind CSS
```

### Écrire des Tests
```markdown
@copilot Ajoute des tests pour le composant UserCard

- Tests unitaires Jest
- Tests d'interaction React Testing Library
- Couverture 85%+
- Tests des cas limites
```

### Refactoriser
```markdown
@copilot Refactorise le composant Dashboard

- Divise en sous-composants
- TypeScript strict typing
- Optimise les performances
- Préserve les tests existants
```

## 🔒 Standards de Code

L'agent suit strictement:

- **TypeScript**: Types stricts, pas de `any`
- **React**: Functional components avec Hooks
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library (80%+ couverture)
- **Linting**: ESLint + Prettier
- **Accessibilité**: WCAG 2.1

## ⏱️ Limites

- **Timeout maximum**: 59 minutes par session
- **Un repository** par session
- **Une branche** par session
- **Une PR** par session

Pour les tâches plus complexes, divisez-les en sous-tâches.

## 🐛 Dépannage

### L'agent timeout après 59 minutes
Divisez la tâche en plusieurs sessions plus petites.

### L'agent ne suit pas mes instructions
- Soyez plus spécifique
- Fournissez des exemples
- Vérifiez les instructions (.copilot/)

### Les tests sont incomplets
Utilisez un prompt de suivi:
```
@copilot Améliore les tests en ajoutant les cas d'erreur
```

## 📊 Monitoring

Suivez vos sessions Copilot:
1. Allez dans l'onglet "Agents" du repository
2. Consultez l'historique des sessions
3. Vérifiez les logs en temps réel
4. Examinez les PRs créées

## 🔗 Liens Utiles

- [Guide Complet](./AGENT_GUIDE.md)
- [Instructions de l'Agent](./.copilot/frontend-agent-instructions.md)
- [Configuration MCP](./.copilot/mcp-config.yml)
- [Workflow GitHub](./.github/workflows/frontend-agent.yml)

## 📝 Stack Technique

- **React**: 18+
- **TypeScript**: 5+
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Build**: Vite ou Create React App
- **Linting**: ESLint + Prettier

## 🤝 Contribution

L'Agent React Frontend gère automatiquement:
- Création de branches
- Commits formatés
- PRs avec descriptions
- Validation du code
- Tests et coverage

## 📄 Licence

MIT

## 👤 Auteur

**rekhisachraf83-ai**

---

## ✨ Prêt à Commencer?

1. Lisez [AGENT_GUIDE.md](./AGENT_GUIDE.md) pour les détails complets
2. Créez une issue ou ouvrez Copilot Chat
3. Décrivez votre tâche à `@copilot`
4. L'agent fera le reste!

**Questions?** Consultez les fichiers de configuration ou les exemples dans AGENT_GUIDE.md

---

**Créé avec ❤️ par Copilot**
