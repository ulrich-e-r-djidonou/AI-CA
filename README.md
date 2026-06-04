# Guide L'IA pour tous Canada

Site bilingue interactif pour parcourir la stratégie nationale canadienne en matière d'intelligence artificielle, `L'IA pour tous` / `AI for All`, publiée le 4 juin 2026.

Le projet transforme la stratégie nationale en guide interactif français et anglais : piliers, secteurs prioritaires, objectifs chiffrés, comparaisons présentes dans la stratégie, suivi des engagements et sources. Ce site n'est pas produit par le gouvernement du Canada.

## Règle d'or

Rien ne doit apparaître dans le tableau de bord si l'information ne vient pas explicitement de la stratégie nationale `L'IA pour tous`.

## Stack

- HTML, CSS et JavaScript natifs
- Serveur local Node.js sans dépendance externe
- Source principale : stratégie nationale publiée par ISDE, versions française et anglaise

## Commandes

```powershell
npm run dev
```

Puis ouvrir `http://localhost:4173`.

Vérification syntaxique du serveur :

```powershell
npm run check
```

## Sources principales

- [Stratégie nationale en matière d'intelligence artificielle du Canada : L'IA pour tous](https://ised-isde.canada.ca/site/isde/fr/strategie-nationale-matiere-dintelligence-artificielle-canada-lia-pour-tous)
- [Canada's National Artificial Intelligence Strategy: AI for All](https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all)
- [Communiqué du premier ministre, 4 juin 2026](https://www.pm.gc.ca/fr/nouvelles/communiques/2026/06/04/premier-ministre-carney-lance-lia-tous-la-nouvelle-strategie)

## Note de vérification

`strategie-ia.md` est un fichier local de vérification utilisé pendant l'audit. Il est ignoré par Git et ne doit pas être committé.

## Statut

Prototype fonctionnel de guide interactif, avec une mention explicite que le site n'est pas produit par le gouvernement du Canada.

## Documentation

- [Instructions Codex](AGENTS.md)
- [Journal de projet](docs/project-log.md)
- [Décisions](docs/decisions.md)
- [Validation et limites](docs/validation/sources.md)
- [Prochaines étapes](docs/next-steps.md)
