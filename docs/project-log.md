# Journal de projet

## 2026-06-04

### Contexte

Ulrich veut creer un site interactif a partir de la page officielle d'ISDE sur la strategie nationale canadienne en IA, `AI for All`.

### Actions

- Creation du depot Git local dans `C:\Users\ciram\Downloads\AI-CA`.
- Creation du depot GitHub public `ulrich-e-r-djidonou/AI-CA`.
- Scaffold d'une app statique sans dependances externes.
- Ajout d'un tableau de bord interactif : hero, six piliers, secteurs prioritaires, objectifs, simulateur d'adoption, suivi des engagements et sources.
- Verification locale avec `npm run check`, chargement HTTP 200, test des interactions principales et capture visuelle `docs/validation/homepage.png`.

### Sources consultees

- `https://ised-isde.canada.ca/site/ised/en/artificial-intelligence-ecosystem/overview-canadas-national-artificial-intelligence-strategy`
- `https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all`
- `https://www.pm.gc.ca/en/news/news-releases/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial`

### Limites connues

- Les donnees sont codees dans `app.js` pour le prototype initial.
- La page d'aperçu ISDE mentionne une cible de 75% d'adoption d'ici 2031, tandis que la strategie complete mentionne 60% d'ici 2034. Le site signale cette divergence comme point a verifier.
- Premier rendu inspecte : contraste de la roue strategique ajuste apres capture visuelle.

### Commandes utiles

```powershell
npm run dev
npm run check
```
