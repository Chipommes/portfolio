/* ===== PROJECT DATA ===== */
const projects = [
  {
    cat: "business",
    icon: "🏢",
    bg: "bg-business",
    badge: "badge-business",
    label: "Business",
    title: "Nexara Consulting",
    desc: "Corporate site for a Lagos-based strategy consultancy. Includes team profiles, service pages, case studies, and a Gravity Forms-powered intake form with CRM integration.",
    tags: ["ACF Pro", "Elementor", "WPML", "Gravity Forms"],
    link: "#"
  },
  {
    cat: "ecommerce",
    icon: "🛒",
    bg: "bg-ecommerce",
    badge: "badge-ecommerce",
    label: "E-commerce",
    title: "Lagos Fresh Market",
    desc: "WooCommerce grocery store with configurable delivery zones, product variant management, Paystack payment gateway, and a custom reorder flow for returning customers.",
    tags: ["WooCommerce", "Paystack", "PHP 8", "YITH"],
    link: "#"
  },
  {
    cat: "blog",
    icon: "✍️",
    bg: "bg-blog",
    badge: "badge-blog",
    label: "Blog",
    title: "The Fintech Pulse",
    desc: "Editorial fintech blog with custom post types for news, analysis, and opinion. Includes author profiles, newsletter signup via Mailchimp, and a REST API-powered search.",
    tags: ["CPT UI", "Mailchimp", "REST API", "Gutenberg"],
    link: "#"
  },
  {
    cat: "landing",
    icon: "🚀",
    bg: "bg-landing",
    badge: "badge-landing",
    label: "Landing page",
    title: "CoachFlow Launch Page",
    desc: "High-converting sales page for a coaching programme. A/B tested two CTA sections using Google Optimize; improved conversion by 34%. Integrated with Thrivecart checkout.",
    tags: ["Divi", "GTM", "Google Optimize", "Thrivecart"],
    link: "#"
  },
  {
    cat: "theme",
    icon: "🎨",
    bg: "bg-theme",
    badge: "badge-theme",
    label: "Custom theme",
    title: "Slate — FSE Portfolio Theme",
    desc: "Full site editing block theme built from scratch. Ships with a theme.json design system, 12 block patterns, and zero jQuery dependency. Listed on WordPress.org.",
    tags: ["FSE", "theme.json", "Gutenberg", "block patterns"],
    link: "#"
  },
  {
    cat: "business",
    icon: "⚖️",
    bg: "bg-business",
    badge: "badge-business",
    label: "Business",
    title: "Adeyemi Law Chambers",
    desc: "Professional legal website with practice area pages, barrister profiles, a document download portal, and an appointments booking system via Calendly embed.",
    tags: ["ACF", "Elementor", "WPML", "Calendly"],
    link: "#"
  },
  {
    cat: "ecommerce",
    icon: "👗",
    bg: "bg-ecommerce",
    badge: "badge-ecommerce",
    label: "E-commerce",
    title: "Kola Fashion Hub",
    desc: "Fashion boutique with size-guide tooltips, wishlist functionality, and abandoned cart email recovery via Klaviyo. Handles 300+ product SKUs with attribute filtering.",
    tags: ["WooCommerce", "Klaviyo", "YITH Wishlist", "Stripe"],
    link: "#"
  },
  {
    cat: "theme",
    icon: "🔌",
    bg: "bg-theme",
    badge: "badge-theme",
    label: "Custom plugin",
    title: "WP Review Manager",
    desc: "OOP PHP plugin to collect, moderate, and display Google-style reviews on any post type. Admin dashboard built with React. Includes schema markup for rich snippets.",
    tags: ["OOP PHP", "React", "REST API", "Schema.org"],
    link: "#"
  },
  {
    cat: "landing",
    icon: "🎯",
    bg: "bg-landing",
    badge: "badge-landing",
    label: "Landing page",
    title: "LearnAfrica App Launch",
    desc: "Mobile app launch page with countdown timer, waitlist form (800+ sign-ups on launch day), animated feature sections, and embedded demo video.",
    tags: ["Elementor", "MailerLite", "GTM", "Lottie"],
    link: "#"
  },
  {
    cat: "blog",
    icon: "📰",
    bg: "bg-blog",
    badge: "badge-blog",
    label: "Blog",
    title: "Mama Cooks — Food Blog",
    desc: "Recipe and lifestyle blog with a custom recipe card plugin, ingredient scaling, print-optimised stylesheets, and affiliate link management via ThirstyAffiliates.",
    tags: ["Custom plugin", "ThirstyAffiliates", "Schema", "PWA"],
    link: "#"
  }
];

/* ===== RENDER CARDS ===== */
function renderCards(cat) {
  const grid = document.getElementById("projects-grid");
  const filtered = cat === "all" ? projects : projects.filter(p => p.cat === cat);

  grid.innerHTML = filtered.map((p, i) => `
    <article class="project-card" style="animation-delay: ${i * 0.05}s;">
      <div class="card-thumb ${p.bg}">${p.icon}</div>
      <div class="card-content">
        <span class="card-type-badge ${p.badge}">${p.label}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}</div>
        <a href="${p.link}" class="card-link" aria-label="View ${p.title} project">View project</a>
      </div>
    </article>
  `).join("");
}

/* ===== FILTER BUTTONS ===== */
function initFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderCards(btn.dataset.cat);
    });
  });
}

/* ===== MOBILE NAV ===== */
function initNav() {
  const hamburger = document.querySelector(".nav-hamburger");
  const links = document.querySelector(".nav-links");

  if (!hamburger || !links) return;

  hamburger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });

  // Close on link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===== CONTACT FORM ===== */
function initForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("[type=submit]");
    btn.textContent = "Sending…";
    btn.disabled = true;

    // For GitHub Pages: swap the action below with your Formspree/Netlify endpoint
    // e.g. form.action = "https://formspree.io/f/YOURCODE"
    // After testing, remove the e.preventDefault() and submit normally.
    setTimeout(() => {
      btn.textContent = "Message sent ✓";
      btn.style.background = "#16a34a";
      form.reset();
    }, 1200);
  });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderCards("all");
  initFilters();
  initNav();
  initForm();
});
