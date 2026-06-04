# Decisions

## 2026-06-04, application statique sans dependance

Decision : creer le prototype en HTML, CSS et JavaScript natifs, avec un serveur Node local minimal.

Raison : le projet doit etre rapide a comprendre, facile a deployer et peu fragile. L'interactivite necessaire ne justifie pas encore React, Vite ou une bibliotheque de graphiques.

Alternatives considerees :

- React/Vite : utile pour une application plus large, mais ajoute des dependances.
- Tableau de bord Python : pertinent pour des donnees vivantes, moins adapte a une premiere experience web publique.

Statut : adoptee pour la version initiale.

## 2026-06-04, positionnement non gouvernemental

Decision : afficher une mention claire indiquant que le site n'est pas produit par le gouvernement du Canada.

Raison : eviter toute confusion avec un service officiel du gouvernement du Canada, sans ajouter un positionnement editorial secondaire.

Statut : adoptee.

## 2026-06-04, sources limitees

Decision : limiter le contenu a la strategie nationale complete `AI for All` et au communique du premier ministre du 4 juin 2026.

Raison : le projet doit porter sur la strategie nationale elle-meme, sans melanger d'autres pages de synthese ou d'autres cadres politiques.

Statut : adoptee.

## 2026-06-04, règle d'or du tableau de bord

Décision : ne rien afficher dans le tableau de bord si l'information ne vient pas explicitement de la stratégie nationale `L'IA pour tous`.

Raison : éviter les interprétations non sourcées, les recommandations inventées et les comparaisons externes non présentes dans la source officielle.

Conséquence : les sections de comparaison ne peuvent utiliser que les chiffres déjà présents dans la stratégie nationale, par exemple les comparaisons d'adoption avec les pays nordiques, l'Allemagne et la France.

Statut : adoptée.
