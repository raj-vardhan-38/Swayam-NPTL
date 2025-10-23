document.getElementById('loginBtn').addEventListener('click', function() {
  openModal();
});

const modal = document.getElementById('loginModal');
const backdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const main = document.getElementById('mainContent');
let isLoggedIn = false;
let originalMainHTML = main ? main.innerHTML : '';
let originalNavHTML = '';

function openModal() {
  if (modal) modal.classList.remove('hidden');
}

function closeModal() {
  if (modal) modal.classList.add('hidden');
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (backdrop) {
  backdrop.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = /** @type {HTMLInputElement} */ (document.getElementById('username')).value.trim();
    const password = /** @type {HTMLInputElement} */ (document.getElementById('password')).value;

    const validUser = 'lav';
    const validPass = 'gate2025';

    if (username === validUser && password === validPass) {
      closeModal();
      if (loginBtn) loginBtn.classList.add('hidden');
      isLoggedIn = true;
      ensureLogoutButton();
      removeNavItem('Features');
      renderDashboard({ name: 'Lav Singh' });
    } else {
      alert('Invalid credentials.');
    }
  });
}

function renderDashboard(user) {
  // static helpers and values (fixed across reloads)
  const fmt = (n) => n.toLocaleString('en-IN');
  const totalCandidates = 17845;
  const rank = 9385;
  const overall = 48;
  const accuracy = 48;
  const avgTime = '1.5'; // min/question
  const attempted = 18;
  const lastActive = '23/10/2025';

  const recent = [
    { name: 'GATE CS Mock Test 1', date: '05/10/25', score: '48 / 100', status: 'Attempted' },
    { name: 'GATE CS Mock Test 2', date: '12/10/25', score: '42 / 100', status: 'Attempted' },
    { name: 'Algorithms - Topic Test', date: '15/10/25', score: '—', status: 'Missed' },
    { name: 'DSA Full-Length 1', date: '19/10/25', score: '—', status: 'Missed' },
  ];

  const statusClass = (s) => s === 'Attempted' ? 'success' : s === 'Missed' ? 'danger' : 'neutral';

  const recentRows = recent.map(r => `
      <tr>
        <td>${r.name}</td>
        <td>${r.date}</td>
        <td>${r.score}</td>
        <td><span class="badge ${statusClass(r.status)}">${r.status}</span></td>
      </tr>
  `).join('');

  const improvement = 1;
  main.innerHTML = `
    <section class="dashboard">
      <div class="section" aria-label="Payments Banner" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
        <div>
          <h4 style="margin:0 0 6px;">Payments</h4>
          <div id="payStatus" class="muted">Click the button to check dues status.</div>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button id="payActionBtn" class="primary-btn">Check Dues</button>
          <button id="receiptDownloadBtn" class="primary-btn hidden">Download Receipt</button>
        </div>
      </div>
      <div class="summary" aria-label="Summary">
        <div class="summary-card">
          <h4 class="summary-title"><span class="summary-emoji">🏆</span> Summary</h4>
          <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
            <div style="min-width:200px;">
              <div style="color:#6b7280;font-size:13px;">Overall Score</div>
              <div style="font-size:28px;font-weight:800;">${overall} / 100</div>
              <div class="progress" aria-label="Score progress"><div class="progress-bar" style="width:${overall}%"></div></div>
              <div class="improve" style="color:${improvement>=0?'#166534':'#991b1b'}">${improvement>=0?'+':''}${improvement} from last test</div>
            </div>
            <div style="min-width:220px;">
              <div style="color:#6b7280;font-size:13px;">Rank <span style="margin-left:6px">📈</span></div>
              <div style="font-size:28px;font-weight:800;">${fmt(rank)} / ${fmt(totalCandidates)}</div>
              <span class="badge neutral">All-India</span>
            </div>
            <div style="min-width:140px;">
              <div style="color:#6b7280;font-size:13px;">Accuracy <span style="margin-left:6px">🧩</span></div>
              <div style="font-weight:800;">${accuracy}%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile">
        <img class="avatar" src="Assets/LavDP.png" alt="${user.name}">
        <div class="profile-meta">
          <h5 class="profile-name">${user.name}</h5>
          <div class="profile-sub">GATE CS Aspirant • ID: LAV-${(1000+Math.floor(Math.random()*9000))}</div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <h4>Welcome, ${user.name} 👋</h4>
          <p>Your latest performance overview is shown below.</p>
        </div>
        <div class="card">
          <h4>Overall Score</h4>
          <div style="font-size:28px;font-weight:700;">${overall} / 100</div>
          <div class="badge neutral">Latest</div>
        </div>
        <div class="card">
          <h4>Rank</h4>
          <div style="font-size:28px;font-weight:700;">${fmt(rank)} / ${fmt(totalCandidates)}</div>
          <div class="badge neutral">All-India</div>
        </div>
      </div>

      <div class="cards">
        <div class="card">
          <h4>Attempted Tests</h4>
          <div style="font-size:24px;font-weight:700;">${attempted}</div>
        </div>
        <div class="card">
          <h4>Accuracy</h4>
          <div class="progress">
            <div class="progress-bar" style="width:${accuracy}%"></div>
          </div>
          <div style="font-weight:700;">${accuracy}%</div>
        </div>
        <div class="card">
          <h4>Avg Time / Question</h4>
          <div style="font-size:24px;font-weight:700;">${avgTime} min</div>
        </div>
        <div class="card">
          <h4>Last Active</h4>
          <div style="font-size:24px;font-weight:700;">${lastActive}</div>
        </div>
      </div>

      <div class="section">
        <h3 style="margin-top:0;">Recent Tests</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Date</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${recentRows}
          </tbody>
        </table>
      </div>
    </section>
  `;

  // Payment banner behavior: first click confirms 'No Dues', then allow receipt download
  const payBtn = document.getElementById('payActionBtn');
  const payStatus = document.getElementById('payStatus');
  const dlBtn = document.getElementById('receiptDownloadBtn');
  if (payBtn && payStatus && dlBtn) {
    payBtn.addEventListener('click', () => {
      payStatus.textContent = 'You have no dues.';
      dlBtn.classList.remove('hidden');
      payBtn.classList.add('hidden');
    });
    dlBtn.addEventListener('click', async () => {
      const candidates = [
        'Assets/reciept.pdf',
        'Assets/receipt.pdf',
        'reciept.pdf',
        'receipt.pdf'
      ];
      let chosen = candidates[0];
      if (location.protocol.startsWith('http')) {
        for (const c of candidates) {
          try { const r = await fetch(c, { method: 'HEAD', cache: 'no-store' }); if (r.ok) { chosen = c; break; } } catch(_) {}
        }
      }
      const a = document.createElement('a');
      a.href = chosen;
      a.download = 'Payment_Receipt.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(()=>a.remove(),0);
    });
  }
}

// Homepage polish: year, smooth scroll, header shadow
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear().toString();
  // Cache initial homepage markup for restoring on Home/Logout
  if (main) originalMainHTML = main.innerHTML;
  const nav = document.querySelector('.nav');
  if (nav) {
    originalNavHTML = nav.innerHTML;
  }

  // Group nav and auth buttons on the right side
  groupHeaderRight();
  // Remove Pricing link always
  removeNavItem('Pricing');

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      // If Home clicked while logged in, restore homepage
      if (href === '#' && isLoggedIn) {
        e.preventDefault();
        restoreHomepage();
        return;
      }
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const header = document.querySelector('header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) {
      header.style.boxShadow = '0 2px 10px rgba(16,24,40,0.12)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

// Adds a Logout button to the header next to the (hidden) Login button
function ensureLogoutButton() {
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner || document.getElementById('logoutBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'logoutBtn';
  btn.textContent = 'Logout';
  btn.className = 'primary-btn';
  btn.addEventListener('click', () => restoreHomepage());
  const actions = document.querySelector('.header-actions') || headerInner;
  actions.appendChild(btn);
}

// Restores original homepage and clears login state
function restoreHomepage() {
  if (main && originalMainHTML) {
    main.innerHTML = originalMainHTML;
  }
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.remove();
  if (loginBtn) loginBtn.classList.remove('hidden');
  isLoggedIn = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Restore original nav (including Features) and regroup header
  const nav = document.querySelector('.nav');
  if (nav && originalNavHTML) {
    nav.innerHTML = originalNavHTML;
  }
  groupHeaderRight();
  removeNavItem('Pricing');
}

// Utility: move nav and login/logout buttons to the right side wrapper
function groupHeaderRight() {
  const headerInner = document.querySelector('.header-inner');
  const nav = document.querySelector('.nav');
  if (!headerInner) return;
  let actions = document.querySelector('.header-actions');
  if (!actions) {
    actions = document.createElement('div');
    actions.className = 'header-actions';
    headerInner.appendChild(actions);
  }
  if (nav && nav.parentElement !== actions) actions.appendChild(nav);
  if (loginBtn && loginBtn.parentElement !== actions) actions.appendChild(loginBtn);
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn && logoutBtn.parentElement !== actions) actions.appendChild(logoutBtn);
}

// Utility: remove a nav item by its visible text
function removeNavItem(text) {
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.textContent.trim().toLowerCase() === text.toLowerCase()) {
      a.remove();
    }
  });
}
