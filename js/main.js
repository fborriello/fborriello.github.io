/* ===================================
   MAIN ENTRY POINT
   =================================== */

import { initTheme }       from './theme.js';
import { initNav }         from './nav.js';
import { initTypewriter }  from './typewriter.js';
import { initAnimations }  from './animations.js';
import { initGithubStats } from './github.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initTypewriter();
  initAnimations();
  initGithubStats();
});
