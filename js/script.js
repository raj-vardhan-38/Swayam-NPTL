document.getElementById('loginBtn').addEventListener('click', function() {
  openModal();
});

const modal = document.getElementById('loginModal');
const backdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const main = document.getElementById('mainContent');

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
      renderDashboard({ name: 'Lav Singh' });
    } else {
      alert('Invalid credentials.');
    }
  });
}

function renderDashboard(user) {
  // random helpers
  const fmt = (n) => n.toLocaleString('en-IN');
  const totalCandidates = 17845;
  const rank = Math.floor(3000 + Math.random() * 8000);
  const overall = Math.floor(25 + Math.random() * 50);
  const accuracy = Math.floor(40 + Math.random() * 40);
  const avgTime = (1.4 + Math.random() * 1.2).toFixed(1); // min/question
  const attempted = Math.floor(12 + Math.random() * 8);
  const lastActive = new Date().toLocaleDateString('en-GB');

  const recent = [
    { name: 'GATE CS Mock Test 1', date: '05/10/25', score: `${overall} / 100`, status: 'Attempted' },
    { name: 'GATE CS Mock Test 2', date: '12/10/25', score: `${Math.max(20, overall - 6)} / 100`, status: 'Attempted' },
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

  const improvement = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5 + 1);
  main.innerHTML = `
    <section class="dashboard">
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
        <div class="card" aria-label="Payments">
          <h4>Payments</h4>
          <p class="muted" style="margin:0 0 10px;">Download your latest payment receipt in PDF format.</p>
          <button id="receiptBtn" class="primary-btn">Download Payment Receipt</button>
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

  const receiptBtn = document.getElementById('receiptBtn');
  if (receiptBtn) {
    receiptBtn.addEventListener('click', async () => {
      // Allow overriding path globally if you set: window.RECEIPT_PATH = 'Assets/receipt.pdf'
      const preset = window.RECEIPT_PATH && typeof window.RECEIPT_PATH === 'string' ? [window.RECEIPT_PATH] : [];
      const candidates = [
        ...preset,
        'Assets/reciept.pdf', // common misspelling
        'Assets/receipt.pdf',
        'reciept.pdf',
        'receipt.pdf'
      ];

      const isHttp = location.protocol.startsWith('http');
      let chosen = candidates[0];

      if (isHttp) {
        // Try to find the first reachable candidate
        for (const c of candidates) {
          try {
            const res = await fetch(c, { method: 'HEAD', cache: 'no-store' });
            if (res.ok) { chosen = c; break; }
          } catch (_) { /* ignore and continue */ }
        }
      }

      const link = document.createElement('a');
      link.style.display = 'none';
      link.target = '_blank';
      link.href = chosen;
      link.download = 'Payment_Receipt.pdf';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => link.remove(), 0);

      // Help user if likely missing under file:// scheme
      if (!isHttp) {
        setTimeout(() => {
          alert('If the receipt did not download, place your PDF at "Assets/reciept.pdf" or set window.RECEIPT_PATH to the exact relative path in the browser console and click again.');
        }, 50);
      }
    });
  }
}

// Homepage polish: year, smooth scroll, header shadow
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear().toString();

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
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
