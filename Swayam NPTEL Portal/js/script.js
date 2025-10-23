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
  main.innerHTML = `
    <section class="dashboard">
      <div class="cards">
        <div class="card">
          <h4>Welcome, ${user.name} 👋</h4>
          <p>Your latest performance overview is shown below.</p>
        </div>
        <div class="card">
          <h4>Overall Score</h4>
          <div style="font-size:28px;font-weight:700;">34 / 100</div>
          <div class="badge">Latest</div>
        </div>
        <div class="card">
          <h4>Rank</h4>
          <div style="font-size:28px;font-weight:700;">4,392 / 17,845</div>
          <div class="badge">All-India</div>
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
            <tr>
              <td>GATE CS Mock Test 1</td>
              <td>05/10/25</td>
              <td>34 / 100</td>
              <td><span class="badge">Attempted</span></td>
            </tr>
            <tr>
              <td>GATE CS Mock Test 2</td>
              <td>19/10/25</td>
              <td>—</td>
              <td><span class="badge">Missed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
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
