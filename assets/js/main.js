const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const themeToggle = document.querySelector("#themeToggle");
const repoGrid = document.querySelector("#repoGrid");
const repoStatus = document.querySelector("#repoStatus");
const contactForm = document.querySelector("#contactForm");
const formResult = document.querySelector("#formResult");

const fallbackRepos = [
  {
    name: "MY_portfolio",
    description: "Personal portfolio website built with HTML, CSS, and JavaScript.",
    html_url: "https://github.com/Ritamnandy/MY_portfolio",
    language: "HTML",
    updated_at: "2026-05-26T00:00:00Z",
    stargazers_count: 0
  },
  {
    name: "QUIZ_APP",
    description: "Interactive quiz app with category and difficulty practice.",
    html_url: "https://github.com/Ritamnandy/QUIZ_APP",
    language: "JavaScript",
    updated_at: "2026-05-26T00:00:00Z",
    stargazers_count: 0
  },
  {
    name: "Currency__converter",
    description: "Currency conversion project focused on practical UI flow.",
    html_url: "https://github.com/Ritamnandy/Currency__converter",
    language: "JavaScript",
    updated_at: "2026-05-26T00:00:00Z",
    stargazers_count: 0
  }
];

const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("theme", theme);
};

const savedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(savedTheme || preferredTheme);

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});

themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
});

const formatDate = (value) => {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
};

const escapeHtml = (value) => {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

const renderRepos = (repos, isFallback = false) => {
  const visibleRepos = repos
    .filter((repo) => !repo.fork)
    .slice(0, 6);

  repoGrid.innerHTML = visibleRepos
    .map((repo) => {
      const description = repo.description || "Frontend project from Ritam Nandy's GitHub profile.";
      const language = repo.language || "Code";
      return `
        <article class="repo-card">
          <h3>${escapeHtml(repo.name)}</h3>
          <p>${escapeHtml(description)}</p>
          <div class="repo-meta">
            <span><i class="fa-solid fa-code"></i> ${escapeHtml(language)}</span>
            <span><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fa-solid fa-clock"></i> ${formatDate(repo.updated_at)}</span>
          </div>
          <p><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">View repository</a></p>
        </article>
      `;
    })
    .join("");

  repoStatus.textContent = isFallback
    ? "Showing featured repositories while live GitHub data is unavailable."
    : `Showing ${visibleRepos.length} recently updated public repositories.`;
};

const loadGitHubRepos = async () => {
  try {
    const response = await fetch("https://api.github.com/users/Ritamnandy/repos?sort=updated&per_page=6");
    if (!response.ok) {
      throw new Error("GitHub request failed");
    }
    const repos = await response.json();
    renderRepos(repos);
  } catch (error) {
    renderRepos(fallbackRepos, true);
  }
};

loadGitHubRepos();

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);
  const payload = JSON.stringify(Object.fromEntries(formData));
  formResult.textContent = "Sending your message...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: payload
    });
    const data = await response.json();
    formResult.textContent = response.ok ? "Message sent successfully." : data.message || "Unable to send message.";
    if (response.ok) {
      contactForm.reset();
    }
  } catch (error) {
    formResult.textContent = "Network error. Please try again later.";
  }
});
