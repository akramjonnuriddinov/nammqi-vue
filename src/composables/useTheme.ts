import { reactive, computed } from 'vue';

type Theme = 'light' | 'dark';

export const state = reactive({
  theme: 'light' as Theme,
});

export const isThemeChecked = computed({
  get() {
    return state.theme === 'dark';
  },
  set() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    setTheme();
  },
});

export function initTheme() {
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  state.theme = storedTheme || (prefersDark ? 'dark' : 'light');
  setTheme();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!storedTheme) {
      state.theme = e.matches ? 'dark' : 'light';
      setTheme();
    }
  });
}

export function setTheme() {
  const isDark = state.theme === 'dark';
  const body = document.querySelector('html');
  if (isDark) {
    body?.classList.add('dark');
  } else {
    body?.classList.remove('dark');
  }
}
