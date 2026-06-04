# AGENTS.md

Instructions spécifiques au projet AI-CA pour Codex.

## Positionnement

Ce projet est un guide interactif bilingue de la stratégie nationale canadienne `L'IA pour tous` / `AI for All`. Il ne doit jamais être présenté comme un site officiel du gouvernement du Canada.

## Règle d'or éditoriale

Ne rien afficher dans le tableau de bord si l'information ne vient pas explicitement de la stratégie nationale `L'IA pour tous`.

Le communiqué du premier ministre du 4 juin 2026 peut rester comme source de contexte et lien secondaire, mais les chiffres, comparaisons, secteurs, piliers et engagements affichés dans l'interface doivent être traçables à la stratégie nationale.

## Sources

Toute information factuelle affichée dans le tableau de bord doit rester reliée à la stratégie nationale `L'IA pour tous`.

Sources principales :

- `https://ised-isde.canada.ca/site/isde/fr/strategie-nationale-matiere-dintelligence-artificielle-canada-lia-pour-tous`
- `https://www.pm.gc.ca/fr/nouvelles/communiques/2026/06/04/premier-ministre-carney-lance-lia-tous-la-nouvelle-strategie`

## Style

- Interface en français et en anglais.
- Accents français obligatoires dans la version française de l'interface, la documentation et les libellés.
- Ton direct, analytique et sobre.
- Pas de tiret em dans le code, la documentation ou le chat.
- Pas d'emoji.

## Développement

Le site est volontairement statique et sans dépendance externe pour rester facile à déployer sur GitHub Pages, Netlify ou Vercel.

Commandes de base :

```powershell
npm run dev
npm run check
```

## Documentation continue

Maintenir ces fichiers à jour après chaque jalon significatif :

- `README.md`
- `docs/project-log.md`
- `docs/decisions.md`
- `docs/validation/sources.md`
- `docs/next-steps.md`

## Fichiers à ne pas committer

- `strategie-ia.md` : fichier local de vérification utilisé pendant l'audit Claude Code.
