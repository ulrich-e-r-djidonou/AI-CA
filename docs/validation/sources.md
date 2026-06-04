# Validation et limites

## Sources vérifiées le 2026-06-04

1. ISDE, stratégie nationale en matière d'intelligence artificielle du Canada : `L'IA pour tous`.
   URL : `https://ised-isde.canada.ca/site/isde/fr/strategie-nationale-matiere-dintelligence-artificielle-canada-lia-pour-tous`

2. Cabinet du premier ministre, communiqué du 4 juin 2026.
   URL : `https://www.pm.gc.ca/fr/nouvelles/communiques/2026/06/04/premier-ministre-carney-lance-lia-tous-la-nouvelle-strategie`

## Règle d'or

Les chiffres, comparaisons, secteurs, piliers et engagements visibles dans le tableau de bord doivent provenir explicitement de la stratégie nationale. La version actuelle a été recentrée sur la version française officielle d'ISDE.

## Comparaisons autorisées dans la version actuelle

Comparaisons présentes dans la stratégie nationale :

- Entreprises canadiennes : 12 % d'adoption entre le milieu de 2024 et le milieu de 2025, projection de 14,5 % d'ici le milieu de 2026.
- PME canadiennes : environ 8 %, comparées aux pays nordiques, à l'Allemagne et à la France.
- Adoption individuelle : 37 %, 15e rang mondial.
- Formation et littératie en IA : 44e rang sur 47, moins de 24 % des Canadiens formés en IA.
- Confiance envers les systèmes d'IA : 42e rang sur 47.
- Électricité propre : plus de 83 % de l'électricité canadienne provient de sources renouvelables et à faibles émissions.

## Vérification au mot près, 2026-06-04

Le texte intégral de la stratégie est désormais archivé localement dans `strategie.md` (capture de la page ISDE, date de modification 2026-06-04). La vérification ne dépend donc plus d'un résumé d'outil : chaque carte du tableau de bord est comparée au texte brut.

Contrôle de fidélité, pas seulement d'existence des chiffres. Citations verbatim confirmées dans `strategie.md` pour les éléments ajoutés ou rechallengés :

- Superordinateur : "Construire un superordinateur de calibre mondial dans le cadre d'une infrastructure souveraine renforcée, d'ici 2031."
- Agents d'IA : "Veiller à ce que tous les étudiants du postsecondaire aient accès à des agents d'IA fiables." Le mot agents est explicite. Aucune autre cible chiffrée sur les agents au-delà de l'accès universel des étudiants.
- 90 000 : "Créer jusqu'à 90 000 emplois, stages et placements liés à l'IA pour les jeunes Canadiens [...] d'ici 2031." Le segment jeunes Canadiens est bien dans la source.
- 250 000 : "Contribuer à la création de jusqu'à 250 000 nouveaux emplois grâce à l'adoption de l'IA, d'ici 2031."
- Écosystème actuel : "Le solide secteur numérique canadien emploie environ 800 000 personnes et contribue à plus de 140 milliards de dollars au PIB, dont 150 000 emplois directement liés à l'IA." Plus de 3 500 entreprises actives en IA ayant levé plus de 37 milliards de dollars en capital de risque.
- 187 G$ : "Certaines estimations attribuent à l'IA générative à elle seule une contribution annuelle de 187 milliards de dollars à l'économie canadienne d'ici 2030." Présenté comme estimation citée, pas comme cible gouvernementale.
- Calcul : "le Canada nécessitera d'ici 2030 jusqu'à 5,5 GW de capacité de calcul pour l'IA" et "850 MW de capacité de calcul d'ici 2030, avec une capacité d'expansion pouvant atteindre jusqu'à 2,3 GW". Investissement gouvernemental de plus de 2 milliards de dollars dans la capacité de calcul.
- Investissements ajoutés au suivi, tous verbatim : LIFT 500 M$ (BDC), Initiative régionale en IA 500 M$, Fonds canadien de croissance technologique 500 M$, Institut canadien de la sécurité de l'IA 50 M$, Espace de données du secteur de la santé 100 M$.
- Données économiques ajoutées à la section Économie, verbatim : PME 99 % des entreprises et 14,3 millions de travailleurs ; une entreprise sur huit a intégré l'IA ; 5e rang mondial pour le capital de risque en IA avec 3,1 milliards investis en 2025 ; hausse annuelle prévue de la productivité du travail de 0,3 % à 1,1 % (badge Prévision pour ne pas la confondre avec un état actuel).
- Mentions des agents ajoutées au pilier 1, reprises mot pour mot : "garantir la sécurité des interactions avec les agents conversationnels" et la clause sur l'adoption croissante de l'IA agentique (savoir quels systèmes sont sûrs, comment les risques sont recensés et quelles normes s'appliquent).

## Distinction état actuel et cibles

Les chiffres de l'écosystème actuel (800 000, 140 G$, 150 000, 3 500+, 37 G$) sont affichés dans une section dédiée `Économie` étiquetée comme état actuel, et non dans la section Objectifs, pour ne pas présenter des faits présents comme des cibles. Le 187 G$ est marqué comme estimation citée.

## Points à vérifier dans une version suivante

- Détails opérationnels du Fonds d'accès à une capacité de calcul.
- Calendrier législatif pour la vie privée, la sécurité en ligne et la transparence IA.
- Modalités de la mission IA en santé financée à 200 M$.

## Validation technique

La version initiale doit être vérifiée avec :

```powershell
npm run check
npm run dev
```

Puis inspection visuelle dans un navigateur.

## Captures de validation

- Desktop : `docs/validation/homepage.png`
- Mobile : `docs/validation/homepage-mobile.png`
