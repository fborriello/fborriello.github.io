/* ===================================
   MAIN ENTRY POINT
   =================================== */

import { initTheme }             from './theme.js';
import { initNav }               from './nav.js';
import { initTypewriter }        from './typewriter.js';
import { initAnimations }        from './animations.js';
import { initContact }           from './contact.js';
import { initGithubStats }       from './github.js';
import { renderIndexExperiences } from './experiences.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initTypewriter();
  renderIndexExperiences('experience-list');
  initAnimations();
  initContact();
  initGithubStats();
});
