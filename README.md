# Observatoire IA Canada

Site interactif independant pour analyser la strategie nationale canadienne en intelligence artificielle, `AI for All`, publiee le 4 juin 2026.

Le projet transforme les sources officielles d'ISDE et du gouvernement du Canada en tableau de bord : piliers, secteurs prioritaires, objectifs chiffrés, suivi des engagements et points de vigilance.

## Stack

- HTML, CSS et JavaScript natifs
- Serveur local Node.js sans dependance externe
- Sources publiques du gouvernement du Canada

## Commandes

```powershell
npm run dev
```

Puis ouvrir `http://localhost:4173`.

Verification syntaxique du serveur :

```powershell
npm run check
```

## Sources principales

- [Aperçu officiel AI for All, ISDE](https://ised-isde.canada.ca/site/ised/en/artificial-intelligence-ecosystem/overview-canadas-national-artificial-intelligence-strategy)
- [Strategie nationale complete, AI for All](https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all)
- [Communique du premier ministre, 4 juin 2026](https://www.pm.gc.ca/en/news/news-releases/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial)

## Statut

Version initiale : prototype fonctionnel d'observatoire interactif, avec une mention explicite que le site n'est pas un service officiel du gouvernement.

## Documentation

- [Instructions Codex](AGENTS.md)
- [Journal de projet](docs/project-log.md)
- [Decisions](docs/decisions.md)
- [Validation et limites](docs/validation/sources.md)
- [Prochaines etapes](docs/next-steps.md)
