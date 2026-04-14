/* ===================================
   GITHUB STATS
   =================================== */

const BULL_API_URL = 'https://api.github.com/repos/ExpediaGroup/bull';
const FETCH_TIMEOUT_MS = 5000;

export async function initGithubStats() {
  const starsEl = document.querySelector('.project-card__stars');
  if (!starsEl) return;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(BULL_API_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) return;

    const data = await response.json();
    const count = data.stargazers_count;

    if (typeof count !== 'number') return;

    // Update only the text node that follows the SVG, preserving the icon
    starsEl.lastChild.textContent = `\n                ${count}\n              `;
  } catch {
    // Silently fall back to the hardcoded value
  }
}
