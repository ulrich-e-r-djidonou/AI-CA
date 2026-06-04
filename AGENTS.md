# AGENTS.md

Instructions specifiques au projet AI-CA pour Codex.

## Positionnement

Ce projet est un site d'analyse independant sur la strategie canadienne `AI for All`. Il ne doit jamais etre presente comme un site officiel du gouvernement.

## Sources

Toute information factuelle doit rester reliee a une source publique verifiable, de preference une page officielle du gouvernement du Canada ou d'ISDE.

Sources principales :

- `https://ised-isde.canada.ca/site/ised/en/artificial-intelligence-ecosystem/overview-canadas-national-artificial-intelligence-strategy`
- `https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all`
- `https://www.pm.gc.ca/en/news/news-releases/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial`

## Style

- Reponses et contenu utilisateur en francais.
- Ton direct, analytique et sobre.
- Pas de tiret em dans le code, la documentation ou le chat.
- Pas d'emoji.

## Developpement

Le site est volontairement statique et sans dependance externe pour rester facile a deployer sur GitHub Pages, Netlify ou Vercel.

Commandes de base :

```powershell
npm run dev
npm run check
```

## Documentation continue

Maintenir ces fichiers a jour apres chaque jalon significatif :

- `README.md`
- `docs/project-log.md`
- `docs/decisions.md`
- `docs/validation/sources.md`
- `docs/next-steps.md`
