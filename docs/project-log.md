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

## 2026-06-04, règle d'or et comparaisons

### Contexte

Ulrich fixe une règle éditoriale stricte : ne rien mettre dans le tableau de bord si cela ne vient pas de la stratégie nationale.

### Actions

- Ajout de la règle d'or dans `AGENTS.md`, `README.md` et `docs/validation/sources.md`.
- Passage du contenu visible vers la version française officielle de la stratégie.
- Remplacement des titres anglais et des libellés non accentués.
- Remplacement des points `À surveiller` non sourcés par des points de suivi tirés de la stratégie.
- Ajout d'une section de comparaisons uniquement avec les données présentes dans la stratégie nationale : adoption des entreprises, PME, pays nordiques, Allemagne, France, adoption individuelle, littératie, confiance et électricité propre.

### Source principale

`https://ised-isde.canada.ca/site/isde/fr/strategie-nationale-matiere-dintelligence-artificielle-canada-lia-pour-tous`

## 2026-06-04, bilinguisme et fichier de vérification

### Contexte

Ulrich veut un site français et anglais. Le fichier `strategie-ia.md` a servi à la vérification par Claude Code et ne doit pas être committé.

### Actions

- Ajout d'un sélecteur de langue `FR` / `EN`.
- Centralisation du contenu de l'interface dans `app.js` pour afficher les mêmes données sourcées en français et en anglais.
- Ajout de la version anglaise officielle de la stratégie comme lien de source en mode anglais.
- Ajout de `strategie-ia.md` à `.gitignore`.

## 2026-06-04, vérification de fidélité et ajout de chiffres

### Contexte

Contrôle au mot près des affirmations du site, et non seulement de l'existence des chiffres. Objectif : éviter qu'un chiffre juste soit raccroché à une affirmation qui n'est pas celle de la stratégie.

### Actions

- Vérification verbatim des éléments sensibles : superordinateur d'ici 2031, agents d'IA pour les étudiants, 90 000 jeunes Canadiens, 250 000 emplois, chiffres de l'écosystème, 187 G$. Tous confirmés dans la stratégie. Détails dans `docs/validation/sources.md`.
- Ajout d'une section `Économie` (état actuel de l'écosystème) distincte de la section Objectifs, pour ne pas présenter des faits actuels comme des cibles : 800 000 emplois numériques, 140 G$ PIB, 150 000 emplois IA, 3 500+ entreprises, 37 G$ capital de risque, 187 G$ apport estimé de l'IA générative d'ici 2030.
- Ajout dans les Objectifs d'une cible de calcul (850 MW d'ici 2030) et d'une carte sur l'accès des étudiants aux agents d'IA.
- Ajout d'un lien de navigation `Économie`.
- Restriction du clic actif des cartes Objectif à leur propre grille pour éviter toute interférence avec la nouvelle grille.
- Vérification syntaxique `node --check` sur `app.js` et `server.mjs`, et confirmation que le serveur local sert bien les fichiers mis à jour.

## 2026-06-04, archivage du texte brut et investissements

### Contexte

Ulrich a archivé le texte intégral de la stratégie dans `strategie.md`. La vérification passe d'un résumé d'outil au texte brut officiel.

### Actions

- Comparaison de chaque carte au texte brut `strategie.md`. Tous les chiffres, ceux de Codex comme ceux ajoutés, sont confirmés au mot près.
- Ajout au suivi des engagements financiers chiffrés, tous verbatim : LIFT 500 M$, Initiative régionale en IA 500 M$, Fonds canadien de croissance technologique 500 M$, Institut canadien de la sécurité de l'IA 50 M$, Espace de données du secteur de la santé 100 M$.
- Vérification `node --check` sur `app.js`, fichiers servis confirmés sur le serveur local.

## 2026-06-04, finalisation SEO/GEO et image Open Graph

### Contexte

Finalisation du projet sur la branche `claude/google-io-2026-search-AFAHJ` après la traduction bilingue faite avec Codex. Application du standard SEO/GEO post Google I/O 2026 documenté dans `geoecon-pulse/CLAUDE.md`.

### Actions

- Données structurées JSON-LD `@graph` dans `index.html` : `WebSite`, `Person`, `Dataset`, `WebPage` (avec `breadcrumb`), `FAQPage` (6 questions, 3 FR et 3 EN), ancrées sur les chiffres verbatim de la stratégie.
- Open Graph complet : `og:url`, `og:image` 1200x630, `og:locale` fr_CA et en_CA. Twitter Card `summary_large_image`. `canonical`, `hreflang` fr/en/x-default, `keywords`, `author`, `robots`.
- Génération de l'image d'aperçu `preview.png` (carte éditoriale aux couleurs du site, titre et trois chiffres verbatim, mention non gouvernementale). Source HTML dans `assets/og-card.html`, rendue via Chrome headless.
- Retrait de `preview.png` et `assets/og-card.html` du `.gitignore` pour publication sur GitHub Pages.
- URL canonique posée à `https://ulrich-e-r-djidonou.github.io/AI-CA/`, à ajuster si le déploiement vise un autre domaine.
- Vérifications : JSON-LD parse sans erreur, `node --check` sur `app.js` et `server.mjs`, site servi en 200, rendu bilingue capturé dans `docs/validation/finalize-fr.png`.
