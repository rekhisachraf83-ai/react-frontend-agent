# 📚 Guide d'Utilisation - Agent Frontend React

## Vue d'ensemble

Bienvenue! Ce guide vous explique comment utiliser l'**Agent Frontend React Spécialisé** pour automatiser vos tâches de développement React.

---

## 🚀 Démarrage Rapide

### 1. Créer une Issue ou Tâche

Créez une issue GitHub avec une description claire:

```markdown
**Titre**: Créer un composant Button réutilisable

**Description**:
- Supporter plusieurs variantes (primary, secondary)
- TypeScript strict avec props interface
- Accessibilité (ARIA labels)
- Tests avec React Testing Library
- Compatibilité Tailwind CSS
```

### 2. Assigner à Copilot

- Cliquez sur "Assignees"
- Sélectionnez **@copilot**

### 3. Créer une Session Copilot

Deux méthodes:

#### Méthode A: Via le Panneau Agents
1. Accédez à votre repository
2. Ouvrez l'onglet "Agents"
3. Cliquez "New Agent Session"
4. Décrivez votre tâche

#### Méthode B: Mention @copilot
Commentez sur une issue:
```
@copilot Crée un composant Button réutilisable avec les spécifications ci-dessus
```

---

## 💼 Cas d'Usage Courants

### Cas 1: Créer un Nouveau Composant

**Commande**:
```
@copilot Crée un composant Card réutilisable pour afficher les informations produit.
Inclus:
- Props TypeScript avec documentation JSDoc
- Styling avec Tailwind CSS
- Tests avec React Testing Library (80%+ couverture)
- Accessibilité WCAG 2.1
```

**L'agent va**:
✓ Analyser le style existant  
✓ Créer le composant Card  
✓ Écrire les tests  
✓ Créer une PR pour review  

---

### Cas 2: Écrire des Tests

**Commande**:
```
@copilot Ajoute des tests complets pour le composant UserProfile.
- Tests unitaires avec Jest
- Tests d'interaction avec React Testing Library
- Atteindre 85%+ de couverture
- Tester les cas limites
```

**L'agent va**:
✓ Analyser le composant  
✓ Identifier les cas de test  
✓ Écrire les tests  
✓ Générer un rapport de couverture  

---

### Cas 3: Refactoriser du Code

**Commande**:
```
@copilot Refactorise le composant Dashboard:
- Divise en sous-composants plus petits
- Ajoute TypeScript strict typing
- Optimise les performances (React.memo, useMemo)
- Améliore la lisibilité et la maintenabilité
```

**L'agent va**:
✓ Analyser le code existant  
✓ Proposer une nouvelle structure  
✓ Créer les sous-composants  
✓ Préserver les tests existants  

---

### Cas 4: Corriger des Bugs

**Commande**:
```
@copilot Fixe le bug d'accessibilité dans le modal:
- Le focus ne se déplace pas correctement au modal
- Les touches clavier ne fonctionnent pas
- Ajoute les attributs ARIA manquants
- Écris un test pour éviter la régression
```

**L'agent va**:
✓ Reproduire le bug  
✓ Identifier la cause  
✓ Implémenter la correction  
✓ Ajouter des tests  

---

### Cas 5: Améliorer les Tests

**Commande**:
```
@copilot Améliore la couverture de tests du composant Form:
- Couverture actuelle: 65%
- Cible: 85%+
- Ajoute des tests pour les cas d'erreur
- Test d'accessibilité avec axe-core
```

**L'agent va**:
✓ Analyser la couverture existante  
✓ Identifier les lacunes  
✓ Écrire les tests manquants  
✓ Valider la nouvelle couverture  

---

## 🎨 Formats de Prompts Recommandés

### Format Structuré (Recommandé)

```markdown
@copilot [ACTION]

## Contexte
[Contexte de la tâche]

## Spécifications
- Point 1
- Point 2
- Point 3

## Critères d'Acceptation
- [ ] Critère 1
- [ ] Critère 2
- [ ] Critère 3

## Notes Importantes
[Informations supplémentaires]
```

### Exemple Complet

```markdown
@copilot Crée un composant Form réutilisable

## Contexte
Nous avons besoin d'un composant form générique pour les formulaires de contact et d'inscription.

## Spécifications
- Support de multiples champs (text, email, password, textarea, select)
- Validation TypeScript stricte
- Gestion des erreurs avec messages
- Support de loading state
- Styling responsive avec Tailwind CSS

## Critères d'Acceptation
- [ ] Composant TypeScript avec props interface complète
- [ ] Documentation JSDoc pour chaque prop
- [ ] Tests: 80%+ couverture
- [ ] Accessibilité: WCAG 2.1 AA
- [ ] PR créée et prête pour review

## Notes Importantes
- Suivre la structure existante dans src/components/features
- Utiliser les hooks personnalisés de src/hooks
- Réutiliser les composants common existants
```

---

## 📊 Monitoring et Itération

### Pendant l'Exécution

1. **Suivi en Direct**
   - Consultez le panel "Agent Sessions"
   - Voyez les logs en temps réel
   - Chat avec l'agent pendant qu'il travaille

2. **Suivre la Progression**
   - Commits créés
   - Branches ouvertes
   - Fichiers modifiés

### Après Exécution

1. **Revoir le Résultat**
   - Examinez la PR créée
   - Vérifiez les changements
   - Testez localement si nécessaire

2. **Itérer si Nécessaire**
   ```
   @copilot Les tests doivent aussi couvrir les cas d'erreur.
   Ajoute des tests pour:
   - Validation échouée
   - Erreur API
   - Timeout de la requête
   ```

3. **Approuver et Merger**
   - Approuvez la PR si satisfait
   - Mergez quand prêt
   - L'agent ferme la session

---

## ⚙️ Configuration Avancée

### Modifier les Instructions de l'Agent

Éditez le fichier `.copilot/frontend-agent-instructions.md` pour:
- Ajouter des standards spécifiques
- Modifier les patterns acceptés
- Ajouter de nouvelles best practices

### Personnaliser les Hooks

Les hooks dans `.github/hooks/` contrôlent la validation:
- `pre-commit.sh` - Validation avant commit
- `post-test.sh` - Vérification de couverture

---

## 🔧 Commandes Utiles

### Commandes npm du Projet

```bash
# Développement
npm run dev              # Démarrer le serveur local
npm run build            # Construire pour la production

# Qualité du Code
npm run lint             # Vérifier les erreurs ESLint
npm run lint:fix         # Corriger automatiquement
npm run format           # Formater avec Prettier
npm run format:check     # Vérifier le formatage
npm run type-check       # Vérifier les types TypeScript

# Tests
npm run test             # Lancer les tests
npm run test:watch       # Mode watch
npm run test:ci          # Mode CI
npm run test:coverage    # Rapport de couverture
```

---

## 📋 Checklist - Avant d'Assigner à Copilot

Avant de créer une tâche, assurez-vous que:

- [ ] La description est claire et détaillée
- [ ] Les critères d'acceptation sont spécifiés
- [ ] La complexité est réaliste (< 59 min)
- [ ] Vous avez fourni le contexte nécessaire
- [ ] L'issue concerne un seul repository
- [ ] Les dépendances externes sont documentées

---

## ⏱️ Temps d'Exécution

Temps estimés par type de tâche:

| Tâche | Temps Estimé | Complexité |
|-------|--------------|-----------|
| Créer un composant simple | 10-15 min | ⭐ |
| Créer un composant complexe | 20-30 min | ⭐⭐⭐ |
| Écrire des tests complets | 15-25 min | ⭐⭐ |
| Refactoriser une section | 15-20 min | ⭐⭐ |
| Corriger un bug simple | 10-15 min | ⭐ |
| Améliorer les tests | 10-20 min | ⭐⭐ |

**Note**: Limite maximale = 59 minutes par session

---

## 🚨 Dépannage

### Problème: L'agent timeout après 59 minutes

**Solution**: Divisez la tâche en sous-tâches plus petites

### Problème: L'agent n'a pas suivi mes instructions

**Solution**: 
1. Soyez plus spécifique dans votre prompt
2. Fournissez des exemples
3. Vérifiez que les instructions personnalisées sont à jour

### Problème: Les tests créés sont incomplets

**Solution**:
```
@copilot Améliore les tests:
- Ajoute les tests pour les cas d'erreur
- Utilise les meilleures pratiques de React Testing Library
- Atteins 85%+ de couverture
```

### Problème: La PR contient des erreurs ESLint

**Solution**: L'agent devrait avoir exécuté les hooks. Si non, exécutez:
```bash
npm run lint:fix
npm run format
```

---

## 📚 Ressources Supplémentaires

- **Instructions de l'agent**: `.copilot/frontend-agent-instructions.md`
- **Configuration MCP**: `.copilot/mcp-config.yml`
- **Workflow GitHub**: `.github/workflows/frontend-agent.yml`
- **Hooks**: `.github/hooks/`

---

## ✨ Exemples Réussis

### Exemple 1: Composant Réussi
```
@copilot Crée un composant Accordion
- Support de multiples sections
- Une seule section ouverte à la fois
- Animations fluides
- Accessibilité complète
- Tests: 85%+ couverture
```
**Résultat**: ✅ PR fusionnée avec succès

### Exemple 2: Amélioration de Tests
```
@copilot Améliore les tests du panier:
- Couverture actuelle: 60%
- Cible: 85%
- Focus: cas d'erreur et interactions
```
**Résultat**: ✅ Couverture atteinte à 87%

---

## 🎯 Bonnes Pratiques

### ✅ À Faire

1. **Soyez précis** - Plus de détails = meilleur résultat
2. **Testez les sorties** - Vérifiez les PR avant de merger
3. **Itérez** - Affinez avec des prompts de suivi si besoin
4. **Documentez** - Gardez vos instructions à jour
5. **Monitored** - Regardez les logs en temps réel

### ❌ À Éviter

1. **Tâches trop vagues** - "Améliore le code" ❌
2. **Tâches trop complexes** - > 59 minutes ❌
3. **Multi-repositories** - Une issue = un repo ❌
4. **Pas de critères d'acceptation** - Soyez explicite ❌
5. **Ignorer les erreurs** - Vérifiez toujours ❌

---

**Besoin d'aide? Consultez les fichiers de configuration ou contactez l'équipe!** 🚀
