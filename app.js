const pillars = [
  {
    title: "Protecting Canadians and safeguarding democracy",
    summary:
      "La strategie place la confiance comme condition d'adoption : vie privee, securite en ligne, elections, transparence et capacites nationales de surete.",
    actions: [
      "Moderniser les lois de protection de la vie privee et les protections en ligne.",
      "Renforcer l'Institut canadien de la securite de l'IA.",
      "Proteger les elections et les institutions contre la desinformation amplifiee par l'IA."
    ],
    watch: [
      "Calendrier legislatif reel et textes de loi deposes.",
      "Capacite de verification technique des modeles.",
      "Protection des enfants, deepfakes et usages abusifs des donnees personnelles."
    ]
  },
  {
    title: "Ensuring AI empowers Canadians",
    summary:
      "Le Canada veut devenir une nation de competences IA, avec formation gratuite, acces pour les jeunes, travailleurs et voix culturelles canadiennes.",
    actions: [
      "Acces a une formation gratuite en litteratie IA.",
      "Cible d'un million d'etudiants postsecondaires rejoints.",
      "Doublement de la formation des enseignants K-12 a plus de 3 000 educateurs."
    ],
    watch: [
      "Qualite et certification des formations.",
      "Acces hors grands centres urbains.",
      "Effets sur travailleurs vulnerables et transitions d'emploi."
    ]
  },
  {
    title: "Powering shared prosperity",
    summary:
      "Le coeur economique de la strategie est l'adoption large par les PME, les services publics et les secteurs industriels ou l'IA peut ameliorer la productivite.",
    actions: [
      "Soutiens a l'adoption pour PME et organismes sans but lucratif.",
      "Transformation des services publics.",
      "Programme de missions IA pour des projets a fort impact public."
    ],
    watch: [
      "Mesure transparente de la productivite.",
      "Difference entre experimentation et adoption operationnelle.",
      "Qualite des emplois crees ou transformes."
    ]
  },
  {
    title: "Building the Canadian sovereign AI foundation",
    summary:
      "La souverainete repose sur le calcul, les donnees, l'energie, les talents et les infrastructures sous gouvernance canadienne.",
    actions: [
      "Construction d'un superordinateur de calibre mondial d'ici 2031.",
      "Fonds d'acces au calcul pour PME.",
      "Developpement d'infrastructures resilientes, durables et gouvernees au Canada."
    ],
    watch: [
      "Capacite electrique disponible pour les centres de donnees.",
      "Dependance aux fournisseurs et puces etrangeres.",
      "Criteres de souverainete pour cloud, donnees et modeles."
    ]
  },
  {
    title: "Building and scaling Canadian AI champions",
    summary:
      "La strategie veut convertir la recherche et les entreprises canadiennes en champions capables de croitre au Canada et d'exporter.",
    actions: [
      "Acces a plus de capital de croissance.",
      "Gouvernement comme client d'ancrage strategique.",
      "Commercialisation des solutions IA canadiennes dans les secteurs prioritaires."
    ],
    watch: [
      "Achats publics accessibles aux PME.",
      "Retention de la propriete intellectuelle au Canada.",
      "Passage du financement de demarrage au financement de croissance."
    ]
  },
  {
    title: "Building trusted partnerships and global alliances",
    summary:
      "Le Canada cherche a batir des alliances avec des partenaires fiables pour standards, innovation, acces aux marches et autonomie strategique.",
    actions: [
      "Alignement international des normes.",
      "Co-investissements avec partenaires fiables.",
      "Acces aux marches mondiaux pour les entreprises canadiennes."
    ],
    watch: [
      "Equilibre entre ouverture commerciale et autonomie nationale.",
      "Compatibilite des normes avec les valeurs democratiques.",
      "Retombees concretes des partenariats annonces."
    ]
  }
];

const sectors = [
  {
    name: "Sante et sciences de la vie",
    tag: "public",
    label: "Biens publics",
    text: "Applications IA pour diagnostics, parcours de soins, recherche clinique et services de sante plus rapides."
  },
  {
    name: "Energie et ressources naturelles",
    tag: "resource",
    label: "Ressources",
    text: "Optimisation de l'extraction, minerais critiques, transition energetique et chaines d'approvisionnement."
  },
  {
    name: "Transport",
    tag: "industrial",
    label: "Industrie",
    text: "Logistique intelligente, maintenance predictive, infrastructures autonomes et fluidite des echanges."
  },
  {
    name: "Agriculture",
    tag: "resource",
    label: "Ressources",
    text: "Agriculture de precision, rendements, securite alimentaire et reduction de l'impact environnemental."
  },
  {
    name: "Manufacturier et robotique",
    tag: "industrial",
    label: "Industrie",
    text: "Robotique industrielle, production avancee, defense et competitivite dans un contexte de rarete de main-d'oeuvre."
  }
];

const goals = [
  {
    value: "60%",
    title: "Adoption IA des entreprises d'ici 2034",
    text: "La strategie complete fixe une trajectoire de 12% aujourd'hui a 60% d'ici 2034."
  },
  {
    value: "250 000",
    title: "Emplois lies a l'adoption",
    text: "Cible d'emplois crees par l'adoption de l'IA d'ici 2031."
  },
  {
    value: "$200B",
    title: "Gains de PIB",
    text: "Effet annonce d'environ 3% de PIB grace a la productivite et a la commercialisation."
  },
  {
    value: "$200M",
    title: "Premiere mission IA en sante",
    text: "Montant de depart annonce pour des projets a fort impact sur les resultats de sante."
  },
  {
    value: "1M",
    title: "Etudiants postsecondaires",
    text: "Objectif de formation de base en IA pour les etudiants postsecondaires."
  },
  {
    value: "2031",
    title: "Superordinateur souverain",
    text: "Horizon annonce pour une infrastructure de calcul souveraine renforcee."
  }
];

const tracker = [
  {
    status: "Annonce",
    className: "announced",
    title: "Lois vie privee et securite en ligne",
    text: "Engagement clair, mais le suivi dependra des projets de loi et de leur adoption."
  },
  {
    status: "Finance",
    className: "funded",
    title: "50 M$ pour l'Institut canadien de securite de l'IA",
    text: "Montant annonce pour renforcer le suivi des risques et les evaluations techniques."
  },
  {
    status: "Finance",
    className: "funded",
    title: "200 M$ pour une mission IA en sante",
    text: "Premiere mission ciblee vers l'amelioration des resultats de sante."
  },
  {
    status: "A verifier",
    className: "watch",
    title: "Cible 60% ou 75% d'adoption",
    text: "La strategie complete mentionne 60% d'ici 2034, l'aperçu mentionne 75% d'ici 2031."
  },
  {
    status: "Annonce",
    className: "announced",
    title: "Fonds d'acces au calcul",
    text: "Important pour les PME, mais les criteres d'admissibilite devront etre suivis."
  },
  {
    status: "Annonce",
    className: "announced",
    title: "Achats publics comme client d'ancrage",
    text: "Le potentiel dependra de la vitesse des marches publics et de l'acces des jeunes entreprises."
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
        document.querySelectorAll(".goal-card").forEach((card) => card.classList.remove("active"));
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

  label.textContent = `${target}%`;
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
renderGoals();
renderTracker();
updateSimulator();
