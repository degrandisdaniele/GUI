const cpuIcon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="logo-icon"
>
  <path d="M12 20v2" />
  <path d="M12 2v2" />
  <path d="M17 20v2" />
  <path d="M17 2v2" />
  <path d="M2 12h2" />
  <path d="M2 17h2" />
  <path d="M2 7h2" />
  <path d="M20 12h2" />
  <path d="M20 17h2" />
  <path d="M20 7h2" />
  <path d="M7 20v2" />
  <path d="M7 2v2" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <rect x="8" y="8" width="8" height="8" rx="1" />
</svg>
`;

const userIcon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="user-icon"
>
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
</svg>
`;

const logOutIcon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="logout-icon"
>
  <path d="m16 17 5-5-5-5" />
  <path d="M21 12H9" />
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
</svg>
`;

function renderLayout() {
    const root = document.getElementById('root');
    root.innerHTML = `
        <header class="sticky top-0 z-50 glass-morphism border-b border-slate-200/60">
            <div class="header-container">
                <a href="#" class="logo-link">
                    <div class="logo-icon-container">
                        ${cpuIcon}
                    </div>
                    <div class="logo-text-container">
                        <h1>Prosthesis Pro</h1>
                        <p>Manufacturing Process Manager</p>
                    </div>
                </a>
                <nav>
                    <a href="#" class="nav-link active">Dashboard</a>
                    <div class="dropdown-menu">
                        <button class="user-button">
                            <div class="user-icon-container">
                                ${userIcon}
                            </div>
                            <span class="user-name">John Doe</span>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">
                                <button class="logout-button">
                                    ${logOutIcon}
                                    Logout
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <!-- Page content will be rendered here -->
        </main>
    `;
}

renderLayout();
