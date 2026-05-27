const githubUser = "Ritamnandy";

const projects = [
  {
    title: "Quiz App",
    category: "JavaScript",
    image: "assets/images/quiZ.png",
    description: "Interactive quiz experience with category-style question flow, score tracking, and responsive UI.",
    demo: "https://ritamnandy.github.io/QUIZ_APP/",
    repo: "https://github.com/Ritamnandy/QUIZ_APP",
    stack: [ "JavaScript", "HTML", "CSS" ]
  },
  {
    title: "Currency Converter",
    category: "API",
    image: "assets/images/currency.png",
    description: "API-ready currency conversion interface designed for fast, practical calculations across devices.",
    demo: "https://ritamnandy.github.io/Currency__converter/",
    repo: "https://github.com/Ritamnandy/Currency__converter",
    stack: [ "JavaScript", "REST API", "CSS" ]
  },
  {
    title: "Rock Paper Scissors",
    category: "Game",
    image: "assets/images/rock.png",
    description: "A browser game with clean interactions, simple scoring logic, and polished visual feedback.",
    demo: "https://ritamnandy.github.io/Rock__Paper__Scissors__Game/",
    repo: "https://github.com/Ritamnandy/Rock__Paper__Scissors__Game",
    stack: [ "JavaScript", "Game Logic", "HTML" ]
  },
  {
    title: "Travel Website",
    category: "Frontend",
    image: "assets/images/travel.png",
    description: "Responsive travel landing experience with destination cards, visual hierarchy, and modern layout.",
    demo: "https://ritamnandy.github.io/web_travel/",
    repo: "https://github.com/Ritamnandy/web_travel",
    stack: [ "HTML", "CSS", "Responsive" ]
  },
  {
    title: "Memory Game",
    category: "Game",
    image: "assets/images/memory.png",
    description: "Card matching game focused on concentration, lightweight state handling, and replayable logic.",
    demo: "https://ritamnandy.github.io/memory_game/",
    repo: "https://github.com/Ritamnandy/memory_game",
    stack: [ "JavaScript", "CSS", "Game UI" ]
  },
  {
    title: "Stellarium Demo",
    category: "Frontend",
    image: "assets/images/web.png",
    description: "A responsive frontend build practicing premium composition, spacing, and visual detail.",
    demo: "https://ritamnandy.github.io/stellarium_demo/",
    repo: "https://github.com/Ritamnandy/stellarium_demo",
    stack: [ "HTML", "CSS", "JavaScript" ]
  },
  {
    title: "Student Management System",
    category: "Full Stack",
    image: "",
    description: "A structured management app for handling student records, organized data, and admin-style workflows.",
    demo: "https://ritamnandy.github.io/Student-Management-System/",
    repo: "https://github.com/Ritamnandy/Student-Management-System",
    stack: [ "JavaScript", "Node.js", "CRUD" ]
  },
  {
    title: "Expense Tracker",
    category: "JavaScript",
    image: "",
    description: "A personal finance tracker for recording expenses, reviewing totals, and keeping spending organized.",
    demo: "https://ritamnandy.github.io/Expense-Tracker/",
    repo: "https://github.com/Ritamnandy/Expense-Tracker",
    stack: [ "JavaScript", "Local Storage", "CSS" ]
  },
  {
    title: "Weather App",
    category: "API",
    image: "",
    description: "A weather dashboard that connects to live weather data and presents current conditions clearly.",
    demo: "https://ritamnandy.github.io/Weatherapp/",
    repo: "https://github.com/Ritamnandy/Weatherapp",
    stack: [ "JavaScript", "REST API", "Weather Data" ]
  },
  {
    title: "Instraclone",
    category: "Frontend",
    image: "",
    description: "A social media inspired interface focused on feed layout, visual cards, and responsive UI details.",
    demo: "https://ritamnandy.github.io/instraclone/",
    repo: "https://github.com/Ritamnandy/instraclone",
    stack: [ "HTML", "CSS", "JavaScript" ]
  },
  {
    title: "AI Chat App",
    category: "Full Stack",
    image: "",
    description: "A chat-style application concept built around conversational UI, message state, and backend-ready flow.",
    demo: "https://ritamnandy.github.io/AI-Chat-App/",
    repo: "https://github.com/Ritamnandy/AI-Chat-App",
    stack: [ "JavaScript", "API", "Chat UI" ]
  },
  {
    title: "Notes App",
    category: "JavaScript",
    image: "",
    description: "A clean notes app for writing, organizing, and managing quick ideas with a simple user flow.",
    demo: "https://ritamnandy.github.io/Notes-app/",
    repo: "https://github.com/Ritamnandy/Notes-app",
    stack: [ "JavaScript", "Local Storage", "Productivity" ]
  }
];

const skillBarsData = [
  { name: "Flutter App UI", level: 50 },
  { name: "Dart Development", level: 82 },
  { name: "JavaScript Interfaces", level: 68 },
  { name: "Node.js + Express.js", level: 60 },
  { name: "REST API Development", level: 50 }
];

const skillCardsData = [
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "App Frontends",
    text: "Flutter, Dart, responsive layouts, reusable UI thinking, and smooth app flows."
  },
  {
    icon: "fa-brands fa-node-js",
    title: "Backend APIs",
    text: "Node.js, Express.js, REST endpoints, JSON handling, and service-ready architecture."
  },
  {
    icon: "fa-solid fa-code-branch",
    title: "GitHub Workflow",
    text: "Clean repositories, public demos, source code organization, and continuous improvement."
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Modern UI Motion",
    text: "Glassmorphism, hover states, animated reveals, typing effects, and polished interactions."
  }
];

const fallbackRepos = [
  {
    name: "MY_portfolio",
    description: "Modern full-stack developer portfolio built with HTML, CSS, and JavaScript.",
    html_url: "https://github.com/Ritamnandy/MY_portfolio",
    language: "HTML",
    updated_at: "2026-05-26T00:00:00Z",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "QUIZ_APP",
    description: "Interactive quiz app with category-style question flow and score handling.",
    html_url: "https://github.com/Ritamnandy/QUIZ_APP",
    language: "JavaScript",
    updated_at: "2026-05-26T00:00:00Z",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "Currency__converter",
    description: "Currency conversion tool with a practical responsive interface.",
    html_url: "https://github.com/Ritamnandy/Currency__converter",
    language: "JavaScript",
    updated_at: "2026-05-26T00:00:00Z",
    stargazers_count: 0,
    forks_count: 0
  }
];

const menuToggle = document.querySelector( "#menuToggle" );
const navLinks = document.querySelector( "#navLinks" );
const themeToggle = document.querySelector( "#themeToggle" );
const loader = document.querySelector( "#loader" );
const typingText = document.querySelector( "#typingText" );
const skillBars = document.querySelector( "#skillBars" );
const skillCards = document.querySelector( "#skillCards" );
const projectGrid = document.querySelector( "#projectGrid" );
const projectFilters = document.querySelector( "#projectFilters" );
const repoGrid = document.querySelector( "#repoGrid" );
const repoStatus = document.querySelector( "#repoStatus" );
const repoCount = document.querySelector( "#repoCount" );
const heroRepoCount = document.querySelector( "#heroRepoCount" );
const starCount = document.querySelector( "#starCount" );
const forkCount = document.querySelector( "#forkCount" );
const topLanguage = document.querySelector( "#topLanguage" );
const languageList = document.querySelector( "#languageList" );
const languageSummary = document.querySelector( "#languageSummary" );
const contactForm = document.querySelector( "#contactForm" );
const formResult = document.querySelector( "#formResult" );
const cursorDot = document.querySelector( "#cursorDot" );
const cursorRing = document.querySelector( "#cursorRing" );
const particleCanvas = document.querySelector( "#particleCanvas" );

const prefersReducedMotion = window.matchMedia( "(prefers-reduced-motion: reduce)" ).matches;

const escapeHtml = ( value ) => String( value )
  .replaceAll( "&", "&amp;" )
  .replaceAll( "<", "&lt;" )
  .replaceAll( ">", "&gt;" )
  .replaceAll( '"', "&quot;" )
  .replaceAll( "'", "&#039;" );

const formatDate = ( value ) => new Intl.DateTimeFormat( "en", {
  month: "short",
  day: "numeric",
  year: "numeric"
} ).format( new Date( value ) );

const setTheme = ( theme ) =>
{
  const isLight = theme === "light";
  document.body.classList.toggle( "light-theme", isLight );
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  themeToggle.setAttribute( "aria-label", isLight ? "Switch to dark theme" : "Switch to light theme" );
  localStorage.setItem( "theme", theme );
};

const savedTheme = localStorage.getItem( "theme" );
const preferredTheme = window.matchMedia( "(prefers-color-scheme: light)" ).matches ? "light" : "dark";
setTheme( savedTheme || preferredTheme );

window.addEventListener( "load", () =>
{
  window.setTimeout( () =>
  {
    document.body.classList.add( "loaded" );
    document.body.classList.remove( "is-loading" );
    loader?.setAttribute( "aria-hidden", "true" );
  }, 450 );
} );

menuToggle.addEventListener( "click", () =>
{
  const isOpen = navLinks.classList.toggle( "active" );
  menuToggle.setAttribute( "aria-expanded", String( isOpen ) );
  document.body.classList.toggle( "menu-open", isOpen );
} );

navLinks.addEventListener( "click", ( event ) =>
{
  if ( event.target.matches( "a" ) )
  {
    navLinks.classList.remove( "active" );
    menuToggle.setAttribute( "aria-expanded", "false" );
    document.body.classList.remove( "menu-open" );
  }
} );

themeToggle.addEventListener( "click", () =>
{
  setTheme( document.body.classList.contains( "light-theme" ) ? "dark" : "light" );
} );

const renderSkills = () =>
{
  skillBars.innerHTML = skillBarsData.map( ( skill ) => `
    <div class="skill-item">
      <div class="skill-label">
        <strong>${ escapeHtml( skill.name ) }</strong>
        <span>${ skill.level }%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="--level: ${ skill.level }%"></div>
      </div>
    </div>
  `).join( "" );

  skillCards.innerHTML = skillCardsData.map( ( skill ) => `
    <article class="skill-card glass-card">
      <i class="${ escapeHtml( skill.icon ) }"></i>
      <h3>${ escapeHtml( skill.title ) }</h3>
      <p>${ escapeHtml( skill.text ) }</p>
    </article>
  `).join( "" );
};

const renderProjectFilters = () =>
{
  const categories = [ "All", ...new Set( projects.map( ( project ) => project.category ) ) ];
  projectFilters.innerHTML = categories.map( ( category ) => `
    <button class="filter-button ${ category === "All" ? "active" : "" }" type="button" data-filter="${ escapeHtml( category ) }">
      ${ escapeHtml( category ) }
    </button>
  `).join( "" );
};

const renderProjects = ( filter = "All" ) =>
{
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter( ( project ) => project.category === filter );

  projectGrid.innerHTML = filteredProjects.map( ( project, index ) => `
    <article class="project-card glass-card reveal visible" style="transition-delay: ${ index * 55 }ms">
      <div class="project-body">
        <span class="project-kicker">${ escapeHtml( project.category ) }</span>
        <h3>${ escapeHtml( project.title ) }</h3>
        <p>${ escapeHtml( project.description ) }</p>
        <div class="tag-list">
          ${ project.stack.map( ( tag ) => `<span>${ escapeHtml( tag ) }</span>` ).join( "" ) }
        </div>
        <div class="project-actions">
          <a class="btn primary" href="${ escapeHtml( project.demo ) }" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-up-right-from-square"></i> Live Demo
          </a>
          <a class="btn ghost" href="${ escapeHtml( project.repo ) }" target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </article>
  `).join( "" );
};

projectFilters.addEventListener( "click", ( event ) =>
{
  const button = event.target.closest( ".filter-button" );
  if ( !button ) return;

  projectFilters.querySelectorAll( ".filter-button" ).forEach( ( item ) => item.classList.remove( "active" ) );
  button.classList.add( "active" );
  renderProjects( button.dataset.filter );
} );

const setupTyping = () =>
{
  if ( prefersReducedMotion ) return;

  const words = [ "Flutter apps", "Dart interfaces", "JavaScript products", "Node.js APIs", "Express.js backends" ];
  let wordIndex = 0;
  let letterIndex = 0;
  let deleting = false;

  const tick = () =>
  {
    const word = words[ wordIndex ];
    typingText.textContent = deleting
      ? word.slice( 0, letterIndex - 1 )
      : word.slice( 0, letterIndex + 1 );

    letterIndex += deleting ? -1 : 1;

    if ( !deleting && letterIndex === word.length )
    {
      deleting = true;
      window.setTimeout( tick, 1300 );
      return;
    }

    if ( deleting && letterIndex === 0 )
    {
      deleting = false;
      wordIndex = ( wordIndex + 1 ) % words.length;
    }

    window.setTimeout( tick, deleting ? 45 : 85 );
  };

  tick();
};

const setupReveal = () =>
{
  const revealItems = document.querySelectorAll( ".reveal" );

  if ( prefersReducedMotion || !( "IntersectionObserver" in window ) )
  {
    revealItems.forEach( ( item ) => item.classList.add( "visible" ) );
    return;
  }

  const observer = new IntersectionObserver( ( entries ) =>
  {
    entries.forEach( ( entry ) =>
    {
      if ( entry.isIntersecting )
      {
        entry.target.classList.add( "visible" );
        observer.unobserve( entry.target );
      }
    } );
  }, { threshold: 0.16 } );

  revealItems.forEach( ( item ) => observer.observe( item ) );
};

const setupActiveNavigation = () =>
{
  const sections = document.querySelectorAll( "main section[id]" );
  const links = navLinks.querySelectorAll( "a" );

  const observer = new IntersectionObserver( ( entries ) =>
  {
    entries.forEach( ( entry ) =>
    {
      if ( !entry.isIntersecting ) return;
      links.forEach( ( link ) =>
      {
        link.classList.toggle( "active", link.getAttribute( "href" ) === `#${ entry.target.id }` );
      } );
    } );
  }, { rootMargin: "-45% 0px -50% 0px" } );

  sections.forEach( ( section ) => observer.observe( section ) );
};

const renderRepos = ( repos, isFallback = false ) =>
{
  const visibleRepos = repos
    .filter( ( repo ) => !repo.fork )
    .slice( 0, 6 );

  repoGrid.innerHTML = visibleRepos.map( ( repo ) => `
    <article class="repo-card glass-card">
      <h3>${ escapeHtml( repo.name ) }</h3>
      <p>${ escapeHtml( repo.description || "Public repository from Ritam Nandy's GitHub profile." ) }</p>
      <div class="repo-meta">
        <span><i class="fa-solid fa-code"></i> ${ escapeHtml( repo.language || "Code" ) }</span>
        <span><i class="fa-solid fa-star"></i> ${ repo.stargazers_count }</span>
        <span><i class="fa-solid fa-code-fork"></i> ${ repo.forks_count || 0 }</span>
        <span><i class="fa-solid fa-clock"></i> ${ formatDate( repo.updated_at ) }</span>
      </div>
      <a href="${ escapeHtml( repo.html_url ) }" target="_blank" rel="noreferrer">View repository <i class="fa-solid fa-arrow-right"></i></a>
    </article>
  `).join( "" );

  repoStatus.textContent = isFallback
    ? "Showing featured repositories while live GitHub data is unavailable."
    : `Showing ${ visibleRepos.length } recently updated public repositories.`;
};

const renderLanguageBars = ( languageCounts ) =>
{
  const entries = Object.entries( languageCounts ).sort( ( a, b ) => b[ 1 ] - a[ 1 ] ).slice( 0, 5 );
  const total = entries.reduce( ( sum, [ , count ] ) => sum + count, 0 ) || 1;

  languageList.innerHTML = entries.map( ( [ language, count ] ) =>
  {
    const percent = Math.round( ( count / total ) * 100 );
    return `
      <div class="language-row">
        <div class="language-label">
          <strong>${ escapeHtml( language ) }</strong>
          <span>${ percent }%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${ percent }%"></div>
        </div>
      </div>
    `;
  } ).join( "" );

  languageSummary.textContent = entries.length
    ? `Most used public repo languages: ${ entries.map( ( [ language ] ) => language ).join( ", " ) }.`
    : "Language data will appear as public repositories are updated.";
};

const renderGitHubStats = ( repos, profile = null ) =>
{
  const ownRepos = repos.filter( ( repo ) => !repo.fork );
  const languageCounts = ownRepos.reduce( ( counts, repo ) =>
  {
    if ( repo.language ) counts[ repo.language ] = ( counts[ repo.language ] || 0 ) + 1;
    return counts;
  }, {} );
  const [ primaryLanguage = "Code" ] = Object.entries( languageCounts ).sort( ( a, b ) => b[ 1 ] - a[ 1 ] )[ 0 ] || [];
  const stars = ownRepos.reduce( ( total, repo ) => total + repo.stargazers_count, 0 );
  const forks = ownRepos.reduce( ( total, repo ) => total + ( repo.forks_count || 0 ), 0 );
  const publicRepos = profile?.public_repos ?? ownRepos.length;

  repoCount.textContent = publicRepos;
  heroRepoCount.textContent = `${ publicRepos }+`;
  starCount.textContent = stars;
  forkCount.textContent = forks;
  topLanguage.textContent = primaryLanguage;
  renderLanguageBars( languageCounts );
};

const loadGitHubRepos = async () =>
{
  try
  {
    const [ profileResponse, reposResponse ] = await Promise.all( [
      fetch( `https://api.github.com/users/${ githubUser }` ),
      fetch( `https://api.github.com/users/${ githubUser }/repos?sort=updated&per_page=100` )
    ] );

    if ( !reposResponse.ok )
    {
      throw new Error( "GitHub repositories request failed" );
    }

    const [ profile, repos ] = await Promise.all( [
      profileResponse.ok ? profileResponse.json() : Promise.resolve( null ),
      reposResponse.json()
    ] );

    renderGitHubStats( repos, profile );
    renderRepos( repos );
  } catch ( error )
  {
    renderGitHubStats( fallbackRepos );
    renderRepos( fallbackRepos, true );
  }
};

const setupContactForm = () =>
{
  contactForm.addEventListener( "submit", async ( event ) =>
  {
    event.preventDefault();

    if ( !contactForm.checkValidity() )
    {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData( contactForm );
    const payload = JSON.stringify( Object.fromEntries( formData ) );
    formResult.textContent = "Sending your message...";

    try
    {
      const response = await fetch( "https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: payload
      } );
      const data = await response.json();
      formResult.textContent = response.ok ? "Message sent successfully." : data.message || "Unable to send message.";
      if ( response.ok ) contactForm.reset();
    } catch ( error )
    {
      formResult.textContent = "Network error. Please try again later.";
    }
  } );
};

const setupCursor = () =>
{
  if ( prefersReducedMotion || window.matchMedia( "(max-width: 700px)" ).matches ) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener( "pointermove", ( event ) =>
  {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";
    cursorDot.style.transform = `translate(${ mouseX }px, ${ mouseY }px) translate(-50%, -50%)`;
  } );

  document.querySelectorAll( "a, button, input, textarea" ).forEach( ( element ) =>
  {
    element.addEventListener( "mouseenter", () => cursorRing.classList.add( "cursor-active" ) );
    element.addEventListener( "mouseleave", () => cursorRing.classList.remove( "cursor-active" ) );
  } );

  const animateRing = () =>
  {
    ringX += ( mouseX - ringX ) * 0.16;
    ringY += ( mouseY - ringY ) * 0.16;
    cursorRing.style.transform = `translate(${ ringX }px, ${ ringY }px) translate(-50%, -50%)`;
    requestAnimationFrame( animateRing );
  };

  animateRing();
};

const setupParticles = () =>
{
  if ( prefersReducedMotion || !particleCanvas.getContext ) return;

  const context = particleCanvas.getContext( "2d" );
  const particles = [];
  const particleCount = Math.min( 86, Math.floor( window.innerWidth / 18 ) );

  const resize = () =>
  {
    particleCanvas.width = window.innerWidth * window.devicePixelRatio;
    particleCanvas.height = window.innerHeight * window.devicePixelRatio;
    context.setTransform( window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0 );
  };

  const createParticle = () => ( {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: ( Math.random() - 0.5 ) * 0.28,
    vy: ( Math.random() - 0.5 ) * 0.28,
    radius: Math.random() * 1.8 + 0.5
  } );

  for ( let index = 0; index < particleCount; index += 1 )
  {
    particles.push( createParticle() );
  }

  const animate = () =>
  {
    context.clearRect( 0, 0, window.innerWidth, window.innerHeight );
    context.fillStyle = document.body.classList.contains( "light-theme" )
      ? "rgba(3, 105, 161, 0.42)"
      : "rgba(56, 189, 248, 0.42)";

    particles.forEach( ( particle ) =>
    {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if ( particle.x < 0 || particle.x > window.innerWidth ) particle.vx *= -1;
      if ( particle.y < 0 || particle.y > window.innerHeight ) particle.vy *= -1;

      context.beginPath();
      context.arc( particle.x, particle.y, particle.radius, 0, Math.PI * 2 );
      context.fill();
    } );

    requestAnimationFrame( animate );
  };

  resize();
  animate();
  window.addEventListener( "resize", resize );
};

renderSkills();
renderProjectFilters();
renderProjects();
setupTyping();
setupReveal();
setupActiveNavigation();
setupContactForm();
setupCursor();
setupParticles();
loadGitHubRepos();
