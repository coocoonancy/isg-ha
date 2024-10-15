/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'lnl-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        theme: 'var(--theme-color)',
        'theme-strong': 'var(--theme-strong-color)',
        'theme-gray': 'var(--theme-gray-color)',
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover-color)',
        'primary-active': 'var(--primary-active-color)',
        'primary-pale': 'var(--primary-pale-color)',
        'primary-disabled': 'var(--primary-disabled-color)',
        success: 'var(--success-color)',
        'success-hover': 'var(--success-hover-color)',
        'success-active': 'var(--success-active-color)',
        'success-strong': 'var(--success-strong-color)',
        warning: 'var(--warning-color)',
        'warning-hover': 'var(--warning-hover-color)',
        'warning-active': 'var(--warning-active-color)',
        'warning-strong': 'var(--warning-strong-color)',
        danger: 'var(--danger-color)',
        'danger-hover': 'var(--danger-hover-color)',
        'danger-active': 'var(--danger-active-color)',
        positive: 'var(--positive-color)',
        'positive-strong': 'var(--positive-strong-color)',
        urgent: 'var(--urgent-color)',
        info: 'var(--info-color)',
        divider: 'var(--divider-color)',
        mask: 'var(--mask-color)',
        bg: 'var(--bg-color)',
        'bg-body': 'var(--bg-body-color)',
        'bg-table': 'var(--bg-table-color)',
        'bg-dialog': 'var(--bg-dialog-color)',
        text: 'var(--text-color)',
        'text-primary': 'var(--text-primary-color)',
        'text-secondary': 'var(--text-secondary-color)',
        'text-placeholder': 'var(--text-placeholder-color)',
        'text-dialog': 'var(--text-dialog-color)',
        border: 'var(--border-color)',
        'border-light': 'var(--border-light-color)',
        'border-lighter': 'var(--border-lighter-color)',
        'border-extralight': 'var(--border-extralight-color)'
      },
      fontSize: {
        '8px': ['0.5rem', '0.75rem'], // 8px font size, 12px line height
        '10px': ['0.625rem', '0.875rem'], // 10px font size, 14px line height
        '13px': ['0.8125rem', '1.375rem'], // 13px font size, 22px line height
        '14px': ['0.875rem', '1.375rem'], // 14px font size, 22px line height
        '18px': ['1.125rem', '1.625rem'], // 18px font size, 26px line height
        '28px': ['1.75rem', '2.125rem'] // 28px font size, 34px line height
      }
    }
  },
  plugins: []
};
