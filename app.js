const strategyLinks = {
  fr: "https://ised-isde.canada.ca/site/isde/fr/strategie-nationale-matiere-dintelligence-artificielle-canada-lia-pour-tous",
  en: "https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all"
};

const pmLinks = {
  fr: "https://www.pm.gc.ca/fr/nouvelles/communiques/2026/06/04/premier-ministre-carney-lance-lia-tous-la-nouvelle-strategie",
  en: "https://www.pm.gc.ca/en/news/news-releases/2026/06/04/prime-minister-carney-launches-ai-all-canadas-new-national-artificial"
};

const content = {
  fr: {
    title: "Guide L'IA pour tous Canada",
    metaDescription:
      "Guide bilingue interactif de la stratégie nationale canadienne en matière d'intelligence artificielle, L'IA pour tous.",
    brandAria: "Retour au début",
    navAria: "Navigation principale",
    languageAria: "Choix de la langue",
    brandMark: "IA",
    brandTitle: "Guide L'IA pour tous Canada",
    brandSubtitle: "Guide interactif",
    navEconomy: "Économie",
    navPillars: "Piliers",
    navSectors: "Secteurs",
    navComparisons: "Comparaisons",
    navTargets: "Objectifs",
    navFollowup: "Suivi",
    heroEyebrow: "Stratégie nationale, 2026",
    heroTitle: "L'IA pour tous, en guide interactif.",
    heroLead:
      "Un guide interactif bilingue pour parcourir les piliers, objectifs, secteurs prioritaires et engagements de la stratégie nationale canadienne en IA.",
    heroPrimary: "Explorer la stratégie",
    heroSource: "Stratégie nationale",
    disclaimer:
      "Ce site n'est pas produit par le gouvernement du Canada. Les chiffres et comparaisons du tableau de bord proviennent de la stratégie nationale L'IA pour tous.",
    wheelAria: "Schéma des axes de la stratégie",
    wheelCenterTitle: "L'IA pour tous",
    wheelCenterSubtitle: "Confiance, possibilités, souveraineté",
    wheelProtection: "Protection",
    wheelSkills: "Compétences",
    wheelAdoption: "Adoption",
    wheelSovereignty: "Souveraineté",
    wheelChampions: "Champions",
    wheelAlliances: "Alliances",
    metricsAria: "Objectifs annoncés",
    readingEyebrow: "Lecture économique",
    readingTitle: "Le vrai enjeu est l'adoption, pas seulement la recherche.",
    readingBody:
      "Le Canada possède une base forte en recherche, talents et entreprises IA. La stratégie 2026 déplace le centre de gravité vers l'adoption par les PME, la fonction publique, les secteurs industriels et les infrastructures souveraines de calcul.",
    economyEyebrow: "Point de départ",
    economyTitle: "L'écosystème canadien de l'IA aujourd'hui",
    economyBody:
      "Ces chiffres décrivent la base économique sur laquelle s'appuie la stratégie. Ils sont présentés comme état actuel, pas comme cibles.",
    pillarsEyebrow: "Six piliers",
    pillarsTitle: "Explorer la logique de la stratégie",
    pillarsBody:
      "Cliquez sur un pilier pour voir sa fonction, les leviers publics et les points de suivi tirés de la stratégie.",
    pillarTabsAria: "Piliers de la stratégie",
    leversLabel: "Leviers",
    followLabel: "À suivre dans la stratégie",
    sectorsEyebrow: "Secteurs prioritaires",
    sectorsTitle: "Où l'IA doit produire des gains visibles",
    sectorsBody:
      "Ces secteurs reprennent les domaines où la stratégie nationale situe des actifs de données, des services publics ou une valeur économique importante.",
    sectorFiltersAria: "Filtres de secteurs",
    comparisonsEyebrow: "Comparaisons tirées de la stratégie",
    comparisonsTitle: "Situer le Canada avec les données disponibles",
    comparisonsBody:
      "Cette section ne compare que les chiffres explicitement présents dans la stratégie nationale. Aucune donnée externe n'est ajoutée.",
    targetsEyebrow: "Objectifs chiffrés",
    targetsTitle: "Tableau de bord des cibles",
    targetsBody:
      "Les cibles ci-dessous reprennent la stratégie nationale complète. Les dates sont affichées lorsqu'elles sont indiquées dans la stratégie.",
    simulatorEyebrow: "Simulation simple",
    simulatorTitle: "Trajectoire d'adoption des entreprises",
    simulatorBody:
      "Ajustez la cible pour visualiser l'effort moyen annuel requis depuis le niveau annoncé de 12 %.",
    targetRangeLabel: "Cible d'adoption",
    simulatorNote: (target, annualGain) =>
      `Il faudrait gagner environ ${annualGain} points de pourcentage par an entre 2026 et 2034 pour atteindre ${target} %.`,
    followupEyebrow: "Suivi des engagements",
    followupTitle: "De l'annonce à l'exécution",
    followupBody:
      "Une grille pour distinguer les objectifs, les investissements et les mesures à suivre dans la mise en oeuvre de la stratégie.",
    sourcesEyebrow: "Sources",
    sourcesTitle: "Base documentaire",
    footerBrand: "Guide L'IA pour tous Canada",
    footerNote: "Site non produit par le gouvernement du Canada.",
    filters: [
      { key: "all", label: "Tous" },
      { key: "public", label: "Biens publics" },
      { key: "industrial", label: "Industrie" },
      { key: "resource", label: "Ressources" }
    ],
    sources: [
      {
        label: "Stratégie nationale en matière d'intelligence artificielle du Canada : L'IA pour tous",
        href: strategyLinks.fr
      },
      {
        label: "Communiqué du premier ministre, 4 juin 2026",
        href: pmLinks.fr
      }
    ],
    metrics: [
      ["12 %", "adoption actuelle des entreprises"],
      ["60 %", "cible d'adoption d'ici 2034"],
      ["250 000", "nouveaux emplois liés à l'IA d'ici 2031"],
      ["200 G$", "gains économiques visés par la stratégie"]
    ],
    pillars: [
      {
        tab: "Protection",
        title: "Protéger les Canadiens et préserver notre système démocratique",
        summary:
          "La stratégie indique que l'IA ne pourra réaliser son potentiel qu'à la condition que la population canadienne lui fasse confiance.",
        actions: [
          "Mettre en place des lois modernes sur la protection de la vie privée et la sécurité en ligne.",
          "Renforcer les capacités nationales en matière de sécurité de l'IA.",
          "Assurer des systèmes gouvernementaux sécurisés."
        ],
        watch: [
          "Protection des Canadiens, en particulier les enfants, contre les risques liés à l'IA et les préjudices en ligne.",
          "Protection des renseignements personnels.",
          "Transparence des systèmes d'IA.",
          "Sécurité des interactions avec les agents conversationnels et systèmes d'IA agentique."
        ]
      },
      {
        tab: "Compétences",
        title: "Donner aux Canadiens les moyens de réussir",
        summary:
          "La stratégie veut faire du Canada une nation axée sur les compétences en IA, avec accès à la formation, aux programmes d'études et à des outils d'IA fiables.",
        actions: [
          "Créer une Initiative nationale de littératie en IA.",
          "Offrir une formation de base accessible à tous les Canadiens et Canadiennes.",
          "Veiller à ce que tous les étudiants du postsecondaire aient accès à des agents d'IA fiables."
        ],
        watch: [
          "1 million d'étudiants du postsecondaire en début de parcours rejoints.",
          "Plus de 3 000 enseignants rejoints par des trousses pédagogiques et des formations gratuites.",
          "Déploiement de la littératie en IA dans les bibliothèques publiques et organismes communautaires, notamment dans les régions rurales, éloignées et nordiques."
        ]
      },
      {
        tab: "Adoption",
        title: "Favoriser l'adoption de l'IA pour garantir une prospérité partagée",
        summary:
          "La stratégie indique que les gains de l'IA viendront de son adoption dans l'ensemble de l'économie, surtout par les PME, les entreprises et les services publics.",
        actions: [
          "Accélérer l'adoption de l'IA par les petites et moyennes entreprises.",
          "Transformer la prestation des services publics.",
          "Lancer un programme de missions en IA pour des projets ciblés à fort impact."
        ],
        watch: [
          "Porter l'adoption de l'IA par les entreprises de 12 % à 60 % d'ici 2034.",
          "Aider les PME à passer de l'expérimentation à l'intégration.",
          "Investissement initial de 200 millions de dollars pour améliorer les résultats en santé."
        ]
      },
      {
        tab: "Souveraineté",
        title: "Bâtir les fondements de l'IA souveraine au Canada",
        summary:
          "La stratégie appuie une infrastructure de calcul souveraine à grande échelle, résiliente, durable et gérée par le Canada.",
        actions: [
          "Construire un superordinateur de calibre mondial d'ici 2031.",
          "Accroître l'accès des PME aux capacités de calcul publiques.",
          "Poursuivre des investissements de plus de 2 milliards de dollars dans la capacité de calcul pour l'IA au Canada."
        ],
        watch: [
          "850 MW de capacité de calcul d'ici 2030 via des partenariats privés.",
          "Expansion possible jusqu'à 2,3 GW, alors que le besoin estimé atteint 5,5 GW.",
          "Infrastructure exploitée sous contrôle canadien et régie par les lois canadiennes."
        ]
      },
      {
        tab: "Champions",
        title: "Favoriser l'expansion de champions canadiens de l'IA",
        summary:
          "La stratégie soutient l'expansion de fleurons canadiens de l'IA par l'accès au capital de croissance et par le rôle du gouvernement comme client clé stratégique.",
        actions: [
          "Donner accès à du capital de croissance.",
          "Faire du gouvernement un client clé stratégique.",
          "Soutenir l'expansion de fleurons canadiens de l'IA."
        ],
        watch: [
          "Faire émerger des champions mondiaux.",
          "Stimuler la commercialisation et l'application de l'IA dans des secteurs clés.",
          "Accès des entreprises canadiennes aux marchés mondiaux par des partenariats fiables."
        ]
      },
      {
        tab: "Alliances",
        title: "Établir des partenariats et des alliances mondiales fiables",
        summary:
          "La stratégie prévoit une collaboration avec des partenaires de confiance pour harmoniser les normes, investir conjointement dans l'innovation et aider les entreprises canadiennes à accéder aux marchés mondiaux.",
        actions: [
          "Établir une alliance stratégique multilatérale.",
          "Harmoniser les normes avec des partenaires de confiance.",
          "Investir conjointement dans l'innovation."
        ],
        watch: [
          "Passer de la dépendance à la résilience.",
          "Renforcer l'autonomie souveraine dans les capacités clés en IA et en technologies.",
          "Façonner un écosystème d'IA fondé sur les valeurs démocratiques."
        ]
      }
    ],
    sectors: [
      ["Santé et sciences de la vie", "public", "Secteur prioritaire", "La stratégie situe le Canada comme bien placé pour appliquer l'IA afin d'améliorer les résultats en santé et d'offrir des soins plus rapides et mieux adaptés."],
      ["Énergie et ressources naturelles", "resource", "Secteur prioritaire", "La stratégie vise l'optimisation de l'extraction, l'accélération de la transition vers l'énergie propre et la sécurisation des chaînes d'approvisionnement."],
      ["Transports", "industrial", "Secteur prioritaire", "La stratégie mentionne la logistique intelligente, les systèmes autonomes et la maintenance prédictive des infrastructures."],
      ["Agriculture", "resource", "Secteur prioritaire", "La stratégie vise l'agriculture de précision alimentée par l'IA pour accroître les rendements, réduire l'empreinte environnementale et renforcer la sécurité alimentaire."],
      ["Fabrication et robotique", "industrial", "Secteur prioritaire", "La stratégie présente l'IA industrielle et la robotique comme leviers pour renforcer la compétitivité dans la fabrication de pointe et la production de défense."]
    ],
    economy: [
      ["800 000", "Emplois du secteur numérique", "La stratégie indique que le secteur numérique canadien emploie environ 800 000 personnes."],
      ["140 G$", "Contribution du numérique au PIB", "Le secteur numérique contribue à plus de 140 milliards de dollars au PIB selon la stratégie."],
      ["150 000", "Emplois directement liés à l'IA", "Sur l'ensemble du secteur numérique, 150 000 emplois sont directement liés à l'IA selon la stratégie."],
      ["3 500+", "Entreprises actives en IA", "Plus de 3 500 entreprises canadiennes développent activement des modèles, des outils et des applications avancés en IA."],
      ["37 G$", "Capital de risque levé", "Ces entreprises ont collectivement levé plus de 37 milliards de dollars canadiens en capital de risque selon la stratégie."],
      ["187 G$", "Apport estimé de l'IA générative d'ici 2030", "La stratégie cite des estimations attribuant à l'IA générative une contribution annuelle de 187 milliards de dollars à l'économie canadienne d'ici 2030."],
      ["99 %", "Part des PME dans l'économie", "Les microentreprises ainsi que les petites et moyennes entreprises représentent 99 % des entreprises canadiennes et emploient 14,3 millions de travailleurs."],
      ["5e", "Rang mondial pour le capital de risque en IA", "Le Canada se classe désormais au 5e rang mondial pour le capital de risque en IA, avec 3,1 milliards de dollars investis en 2025."]
    ],
    goals: [
      ["12 %", "Adoption actuelle des entreprises", "Niveau d'adoption de l'IA par les entreprises canadiennes indiqué dans la stratégie."],
      ["60 %", "Adoption des entreprises d'ici 2034", "La stratégie vise à porter l'adoption de l'IA par les entreprises canadiennes de 12 % aujourd'hui à 60 % d'ici 2034."],
      ["250 000", "Nouveaux emplois d'ici 2031", "La stratégie vise jusqu'à 250 000 nouveaux emplois grâce à l'adoption de l'IA d'ici 2031."],
      ["90 000", "Jeunes Canadiens d'ici 2031", "La stratégie vise jusqu'à 90 000 emplois, stages et placements liés à l'IA pour les jeunes Canadiens d'ici 2031."],
      ["200 G$", "Gains économiques", "La stratégie vise près de 200 milliards de dollars en gains économiques, soit une hausse de 3 % du PIB."],
      ["200 M$", "Mission IA en santé", "La stratégie prévoit un investissement initial de 200 millions de dollars pour améliorer les résultats en santé."],
      ["1 million", "Étudiants du postsecondaire", "Les contenus de littératie en IA doivent rejoindre 1 million d'étudiants du postsecondaire en début de parcours."],
      ["3 000+", "Enseignants rejoints", "La stratégie vise plus de 3 000 enseignants grâce à des trousses pédagogiques et formations gratuites."],
      ["2031", "Superordinateur souverain", "La stratégie prévoit un superordinateur de calibre mondial dans le cadre d'une infrastructure souveraine renforcée d'ici 2031."],
      ["850 MW", "Capacité de calcul d'ici 2030", "La stratégie vise 850 MW de capacité de calcul via des partenariats privés d'ici 2030, avec une expansion possible jusqu'à 2,3 GW."]
    ],
    comparisons: [
      ["Adoption des entreprises", "12 %", "14,5 %", "La stratégie indique 12 % d'entreprises canadiennes utilisatrices de l'IA entre le milieu de 2024 et le milieu de 2025, et une projection de 14,5 % d'ici le milieu de 2026."],
      ["PME canadiennes et pays comparateurs", "8 %", "Pays nordiques 29 à 42 %, Allemagne 26 %, France 18 %", "La stratégie compare l'adoption de l'IA par les PME canadiennes avec les pays nordiques, l'Allemagne et la France."],
      ["Adoption individuelle", "37 %", "15e rang mondial", "La stratégie indique que le Canada se classe au 15e rang mondial pour l'adoption individuelle de l'IA."],
      ["Formation et littératie en IA", "44e sur 47", "Moins de 24 % formés en IA", "La stratégie cite ce rang pour la formation et la littératie en IA, ainsi qu'une proportion inférieure au quart de Canadiens ayant reçu une formation en IA."],
      ["Confiance envers les systèmes d'IA", "42e sur 47", "Étude citée par la stratégie", "La stratégie présente le faible niveau de confiance comme un frein majeur à l'adoption approfondie de l'IA."],
      ["Électricité propre pour le calcul", "83 %", "Jusqu'à 90 % de réduction des émissions d'exploitation", "La stratégie indique que plus de 83 % de l'électricité canadienne provient de sources renouvelables et à faibles émissions."]
    ],
    tracker: [
      ["Objectif", "announced", "Adoption de l'IA par les entreprises", "Passer de 12 % aujourd'hui à 60 % d'ici 2034."],
      ["Objectif", "announced", "Emplois liés à l'adoption de l'IA", "Contribuer à la création de jusqu'à 250 000 nouveaux emplois d'ici 2031."],
      ["Objectif", "announced", "Emplois, stages et placements pour les jeunes", "Créer jusqu'à 90 000 possibilités liées à l'IA pour les jeunes Canadiens d'ici 2031."],
      ["Investissement", "funded", "Mission IA en santé", "Investissement initial de 200 millions de dollars pour améliorer les résultats en santé."],
      ["Investissement", "funded", "Capacité de calcul pour l'IA", "Poursuivre des investissements de plus de 2 milliards de dollars dans la capacité de calcul pour l'IA au Canada."],
      ["Investissement", "funded", "Programme LIFT pour les PME", "Mobiliser le programme LIFT, une initiative de 500 millions de dollars de la Banque de développement du Canada."],
      ["Investissement", "funded", "Initiative régionale en IA", "Investir 500 millions de dollars pour élargir l'Initiative régionale en intelligence artificielle."],
      ["Investissement", "funded", "Institut canadien de la sécurité de l'IA", "Investir 50 millions de dollars pour renforcer les capacités de l'Institut canadien de la sécurité de l'IA."],
      ["Mesure", "watch", "Littératie en IA", "Créer une Initiative nationale de littératie en IA et déployer la formation dans les collectivités, notamment rurales, éloignées et nordiques."]
    ]
  },
  en: {
    title: "Canada AI for All Guide",
    metaDescription:
      "Interactive bilingual guide to Canada's national artificial intelligence strategy, AI for All.",
    brandAria: "Back to top",
    navAria: "Main navigation",
    languageAria: "Language selection",
    brandMark: "AI",
    brandTitle: "Canada AI for All Guide",
    brandSubtitle: "Interactive guide",
    navEconomy: "Economy",
    navPillars: "Pillars",
    navSectors: "Sectors",
    navComparisons: "Comparisons",
    navTargets: "Targets",
    navFollowup: "Follow-up",
    heroEyebrow: "National strategy, 2026",
    heroTitle: "AI for All, as an interactive guide.",
    heroLead:
      "A bilingual interactive guide to the pillars, targets, priority sectors and commitments in Canada's national AI strategy.",
    heroPrimary: "Explore the strategy",
    heroSource: "National strategy",
    disclaimer:
      "This site is not produced by the Government of Canada. The figures and comparisons in the dashboard come from the national strategy AI for All.",
    wheelAria: "Diagram of the strategy axes",
    wheelCenterTitle: "AI for All",
    wheelCenterSubtitle: "Trust, opportunity, sovereignty",
    wheelProtection: "Protection",
    wheelSkills: "Skills",
    wheelAdoption: "Adoption",
    wheelSovereignty: "Sovereignty",
    wheelChampions: "Champions",
    wheelAlliances: "Alliances",
    metricsAria: "Announced targets",
    readingEyebrow: "Economic reading",
    readingTitle: "The real challenge is adoption, not only research.",
    readingBody:
      "Canada has a strong base in research, talent and AI firms. The 2026 strategy shifts the center of gravity toward adoption by SMEs, public services, industrial sectors and sovereign compute infrastructure.",
    economyEyebrow: "Starting point",
    economyTitle: "Canada's AI ecosystem today",
    economyBody:
      "These figures describe the economic base on which the strategy builds. They are shown as the current state, not as targets.",
    pillarsEyebrow: "Six pillars",
    pillarsTitle: "Explore the logic of the strategy",
    pillarsBody:
      "Click a pillar to see its function, public levers and follow-up points drawn from the strategy.",
    pillarTabsAria: "Strategy pillars",
    leversLabel: "Levers",
    followLabel: "Follow in the strategy",
    sectorsEyebrow: "Priority sectors",
    sectorsTitle: "Where AI is expected to produce visible gains",
    sectorsBody:
      "These sectors reflect the areas where the national strategy identifies data assets, public services or significant economic value.",
    sectorFiltersAria: "Sector filters",
    comparisonsEyebrow: "Comparisons from the strategy",
    comparisonsTitle: "Place Canada using the available data",
    comparisonsBody:
      "This section only compares figures explicitly present in the national strategy. No external data is added.",
    targetsEyebrow: "Quantified targets",
    targetsTitle: "Targets dashboard",
    targetsBody:
      "The targets below come from the full national strategy. Dates are shown when they are stated in the strategy.",
    simulatorEyebrow: "Simple simulation",
    simulatorTitle: "Business adoption trajectory",
    simulatorBody:
      "Adjust the target to visualize the average annual effort required from the announced 12% baseline.",
    targetRangeLabel: "Adoption target",
    simulatorNote: (target, annualGain) =>
      `It would require about ${annualGain} percentage points per year between 2026 and 2034 to reach ${target}%.`,
    followupEyebrow: "Commitment follow-up",
    followupTitle: "From announcement to execution",
    followupBody:
      "A grid to distinguish targets, investments and implementation measures to follow in the strategy.",
    sourcesEyebrow: "Sources",
    sourcesTitle: "Document base",
    footerBrand: "Canada AI for All Guide",
    footerNote: "Site not produced by the Government of Canada.",
    filters: [
      { key: "all", label: "All" },
      { key: "public", label: "Public goods" },
      { key: "industrial", label: "Industry" },
      { key: "resource", label: "Resources" }
    ],
    sources: [
      {
        label: "Canada's National Artificial Intelligence Strategy: AI for All",
        href: strategyLinks.en
      },
      {
        label: "Prime Minister's news release, June 4, 2026",
        href: pmLinks.en
      }
    ],
    metrics: [
      ["12%", "current business adoption"],
      ["60%", "adoption target by 2034"],
      ["250,000", "new AI-related jobs by 2031"],
      ["$200B", "economic gains targeted by the strategy"]
    ],
    pillars: [
      {
        tab: "Protection",
        title: "Protecting Canadians and safeguarding democracy",
        summary:
          "The strategy states that AI will only reach its potential if Canadians can trust it.",
        actions: [
          "Put modern privacy and online safety laws in place.",
          "Strengthen national AI safety capabilities.",
          "Ensure secure government systems."
        ],
        watch: [
          "Protection of Canadians, especially children, from AI-related risks and online harms.",
          "Protection of personal information.",
          "Transparency of AI systems.",
          "Safe interactions with conversational agents and agentic AI systems."
        ]
      },
      {
        tab: "Skills",
        title: "Ensuring AI empowers Canadians",
        summary:
          "The strategy aims to make Canada an AI-skilled nation, with access to training, curricula and trustworthy AI tools.",
        actions: [
          "Create a national AI literacy initiative.",
          "Offer basic training accessible to all Canadians.",
          "Ensure every post-secondary student has access to trusted AI agents."
        ],
        watch: [
          "Reach 1 million early-stage post-secondary students.",
          "Reach more than 3,000 teachers with toolkits and free training.",
          "Deploy AI literacy through public libraries and community organizations, including rural, remote and northern regions."
        ]
      },
      {
        tab: "Adoption",
        title: "Powering shared prosperity through AI adoption",
        summary:
          "The strategy says AI gains will come from adoption across the economy, especially by SMEs, businesses and public services.",
        actions: [
          "Accelerate AI adoption by small and medium-sized enterprises.",
          "Transform public service delivery.",
          "Launch an AI missions program for targeted high-impact projects."
        ],
        watch: [
          "Raise business AI adoption from 12% to 60% by 2034.",
          "Help SMEs move from experimentation to integration.",
          "Initial $200 million investment to improve health outcomes."
        ]
      },
      {
        tab: "Sovereignty",
        title: "Building the Canadian sovereign AI foundation",
        summary:
          "The strategy supports large-scale sovereign compute infrastructure that is resilient, sustainable and managed by Canada.",
        actions: [
          "Build a world-class supercomputer by 2031.",
          "Increase SME access to public compute capacity.",
          "Continue investments of more than $2 billion in AI compute capacity in Canada."
        ],
        watch: [
          "850 MW of compute capacity by 2030 through private partnerships.",
          "Possible expansion to 2.3 GW, compared with an estimated need of 5.5 GW.",
          "Infrastructure operated under Canadian control and governed by Canadian laws."
        ]
      },
      {
        tab: "Champions",
        title: "Building and scaling Canadian AI champions",
        summary:
          "The strategy supports scaling Canadian AI champions through growth capital and the government's role as a strategic anchor customer.",
        actions: [
          "Provide access to growth capital.",
          "Use government as a strategic anchor customer.",
          "Support the scaling of Canadian AI champions."
        ],
        watch: [
          "Build global champions.",
          "Stimulate commercialization and AI application in key sectors.",
          "Help Canadian firms access global markets through trusted partnerships."
        ]
      },
      {
        tab: "Alliances",
        title: "Building trusted global partnerships and alliances",
        summary:
          "The strategy calls for collaboration with trusted partners to align standards, invest jointly in innovation and help Canadian firms access global markets.",
        actions: [
          "Build a multilateral strategic alliance.",
          "Align standards with trusted partners.",
          "Invest jointly in innovation."
        ],
        watch: [
          "Move from dependence to resilience.",
          "Strengthen sovereign autonomy in key AI and technology capabilities.",
          "Shape an AI ecosystem grounded in democratic values."
        ]
      }
    ],
    sectors: [
      ["Health and life sciences", "public", "Priority sector", "The strategy positions Canada to apply AI to improve health outcomes and deliver faster, better-tailored care."],
      ["Energy and natural resources", "resource", "Priority sector", "The strategy points to optimization of extraction, acceleration of the clean energy transition and secure supply chains."],
      ["Transportation", "industrial", "Priority sector", "The strategy mentions intelligent logistics, autonomous systems and predictive infrastructure maintenance."],
      ["Agriculture", "resource", "Priority sector", "The strategy highlights AI-powered precision agriculture to increase yields, reduce environmental footprint and strengthen food security."],
      ["Manufacturing and robotics", "industrial", "Priority sector", "The strategy presents industrial AI and robotics as levers to strengthen competitiveness in advanced manufacturing and defence production."]
    ],
    economy: [
      ["800,000", "Digital sector jobs", "The strategy states that Canada's digital sector employs about 800,000 people."],
      ["$140B", "Digital contribution to GDP", "The digital sector contributes more than $140 billion to GDP according to the strategy."],
      ["150,000", "Jobs directly related to AI", "Within the digital sector, 150,000 jobs are directly related to AI according to the strategy."],
      ["3,500+", "AI-active firms", "More than 3,500 Canadian firms are actively developing advanced AI models, tools and applications."],
      ["$37B", "Venture capital raised", "These firms have collectively raised more than C$37 billion in venture capital according to the strategy."],
      ["$187B", "Estimated generative AI contribution by 2030", "The strategy cites estimates attributing an annual $187 billion contribution to the Canadian economy to generative AI by 2030."],
      ["99%", "SME share of the economy", "Micro, small and medium-sized enterprises represent 99% of Canadian businesses and employ 14.3 million workers."],
      ["5th", "Global rank for AI venture capital", "Canada now ranks 5th globally for AI venture capital, with $3.1 billion invested in 2025."]
    ],
    goals: [
      ["12%", "Current business adoption", "Current AI adoption level by Canadian businesses stated in the strategy."],
      ["60%", "Business adoption by 2034", "The strategy aims to raise AI adoption by Canadian businesses from 12% today to 60% by 2034."],
      ["250,000", "New jobs by 2031", "The strategy aims for up to 250,000 new jobs through AI adoption by 2031."],
      ["90,000", "Young Canadians by 2031", "The strategy aims for up to 90,000 AI-related jobs, internships and placements for young Canadians by 2031."],
      ["$200B", "Economic gains", "The strategy targets nearly $200 billion in economic gains, a 3% increase in GDP."],
      ["$200M", "AI mission in health", "The strategy provides an initial $200 million investment to improve health outcomes."],
      ["1 million", "Post-secondary students", "AI literacy content is intended to reach 1 million early-stage post-secondary students."],
      ["3,000+", "Teachers reached", "The strategy aims to reach more than 3,000 teachers through toolkits and free training."],
      ["2031", "Sovereign supercomputer", "The strategy includes a world-class supercomputer as part of a strengthened sovereign infrastructure by 2031."],
      ["850 MW", "Compute capacity by 2030", "The strategy targets 850 MW of compute capacity through private partnerships by 2030, with possible expansion to 2.3 GW."]
    ],
    comparisons: [
      ["Business adoption", "12%", "14.5%", "The strategy states 12% of Canadian businesses used AI between mid-2024 and mid-2025, with a projection of 14.5% by mid-2026."],
      ["Canadian SMEs and comparator countries", "8%", "Nordic countries 29 to 42%, Germany 26%, France 18%", "The strategy compares AI adoption by Canadian SMEs with Nordic countries, Germany and France."],
      ["Individual adoption", "37%", "15th globally", "The strategy states that Canada ranks 15th globally for individual AI adoption."],
      ["AI training and literacy", "44th of 47", "Less than 24% trained in AI", "The strategy cites this rank for AI training and literacy, and says less than a quarter of Canadians have received AI training."],
      ["Trust in AI systems", "42nd of 47", "Study cited by the strategy", "The strategy presents low trust as a major barrier to deeper AI adoption."],
      ["Clean electricity for compute", "83%", "Up to 90% reduction in operating emissions", "The strategy states that more than 83% of Canada's electricity comes from renewable and low-emitting sources."]
    ],
    tracker: [
      ["Target", "announced", "AI adoption by businesses", "Move from 12% today to 60% by 2034."],
      ["Target", "announced", "Jobs linked to AI adoption", "Contribute to up to 250,000 new jobs by 2031."],
      ["Target", "announced", "Jobs, internships and placements for youth", "Create up to 90,000 AI-related opportunities for young Canadians by 2031."],
      ["Investment", "funded", "AI mission in health", "Initial $200 million investment to improve health outcomes."],
      ["Investment", "funded", "AI compute capacity", "Continue investments of more than $2 billion in AI compute capacity in Canada."],
      ["Investment", "funded", "BDC LIFT program for SMEs", "Mobilize the LIFT program, a $500 million Business Development Bank of Canada initiative."],
      ["Investment", "funded", "Regional AI Initiative", "Invest $500 million to expand the Regional Artificial Intelligence Initiative."],
      ["Investment", "funded", "Canadian AI Safety Institute", "Invest $50 million to strengthen the Canadian AI Safety Institute's capabilities."],
      ["Measure", "watch", "AI literacy", "Create a national AI literacy initiative and deploy training in communities, including rural, remote and northern regions."]
    ]
  }
};

let currentLanguage = localStorage.getItem("ai-ca-language") || "fr";
let selectedPillar = 0;
let selectedSector = "all";

function t() {
  return content[currentLanguage];
}

function applyStaticTranslations() {
  const data = t();
  document.documentElement.lang = currentLanguage;
  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute("content", data.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (typeof data[key] === "string") {
      node.textContent = data[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key && typeof data[key] === "string") {
        node.setAttribute(attribute, data[key]);
      }
    });
  });

  const strategyLink = document.querySelector("#strategy-link");
  strategyLink.href = strategyLinks[currentLanguage];
}

function renderMetrics() {
  const band = document.querySelector("#metrics-band");
  band.replaceChildren(
    ...t().metrics.map(([value, label]) => {
      const article = document.createElement("article");
      article.innerHTML = `
        <span class="metric-value">${value}</span>
        <span class="metric-label">${label}</span>
      `;
      return article;
    })
  );
}

function renderPillarTabs() {
  const tabs = document.querySelector("#pillar-tabs");
  tabs.replaceChildren(
    ...t().pillars.map((pillar, index) => {
      const button = document.createElement("button");
      button.className = `pillar-tab${index === selectedPillar ? " active" : ""}`;
      button.type = "button";
      button.role = "tab";
      button.dataset.index = String(index);
      button.setAttribute("aria-selected", String(index === selectedPillar));
      button.textContent = pillar.tab;
      button.addEventListener("click", () => {
        selectedPillar = index;
        renderPillarTabs();
        renderPillarDetail();
      });
      return button;
    })
  );
}

function renderList(target, items) {
  target.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );
}

function renderPillarDetail() {
  const pillar = t().pillars[selectedPillar];
  document.querySelector("#pillar-kicker").textContent =
    currentLanguage === "fr" ? `Pilier ${selectedPillar + 1}` : `Pillar ${selectedPillar + 1}`;
  document.querySelector("#pillar-title").textContent = pillar.title;
  document.querySelector("#pillar-summary").textContent = pillar.summary;
  renderList(document.querySelector("#pillar-actions"), pillar.actions);
  renderList(document.querySelector("#pillar-watch"), pillar.watch);

  document.querySelectorAll(".wheel-node").forEach((node) => {
    node.classList.toggle("active", Number(node.dataset.pillar) === selectedPillar);
  });
}

function renderSectorFilters() {
  const filters = document.querySelector("#sector-filters");
  filters.replaceChildren(
    ...t().filters.map((filter) => {
      const button = document.createElement("button");
      button.className = `filter${filter.key === selectedSector ? " active" : ""}`;
      button.type = "button";
      button.dataset.sector = filter.key;
      button.textContent = filter.label;
      button.addEventListener("click", () => {
        selectedSector = filter.key;
        renderSectorFilters();
        renderSectors();
      });
      return button;
    })
  );
}

function renderSectors() {
  const grid = document.querySelector("#sector-grid");
  const visible =
    selectedSector === "all"
      ? t().sectors
      : t().sectors.filter(([, tag]) => tag === selectedSector);

  grid.replaceChildren(
    ...visible.map(([name, , label, text]) => {
      const article = document.createElement("article");
      article.className = "sector-card";
      article.innerHTML = `
        <span>${label}</span>
        <h3>${name}</h3>
        <p>${text}</p>
      `;
      return article;
    })
  );
}

function renderCardGrid(selector, items, className = "goal-card", badge = "Objectif") {
  const grid = document.querySelector(selector);
  grid.replaceChildren(
    ...items.map(([value, title, text], index) => {
      const article = document.createElement("article");
      article.className = `${className}${index === 0 && selector === "#goal-grid" ? " active" : ""}`;
      article.tabIndex = selector === "#goal-grid" ? 0 : -1;
      article.innerHTML = `
        <span>${badge}</span>
        <strong>${value}</strong>
        <h3>${title}</h3>
        <p>${text}</p>
      `;
      if (selector === "#goal-grid") {
        article.addEventListener("click", () => {
          grid.querySelectorAll(".goal-card").forEach((card) => card.classList.remove("active"));
          article.classList.add("active");
        });
        article.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            article.click();
          }
        });
      }
      return article;
    })
  );
}

function renderComparisons() {
  const grid = document.querySelector("#comparison-grid");
  grid.replaceChildren(
    ...t().comparisons.map(([label, canada, reference, text]) => {
      const article = document.createElement("article");
      article.className = "comparison-card";
      article.innerHTML = `
        <span>${label}</span>
        <strong>${canada}</strong>
        <h3>${reference}</h3>
        <p>${text}</p>
      `;
      return article;
    })
  );
}

function renderTracker() {
  const grid = document.querySelector("#tracker-grid");
  grid.replaceChildren(
    ...t().tracker.map(([status, className, title, text]) => {
      const article = document.createElement("article");
      article.className = "tracker-card";
      article.innerHTML = `
        <span class="status ${className}">${status}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      `;
      return article;
    })
  );
}

function renderSources() {
  const list = document.querySelector("#sources-list");
  list.replaceChildren(
    ...t().sources.map((source) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = source.href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = source.label;
      li.append(link);
      return li;
    })
  );
}

function updateSimulator() {
  const range = document.querySelector("#target-range");
  const target = Number(range.value);
  const current = 12;
  const years = 2034 - 2026;
  const annualGain = ((target - current) / years).toFixed(1);
  document.querySelector("#target-label").textContent =
    currentLanguage === "fr" ? `${target} %` : `${target}%`;
  document.querySelector("#adoption-bar").style.width = `${target}%`;
  document.querySelector("#adoption-note").textContent = t().simulatorNote(target, annualGain);
}

function renderAll() {
  applyStaticTranslations();
  renderMetrics();
  renderPillarTabs();
  renderPillarDetail();
  renderSectorFilters();
  renderSectors();
  renderCardGrid("#economy-grid", t().economy, "goal-card", currentLanguage === "fr" ? "État actuel" : "Current state");
  renderCardGrid("#goal-grid", t().goals, "goal-card", currentLanguage === "fr" ? "Objectif" : "Target");
  renderComparisons();
  renderTracker();
  renderSources();
  updateSimulator();
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    localStorage.setItem("ai-ca-language", currentLanguage);
    document.querySelectorAll(".lang-button").forEach((item) => {
      item.classList.toggle("active", item.dataset.lang === currentLanguage);
    });
    selectedPillar = 0;
    selectedSector = "all";
    renderAll();
  });
});

document.querySelectorAll(".wheel-node").forEach((node) => {
  node.addEventListener("click", () => {
    selectedPillar = Number(node.dataset.pillar);
    renderPillarTabs();
    renderPillarDetail();
    document.querySelector("#piliers").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelector("#target-range").addEventListener("input", updateSimulator);

document.querySelectorAll(".lang-button").forEach((item) => {
  item.classList.toggle("active", item.dataset.lang === currentLanguage);
});

renderAll();
