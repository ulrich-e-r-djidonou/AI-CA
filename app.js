const pillars = [
  {
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
      "Garantir la sécurité des interactions avec les agents conversationnels.",
      "Avec l'adoption croissante de l'IA agentique, savoir quels systèmes d'IA sont sûrs à utiliser, comment les risques sont recensés et quelles normes s'appliquent."
    ]
  },
  {
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
    title: "Bâtir les fondements de l'IA souveraine au Canada",
    summary:
      "La stratégie appuie une infrastructure de calcul souveraine à grande échelle, résiliente, durable et gérée par le Canada.",
    actions: [
      "Construire un superordinateur de calibre mondial d'ici 2031.",
      "Accroître l'accès des PME aux capacités de calcul publiques.",
      "Poursuivre des investissements de plus de 2 milliards de dollars dans la capacité de calcul pour l'IA au Canada."
    ],
    watch: [
      "Capacité nationale en centres de données et en services infonuagiques.",
      "Infrastructure exploitée sous contrôle canadien et régie par les lois canadiennes.",
      "Connectivité diversifiée et de grande capacité, par fibre optique et par satellite."
    ]
  },
  {
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
    title: "Établir des partenariats et des alliances fiables dans le monde",
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
];

const sectors = [
  {
    name: "Santé et sciences de la vie",
    tag: "public",
    label: "Secteur prioritaire",
    text: "La stratégie situe le Canada comme bien placé pour appliquer l'IA afin d'améliorer les résultats en santé et d'offrir des soins plus rapides et mieux adaptés."
  },
  {
    name: "Énergie et ressources naturelles",
    tag: "resource",
    label: "Secteur prioritaire",
    text: "La stratégie vise l'optimisation de l'extraction, l'accélération de la transition vers l'énergie propre et la sécurisation des chaînes d'approvisionnement."
  },
  {
    name: "Transports",
    tag: "industrial",
    label: "Secteur prioritaire",
    text: "La stratégie mentionne la logistique intelligente, les systèmes autonomes et la maintenance prédictive des infrastructures."
  },
  {
    name: "Agriculture",
    tag: "resource",
    label: "Secteur prioritaire",
    text: "La stratégie vise l'agriculture de précision alimentée par l'IA pour accroître les rendements, réduire l'empreinte environnementale et renforcer la sécurité alimentaire."
  },
  {
    name: "Fabrication et robotique",
    tag: "industrial",
    label: "Secteur prioritaire",
    text: "La stratégie présente l'IA industrielle et la robotique comme leviers pour renforcer la compétitivité dans la fabrication de pointe et la production de défense."
  }
];

const economy = [
  {
    value: "800 000",
    title: "Emplois du secteur numérique",
    text: "La stratégie indique que le secteur numérique canadien emploie environ 800 000 personnes."
  },
  {
    value: "140 G$",
    title: "Contribution du numérique au PIB",
    text: "Le secteur numérique contribue à plus de 140 milliards de dollars au PIB selon la stratégie."
  },
  {
    value: "150 000",
    title: "Emplois directement liés à l'IA",
    text: "Sur l'ensemble du secteur numérique, 150 000 emplois sont directement liés à l'IA selon la stratégie."
  },
  {
    value: "3 500+",
    title: "Entreprises actives en IA",
    text: "Plus de 3 500 entreprises canadiennes développent activement des modèles, des outils et des applications avancés en IA."
  },
  {
    value: "37 G$",
    title: "Capital de risque levé",
    text: "Ces entreprises ont collectivement levé plus de 37 milliards de dollars canadiens en capital de risque selon la stratégie."
  },
  {
    value: "187 G$",
    title: "Apport estimé de l'IA générative d'ici 2030",
    text: "La stratégie cite des estimations attribuant à l'IA générative une contribution annuelle de 187 milliards de dollars à l'économie canadienne d'ici 2030. C'est une estimation citée, pas une cible gouvernementale."
  },
  {
    value: "99 %",
    title: "Part des PME dans l'économie",
    text: "Les microentreprises ainsi que les petites et moyennes entreprises représentent 99 % des entreprises canadiennes et emploient 14,3 millions de travailleurs."
  },
  {
    value: "1 sur 8",
    title: "Entreprises ayant intégré l'IA",
    text: "Seulement une entreprise canadienne sur huit a intégré formellement l'IA à ses activités, alors que près de la moitié des dirigeants de PME ont déjà expérimenté des outils d'IA générative."
  },
  {
    value: "5e",
    title: "Rang mondial pour le capital de risque en IA",
    text: "Le Canada se classe désormais au 5e rang mondial pour le capital de risque en IA, avec 3,1 milliards de dollars investis en 2025."
  },
  {
    value: "0,3 à 1,1 %",
    badge: "Prévision",
    title: "Hausse annuelle de la productivité du travail",
    text: "On prévoit une hausse annuelle de la productivité du travail de 0,3 % à 1,1 %, même abstraction faite des effets de la stratégie."
  }
];

const goals = [
  {
    value: "12 %",
    title: "Adoption actuelle des entreprises",
    text: "Niveau d'adoption de l'IA par les entreprises canadiennes indiqué dans la stratégie."
  },
  {
    value: "60 %",
    title: "Adoption des entreprises d'ici 2034",
    text: "La stratégie vise à porter l'adoption de l'IA par les entreprises canadiennes de 12 % aujourd'hui à 60 % d'ici 2034."
  },
  {
    value: "250 000",
    title: "Nouveaux emplois d'ici 2031",
    text: "La stratégie vise jusqu'à 250 000 nouveaux emplois grâce à l'adoption de l'IA d'ici 2031."
  },
  {
    value: "90 000",
    title: "Jeunes Canadiens d'ici 2031",
    text: "La stratégie vise jusqu'à 90 000 emplois, stages et placements liés à l'IA pour les jeunes Canadiens d'ici 2031."
  },
  {
    value: "200 G$",
    title: "Gains économiques",
    text: "La stratégie vise près de 200 milliards de dollars en gains économiques, soit une hausse de 3 % du PIB."
  },
  {
    value: "200 M$",
    title: "Mission IA en santé",
    text: "La stratégie prévoit un investissement initial de 200 millions de dollars pour améliorer les résultats en santé."
  },
  {
    value: "1 million",
    title: "Étudiants du postsecondaire",
    text: "Les contenus de littératie en IA doivent rejoindre 1 million d'étudiants du postsecondaire en début de parcours."
  },
  {
    value: "3 000+",
    title: "Enseignants rejoints",
    text: "La stratégie vise plus de 3 000 enseignants grâce à des trousses pédagogiques et formations gratuites."
  },
  {
    value: "2031",
    title: "Superordinateur souverain",
    text: "La stratégie prévoit un superordinateur de calibre mondial dans le cadre d'une infrastructure souveraine renforcée d'ici 2031."
  },
  {
    value: "850 MW",
    title: "Capacité de calcul d'ici 2030",
    text: "La stratégie vise 850 MW de capacité de calcul via des partenariats privés d'ici 2030, avec une expansion possible jusqu'à 2,3 GW, alors que le besoin estimé atteint 5,5 GW."
  },
  {
    value: "Agents d'IA",
    title: "Accès pour les étudiants du postsecondaire",
    text: "La stratégie veut que tous les étudiants du postsecondaire aient accès à des agents d'IA fiables, soit des outils d'IA personnels et performants placés entre les mains de la prochaine génération de travailleurs, de chercheurs et d'innovateurs."
  }
];

const comparisons = [
  {
    label: "Adoption des entreprises",
    canada: "12 %",
    reference: "14,5 %",
    text: "La stratégie indique 12 % d'entreprises canadiennes utilisatrices de l'IA entre le milieu de 2024 et le milieu de 2025, et une projection de 14,5 % d'ici le milieu de 2026."
  },
  {
    label: "PME canadiennes et pays comparateurs",
    canada: "8 %",
    reference: "Pays nordiques 29 à 42 %, Allemagne 26 %, France 18 %",
    text: "La stratégie compare l'adoption de l'IA par les PME canadiennes avec les pays nordiques, l'Allemagne et la France."
  },
  {
    label: "Adoption individuelle",
    canada: "37 %",
    reference: "15e rang mondial",
    text: "La stratégie indique que le Canada se classe au 15e rang mondial pour l'adoption individuelle de l'IA."
  },
  {
    label: "Formation et littératie en IA",
    canada: "44e sur 47",
    reference: "Moins de 24 % formés en IA",
    text: "La stratégie cite ce rang pour la formation et la littératie en IA, ainsi qu'une proportion inférieure au quart de Canadiens ayant reçu une formation en IA."
  },
  {
    label: "Confiance envers les systèmes d'IA",
    canada: "42e sur 47",
    reference: "Étude citée par la stratégie",
    text: "La stratégie présente le faible niveau de confiance comme un frein majeur à l'adoption approfondie de l'IA."
  },
  {
    label: "Électricité propre pour le calcul",
    canada: "83 %",
    reference: "Jusqu'à 90 % de réduction des émissions d'exploitation",
    text: "La stratégie indique que plus de 83 % de l'électricité canadienne provient de sources renouvelables et à faibles émissions."
  }
];

const tracker = [
  {
    status: "Objectif",
    className: "announced",
    title: "Adoption de l'IA par les entreprises",
    text: "Passer de 12 % aujourd'hui à 60 % d'ici 2034."
  },
  {
    status: "Objectif",
    className: "announced",
    title: "Emplois liés à l'adoption de l'IA",
    text: "Contribuer à la création de jusqu'à 250 000 nouveaux emplois d'ici 2031."
  },
  {
    status: "Objectif",
    className: "announced",
    title: "Emplois, stages et placements pour les jeunes",
    text: "Créer jusqu'à 90 000 possibilités liées à l'IA pour les jeunes Canadiens d'ici 2031."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Mission IA en santé",
    text: "Investissement initial de 200 millions de dollars pour améliorer les résultats en santé."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Capacité de calcul pour l'IA",
    text: "Poursuivre des investissements de plus de 2 milliards de dollars dans la capacité de calcul pour l'IA au Canada."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Programme LIFT (BDC) pour les PME",
    text: "Mobiliser le programme LIFT, une initiative de 500 millions de dollars de la Banque de développement du Canada, pour aider les PME à financer l'intégration d'outils d'IA."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Initiative régionale en IA",
    text: "Investir 500 millions de dollars pour élargir l'Initiative régionale en intelligence artificielle et accélérer l'adoption et la commercialisation de l'IA à l'échelle du pays."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Fonds canadien de croissance technologique",
    text: "Créer un Fonds canadien de croissance technologique de 500 millions de dollars pour combler l'écart de capital de croissance des entreprises d'IA les plus prometteuses."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Institut canadien de la sécurité de l'IA",
    text: "Investir 50 millions de dollars pour renforcer les capacités de l'Institut canadien de la sécurité de l'IA, suivre l'évolution des risques et évaluer les modèles."
  },
  {
    status: "Investissement",
    className: "funded",
    title: "Espace de données du secteur de la santé",
    text: "Investir 100 millions de dollars pour lancer l'Espace de données du secteur de la santé et relier des ensembles de données sécurisés et normalisés."
  },
  {
    status: "Mesure",
    className: "watch",
    title: "Littératie en IA",
    text: "Créer une Initiative nationale de littératie en IA et déployer la formation dans les collectivités, notamment rurales, éloignées et nordiques."
  }
];

const pillarTabs = document.querySelectorAll(".pillar-tab");
const wheelNodes = document.querySelectorAll(".wheel-node");
const pillarKicker = document.querySelector("#pillar-kicker");
const pillarTitle = document.querySelector("#pillar-title");
const pillarSummary = document.querySelector("#pillar-summary");
const pillarActions = document.querySelector("#pillar-actions");
const pillarWatch = document.querySelector("#pillar-watch");

function renderList(target, items) {
  target.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );
}

function selectPillar(index) {
  const pillar = pillars[index];
  pillarKicker.textContent = `Pilier ${index + 1}`;
  pillarTitle.textContent = pillar.title;
  pillarSummary.textContent = pillar.summary;
  renderList(pillarActions, pillar.actions);
  renderList(pillarWatch, pillar.watch);

  pillarTabs.forEach((tab) => {
    const active = Number(tab.dataset.index) === index;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  wheelNodes.forEach((node) => {
    node.classList.toggle("active", Number(node.dataset.pillar) === index);
  });
}

function renderSectors(filter = "all") {
  const grid = document.querySelector("#sector-grid");
  const visible = filter === "all" ? sectors : sectors.filter((sector) => sector.tag === filter);
  grid.replaceChildren(
    ...visible.map((sector) => {
      const article = document.createElement("article");
      article.className = "sector-card";
      article.innerHTML = `
        <span>${sector.label}</span>
        <h3>${sector.name}</h3>
        <p>${sector.text}</p>
      `;
      return article;
    })
  );
}

function renderEconomy() {
  const grid = document.querySelector("#economy-grid");
  grid.replaceChildren(
    ...economy.map((item) => {
      const article = document.createElement("article");
      article.className = "goal-card";
      article.innerHTML = `
        <span>${item.badge || "État actuel"}</span>
        <strong>${item.value}</strong>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      return article;
    })
  );
}

function renderGoals() {
  const grid = document.querySelector("#goal-grid");
  grid.replaceChildren(
    ...goals.map((goal, index) => {
      const article = document.createElement("article");
      article.className = `goal-card${index === 0 ? " active" : ""}`;
      article.tabIndex = 0;
      article.innerHTML = `
        <span>Objectif</span>
        <strong>${goal.value}</strong>
        <h3>${goal.title}</h3>
        <p>${goal.text}</p>
      `;
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
      return article;
    })
  );
}

function renderComparisons() {
  const grid = document.querySelector("#comparison-grid");
  grid.replaceChildren(
    ...comparisons.map((comparison) => {
      const article = document.createElement("article");
      article.className = "comparison-card";
      article.innerHTML = `
        <span>${comparison.label}</span>
        <strong>${comparison.canada}</strong>
        <h3>${comparison.reference}</h3>
        <p>${comparison.text}</p>
      `;
      return article;
    })
  );
}

function renderTracker() {
  const grid = document.querySelector("#tracker-grid");
  grid.replaceChildren(
    ...tracker.map((item) => {
      const article = document.createElement("article");
      article.className = "tracker-card";
      article.innerHTML = `
        <span class="status ${item.className}">${item.status}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      return article;
    })
  );
}

function updateSimulator() {
  const range = document.querySelector("#target-range");
  const label = document.querySelector("#target-label");
  const bar = document.querySelector("#adoption-bar");
  const note = document.querySelector("#adoption-note");
  const target = Number(range.value);
  const current = 12;
  const years = 2034 - 2026;
  const annualGain = ((target - current) / years).toFixed(1);

  label.textContent = `${target} %`;
  bar.style.width = `${target}%`;
  note.textContent = `Il faudrait gagner environ ${annualGain} points de pourcentage par an entre 2026 et 2034.`;
}

pillarTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectPillar(Number(tab.dataset.index)));
});

wheelNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const index = Number(node.dataset.pillar);
    selectPillar(index);
    document.querySelector("#piliers").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((filter) => filter.classList.remove("active"));
    button.classList.add("active");
    renderSectors(button.dataset.sector);
  });
});

document.querySelector("#target-range").addEventListener("input", updateSimulator);

selectPillar(0);
renderSectors();
renderEconomy();
renderGoals();
renderComparisons();
renderTracker();
updateSimulator();
