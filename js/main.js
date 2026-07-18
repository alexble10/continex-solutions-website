(function () {
  "use strict";

  /* ======================================================================
     EDITABLE CONFIG — update these before launch
     ====================================================================== */
  var CONFIG = {
    // WhatsApp number in international format, digits only (no + or spaces)
    whatsappNumber: "13858882325",
    email: "continexsolutions@outlook.com"
  };

  /* ======================================================================
     I18N DICTIONARY
     ====================================================================== */
  var DICT = {
    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.catalogue": "Catalogue",
      "nav.services": "Services",
      "nav.process": "Comment ça marche",
      "nav.industries": "Secteurs",
      "nav.contact": "Contact",
      "nav.cta": "Demander un devis",

      "hero.eyebrow": "Sourcing industriel USA ↔ Afrique",
      "hero.title": "Connecter les industries. Bâtir l'avenir.",
      "hero.sub": "Continex Solutions source les pièces industrielles certifiées introuvables localement : vannes, brides, hydraulique, pneumatique, instrumentation. Nous gérons tout, du devis à la livraison.",
      "hero.cta1": "Demander un devis",
      "hero.cta2": "Voir le catalogue",
      "hero.locations": "Salt Lake City, USA / Abidjan, Côte d'Ivoire",

      "trust.item1": "Fournisseurs certifiés US & UE",
      "trust.item2": "Contrôle qualité avant expédition",
      "trust.item3": "Un seul interlocuteur, une seule facture",
      "trust.item4": "Support bilingue FR / EN",

      "stats.item1": "Amérique et Afrique connectées",
      "stats.item2": "Délai moyen pour un devis chiffré",
      "stats.item3": "Catégories de pièces industrielles sourcées",
      "stats.item4": "Des pièces contrôlées avant expédition",

      "about.eyebrow": "Notre histoire",
      "about.title": "Le pont entre l'industrie africaine et les fournisseurs américains",
      "about.lead": "Continex n'est pas un simple fournisseur de pièces détachées. Nous sommes le pont entre deux continents. Ce que nous vendons vraiment, c'est la confiance.",
      "about.body": "Basés à Salt Lake City avec une équipe à Abidjan, nous éliminons le risque, la distance et l'incertitude qui pèsent sur chaque achat industriel international. Quand une pièce certifiée est introuvable localement, nous la trouvons chez un fournisseur américain ou européen vérifié, nous la contrôlons et nous la livrons, sous un seul contrat et une seule facture.",
      "about.point1": "Fournisseurs vérifiés, conformité KYC/AML et normes internationales",
      "about.point2": "Prix négociés et coût total transparent, sans surprise",
      "about.point3": "Un interlocuteur unique, du premier appel à la livraison",
      "about.founder": "20 ans d'expérience dans le commerce industriel international.",

      "cat.eyebrow": "Ce que nous sourçons",
      "cat.title": "Catalogue de pièces industrielles",
      "cat.lead": "Des composants haute exigence, sourcés chez des fabricants américains et européens certifiés, pour l'oil & gas et l'agro-industrie.",
      "cat.group1.title": "Vannes",
      "cat.group1.body": "Vannes à opercule, à bille et de sécurité, ainsi que doigts de gant pour la mesure de température, certifiées pour vos environnements process les plus exigeants.",
      "cat.group1.p1": "Vanne à opercule",
      "cat.group1.p2": "Vanne à bille",
      "cat.group1.p3": "Vanne de sécurité (PSV)",
      "cat.group1.p4": "Doigts de gant",
      "cat.group2.title": "Instrumentation",
      "cat.group2.body": "Vannes motorisées, débitmètres et transmetteurs de niveau et de pression, pour un pilotage précis et fiable de vos lignes de production.",
      "cat.group2.p1": "Vanne actionnée",
      "cat.group2.p2": "Débitmètre",
      "cat.group2.p3": "Transmetteur de niveau",
      "cat.group2.p4": "Transmetteur de pression",
      "cat.group3.title": "Hydraulique",
      "cat.group3.body": "Pompes hydrauliques, centrifuges et à engrenages, ainsi que roulements et kits de réparation pour limiter les arrêts de production.",
      "cat.group3.p1": "Pompe hydraulique",
      "cat.group3.p2": "Pompe centrifuge",
      "cat.group3.p3": "Pompe à engrenages",
      "cat.group3.p4": "Roulements & kits",
      "cat.group4.title": "Pneumatique",
      "cat.group4.body": "Actionneurs, raccords, électrovannes de distribution et unités FRL (filtre-régulateur-lubrificateur), pour des circuits pneumatiques fiables.",
      "cat.group4.p1": "Actionneurs pneumatiques",
      "cat.group4.p2": "Raccords & tubes",
      "cat.group4.p3": "Électrovannes de distribution",
      "cat.group4.p4": "Unités FRL",
      "cat.cta": "Discuter de votre besoin",

      "services.eyebrow": "Notre promesse",
      "services.title": "Du devis à la livraison, sans friction",
      "services.lead": "Un seul partenaire gère chaque étape. Vous n'aurez jamais à coordonner six fournisseurs différents.",
      "services.item1.title": "Recherche & sélection de fournisseurs",
      "services.item1.body": "Identification de fabricants certifiés aux États-Unis et en Europe pour chaque référence, même la plus spécifique.",
      "services.item2.title": "Négociation & prix compétitifs",
      "services.item2.body": "Volume et relations fournisseurs long terme pour un coût total optimisé, sans compromis sur la qualité.",
      "services.item3.title": "Contrôle qualité & certification",
      "services.item3.body": "Inspection avant expédition et vérification des certificats matière pour chaque référence commandée.",
      "services.item4.title": "Fret & logistique internationale",
      "services.item4.body": "Transport maritime et aérien coordonné de bout en bout, jusqu'au port d'Abidjan ou à votre site.",
      "services.item5.title": "Documentation d'export & douane",
      "services.item5.body": "Certificats d'origine, factures commerciales et dossiers douaniers préparés pour un dédouanement sans retard.",
      "services.item6.title": "Facture unique, un seul contact",
      "services.item6.body": "Un devis, une commande, une facture, quel que soit le nombre de fournisseurs impliqués derrière la scène.",

      "process.eyebrow": "Notre méthode",
      "process.title": "Comment ça marche",
      "process.lead": "Cinq étapes claires entre votre besoin et la pièce livrée sur site.",
      "process.step1.title": "Envoyez votre besoin",
      "process.step1.body": "Référence, plan technique ou simple photo, via le formulaire, WhatsApp ou email.",
      "process.step2.title": "Sourcing & vérification",
      "process.step2.body": "Nous identifions des fournisseurs certifiés aux États-Unis et en Europe.",
      "process.step3.title": "Devis & validation",
      "process.step3.body": "Devis chiffré et transparent sous 48h, coût total livré inclus.",
      "process.step4.title": "Contrôle & expédition",
      "process.step4.body": "Inspection qualité, documentation d'export et fret organisés.",
      "process.step5.title": "Livraison & facture unique",
      "process.step5.body": "Suivi jusqu'à Abidjan ou votre site, avec une seule facture consolidée.",

      "industries.eyebrow": "Secteurs prioritaires",
      "industries.title": "Nous connaissons vos contraintes terrain",
      "industries.oil.title": "Oil & Gas",
      "industries.oil.body": "Vannes, brides et instrumentation conformes aux normes API et ASME pour l'exploration, le raffinage et le midstream, livrées avec les certificats exigés par vos audits.",
      "industries.agro.title": "Agro-industrie",
      "industries.agro.body": "Pièces hydrauliques, pneumatiques et de process pour vos lignes de transformation, sourcées pour limiter les arrêts de production coûteux.",

      "contact.eyebrow": "Parlons de votre besoin",
      "contact.title": "Demandez votre devis",
      "contact.lead": "Décrivez la pièce recherchée. Nous revenons vers vous avec un devis chiffré sous 48h.",
      "contact.office1.title": "Salt Lake City, USA",
      "contact.office1.body": "Siège & sourcing fournisseurs",
      "contact.office2.title": "Abidjan, Côte d'Ivoire",
      "contact.office2.body": "Équipe locale & relation client",
      "contact.direct.title": "Contact direct",

      "form.firstName": "Prénom *",
      "form.lastName": "Nom *",
      "form.company": "Entreprise",
      "form.phone": "Téléphone",
      "form.email": "Email *",
      "form.category.placeholder": "Sélectionnez une catégorie",
      "form.category.opt1": "Vannes",
      "form.category.opt2": "Instrumentation",
      "form.category.opt3": "Hydraulique",
      "form.category.opt4": "Pneumatique",
      "form.category.opt5": "Autre / non listé",
      "form.category.label": "Catégorie de pièce",
      "form.message": "Référence, spécifications ou détails du besoin *",
      "form.submitWhatsapp": "Envoyer via WhatsApp",
      "form.submitEmail": "Envoyer par email",
      "form.note": "Champs requis marqués d'un *. Nous répondons généralement sous 48h ouvrées.",

      "footer.tagline": "Connecter les industries, bâtir l'avenir.",
      "footer.navTitle": "Navigation",
      "footer.contactTitle": "Nous contacter",
      "footer.ctaTitle": "Un besoin urgent ?",
      "footer.ctaBody": "Envoyez-nous votre référence, nous revenons vers vous sous 48h.",
      "footer.rights": "Tous droits réservés."
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.catalogue": "Catalog",
      "nav.services": "Services",
      "nav.process": "How It Works",
      "nav.industries": "Industries",
      "nav.contact": "Contact",
      "nav.cta": "Request a Quote",

      "hero.eyebrow": "U.S. ↔ Africa Industrial Sourcing",
      "hero.title": "Connecting Industries. Building Futures.",
      "hero.sub": "Continex Solutions sources the certified industrial parts you can't find locally: valves, flanges, hydraulics, pneumatics, instrumentation. We manage everything from quote to delivery.",
      "hero.cta1": "Request a Quote",
      "hero.cta2": "View the Catalog",
      "hero.locations": "Salt Lake City, USA / Abidjan, Côte d'Ivoire",

      "trust.item1": "Certified U.S. & EU Suppliers",
      "trust.item2": "Quality Checked Before Shipment",
      "trust.item3": "One Partner, One Invoice",
      "trust.item4": "Bilingual FR / EN Support",

      "stats.item1": "Americas and Africa connected",
      "stats.item2": "Average turnaround for a priced quote",
      "stats.item3": "Industrial part categories sourced",
      "stats.item4": "Of parts inspected before shipment",

      "about.eyebrow": "Our Story",
      "about.title": "The bridge between African industry and American suppliers",
      "about.lead": "Continex isn't just a parts supplier. We're the bridge between two continents. What we really sell is trust.",
      "about.body": "Based in Salt Lake City with a team on the ground in Abidjan, we remove the risk, distance and uncertainty that weigh on every international industrial purchase. When a certified part can't be found locally, we source it from a vetted U.S. or European supplier, inspect it and deliver it, under one contract and one invoice.",
      "about.point1": "Vetted suppliers, KYC/AML compliance and international standards",
      "about.point2": "Negotiated pricing and transparent landed cost, no surprises",
      "about.point3": "One point of contact, from first call to delivery",
      "about.founder": "20 years of experience in international industrial trade.",

      "cat.eyebrow": "What We Source",
      "cat.title": "Industrial Parts Catalog",
      "cat.lead": "High-demand components, sourced from certified U.S. and European manufacturers, for oil & gas and agro-processing.",
      "cat.group1.title": "Valves",
      "cat.group1.body": "Gate, ball and safety valves, plus thermowells for temperature measurement, certified for your most demanding process environments.",
      "cat.group1.p1": "Gate Valve",
      "cat.group1.p2": "Ball Valve",
      "cat.group1.p3": "Pressure-Relief Valve (PSV)",
      "cat.group1.p4": "Thermowells",
      "cat.group2.title": "Instrumentation",
      "cat.group2.body": "Motorized valves, flow meters, and level and pressure transmitters, for precise and reliable control of your production lines.",
      "cat.group2.p1": "Actuated Valve",
      "cat.group2.p2": "Flow Meter",
      "cat.group2.p3": "Level Transmitter",
      "cat.group2.p4": "Pressure Transmitter",
      "cat.group3.title": "Hydraulics",
      "cat.group3.body": "Hydraulic, centrifugal and gear pumps, plus bearings and repair kits to limit production downtime.",
      "cat.group3.p1": "Hydraulic Pump",
      "cat.group3.p2": "Centrifugal Pump",
      "cat.group3.p3": "Gear Pump",
      "cat.group3.p4": "Bearings & Repair Kits",
      "cat.group4.title": "Pneumatics",
      "cat.group4.body": "Actuators, fittings, directional control valves and FRL units (filter-regulator-lubricator), for reliable pneumatic circuits.",
      "cat.group4.p1": "Pneumatic Actuators",
      "cat.group4.p2": "Fittings & Tubing",
      "cat.group4.p3": "Directional Control Valves",
      "cat.group4.p4": "FRL Units",
      "cat.cta": "Discuss Your Requirement",

      "services.eyebrow": "Our Promise",
      "services.title": "From quote to delivery, without the friction",
      "services.lead": "One partner handles every step. You'll never have to coordinate six different suppliers.",
      "services.item1.title": "Supplier Search & Vetting",
      "services.item1.body": "Identifying certified manufacturers across the U.S. and Europe for every reference, however specific.",
      "services.item2.title": "Negotiation & Competitive Pricing",
      "services.item2.body": "Volume and long-term supplier relationships for an optimized total cost, without compromising quality.",
      "services.item3.title": "Quality Control & Certification",
      "services.item3.body": "Pre-shipment inspection and material certificate verification on every order.",
      "services.item4.title": "Freight & International Logistics",
      "services.item4.body": "Ocean and air freight coordinated end-to-end, through the Port of Abidjan or straight to your site.",
      "services.item5.title": "Export Documentation & Customs",
      "services.item5.body": "Certificates of origin, commercial invoices and customs paperwork prepared for clearance without delay.",
      "services.item6.title": "One Invoice, One Point of Contact",
      "services.item6.body": "One quote, one order, one invoice, however many suppliers are involved behind the scenes.",

      "process.eyebrow": "Our Method",
      "process.title": "How It Works",
      "process.lead": "Five clear steps between your request and the part delivered on site.",
      "process.step1.title": "Send Your Request",
      "process.step1.body": "Part number, technical drawing or a simple photo, via the form, WhatsApp or email.",
      "process.step2.title": "Sourcing & Vetting",
      "process.step2.body": "We identify certified suppliers across the United States and Europe.",
      "process.step3.title": "Quote & Approval",
      "process.step3.body": "A transparent, priced quote within 48 hours, landed cost included.",
      "process.step4.title": "QC & Shipping",
      "process.step4.body": "Quality inspection, export documentation and freight arranged.",
      "process.step5.title": "Delivery & One Invoice",
      "process.step5.body": "Tracked through to Abidjan or your site, on one consolidated invoice.",

      "industries.eyebrow": "Priority Sectors",
      "industries.title": "We know the constraints you work under",
      "industries.oil.title": "Oil & Gas",
      "industries.oil.body": "Valves, flanges and instrumentation to API and ASME standards for exploration, refining and midstream, delivered with the certificates your audits require.",
      "industries.agro.title": "Agro-Processing",
      "industries.agro.body": "Hydraulic, pneumatic and process parts for your processing lines, sourced to limit costly production downtime.",

      "contact.eyebrow": "Let's Talk",
      "contact.title": "Request Your Quote",
      "contact.lead": "Describe the part you need. We'll come back with a priced quote within 48 hours.",
      "contact.office1.title": "Salt Lake City, USA",
      "contact.office1.body": "Headquarters & supplier sourcing",
      "contact.office2.title": "Abidjan, Côte d'Ivoire",
      "contact.office2.body": "Local team & client relations",
      "contact.direct.title": "Direct Contact",

      "form.firstName": "First Name *",
      "form.lastName": "Last Name *",
      "form.company": "Company",
      "form.phone": "Phone",
      "form.email": "Email *",
      "form.category.placeholder": "Select a category",
      "form.category.opt1": "Valves",
      "form.category.opt2": "Instrumentation",
      "form.category.opt3": "Hydraulics",
      "form.category.opt4": "Pneumatics",
      "form.category.opt5": "Other / Not Listed",
      "form.category.label": "Part Category",
      "form.message": "Part number, specs or details of your request *",
      "form.submitWhatsapp": "Send via WhatsApp",
      "form.submitEmail": "Send by Email",
      "form.note": "Required fields marked *. We typically respond within 48 business hours.",

      "footer.tagline": "Connecting industries, building futures.",
      "footer.navTitle": "Navigation",
      "footer.contactTitle": "Get in Touch",
      "footer.ctaTitle": "Urgent request?",
      "footer.ctaBody": "Send us your part reference. We'll be in touch within 48 hours.",
      "footer.rights": "All rights reserved."
    }
  };

  var STORAGE_KEY = "continex-lang";
  var currentLang = localStorage.getItem(STORAGE_KEY) || "fr";

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    var dict = DICT[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-opt").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });

    document.title = lang === "fr"
      ? "Continex Solutions · Sourcing industriel USA ↔ Afrique"
      : "Continex Solutions · U.S. ↔ Africa Industrial Sourcing";

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLangToggle() {
    var toggle = document.getElementById("langToggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      applyLang(currentLang === "fr" ? "en" : "fr");
    });
    applyLang(currentLang);
  }

  /* ======================================================================
     HEADER SCROLL STATE
     ====================================================================== */
  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ======================================================================
     MOBILE NAV
     ====================================================================== */
  function initMobileNav() {
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("mobileNav");
    if (!toggle || !nav) return;

    function closeNav() {
      toggle.classList.remove("is-open");
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function openNav() {
      toggle.classList.add("is-open");
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) closeNav(); else openNav();
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  /* ======================================================================
     SCROLL REVEAL
     ====================================================================== */
  function initReveal() {
    var targets = document.querySelectorAll(
      ".section-head, .stat, .cat-row, .service-card, .process-step, .industry-card, .about-content, .about-media, .contact-form-col, .contact-side-col"
    );
    targets.forEach(function (el) { el.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ======================================================================
     QUOTE FORM — WhatsApp deep link + email fallback
     ====================================================================== */
  function buildMessage() {
    var get = function (id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : "";
    };
    var isEn = currentLang === "en";
    var fields = [
      [isEn ? "Name" : "Nom", (get("firstName") + " " + get("lastName")).trim()],
      [isEn ? "Company" : "Entreprise", get("company")],
      [isEn ? "Email" : "Email", get("email")],
      [isEn ? "Phone" : "Téléphone", get("phone")],
      [isEn ? "Category" : "Catégorie", get("category")],
      [isEn ? "Request" : "Besoin", get("message")]
    ];
    var intro = isEn
      ? "New quote request from the Continex website:"
      : "Nouvelle demande de devis depuis le site Continex :";
    var lines = fields.filter(function (f) { return f[1]; })
      .map(function (f) { return f[0] + ": " + f[1]; });
    return intro + "\n\n" + lines.join("\n");
  }

  function initQuoteForm() {
    var form = document.getElementById("quoteForm");
    if (!form) return;

    var submitButtons = form.querySelectorAll("button[type=submit]");
    var lastAction = "whatsapp";
    submitButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        lastAction = btn.getAttribute("data-action") || "whatsapp";
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var message = buildMessage();

      if (lastAction === "email") {
        var subject = currentLang === "en" ? "Quote Request · Continex" : "Demande de devis · Continex";
        var mailto = "mailto:" + CONFIG.email +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(message);
        window.location.href = mailto;
      } else {
        var waUrl = "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);
        window.open(waUrl, "_blank", "noopener");
      }
    });
  }

  function initDirectWhatsappLink() {
    var link = document.getElementById("directWhatsappLink");
    if (!link) return;
    link.href = "https://wa.me/" + CONFIG.whatsappNumber;
  }

  /* ======================================================================
     MISC
     ====================================================================== */
  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initHeaderScroll();
    initMobileNav();
    initReveal();
    initQuoteForm();
    initDirectWhatsappLink();
    initYear();
  });
})();
