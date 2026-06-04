# Journal de projet

## 2026-06-04

### Contexte

Ulrich veut creer un site interactif a partir de la strategie nationale canadienne en IA, `AI for All`.

### Actions

- Creation du depot Git local dans `C:\Users\ciram\Downloads\AI-CA`.
- Creation du depot GitHub public `ulrich-e-r-djidonou/AI-CA`.
- Scaffold d'une app statique sans dependances externes.
- Ajout d'un guide interactif : hero, six piliers, secteurs prioritaires, objectifs, simulateur d'adoption, suivi des engagements et sources.
- Verification locale avec `npm run check`, chargement HTTP 200, test des interactions principales et capture visuelle `docs/validation/homepage.png`.

### Sources consultees

- `https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all`
- `https://www.pm.gc.ca/en/news/news-releases/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial`

### Limites connues

- Les donnees sont codees dans `app.js` pour le prototype initial.
- Premier rendu inspecte : contraste de la roue strategique ajuste apres capture visuelle.

## 2026-06-04, standardisation Codex

### Contexte

Ulrich veut standardiser les instructions projet pour Codex avec `AGENTS.md`.

### Actions

- Ajout de `AGENTS.md` comme fichier d'instructions Codex du projet.
- Ajout d'un lien vers `AGENTS.md` dans `README.md`.

### Note

`CLAUDE.md` existe encore parce qu'il n'a pas ete supprime explicitement. Il pourra etre retire apres confirmation si le projet doit n'utiliser que `AGENTS.md`.

## 2026-06-04, recentrage editorial

### Contexte

Ulrich veut retirer le positionnement editorial secondaire. Le projet doit rester centre sur la strategie nationale.

### Actions

- Remplacement du positionnement par `Guide AI for All Canada`.
- Conservation d'une mention claire : le site n'est pas produit par le gouvernement du Canada.
- Limitation des sources a la strategie nationale complete et au communique du premier ministre du 4 juin 2026.
- Suppression de la reference a une page secondaire ISDE.

### Commandes utiles

```powershell
npm run dev
npm run check
```
