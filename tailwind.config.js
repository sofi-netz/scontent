/* refer for more details https://tailwindcss.com/docs/configuration */

// TODO define colors and pallette: https://css-tricks.com/color-theming-with-css-custom-properties-and-tailwind/

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        //used in text
        light:  'var(--color-light)',
        dark:  'var(--color-dark)',

        // used in components background
        primary:  'var(--color-primary)',
        secondary:  'var(--color-secondary)',
        accent:  'var(--color-accent)',
        neutral:  'var(--color-neutral)',

        // used in alerts , notifications and statuses
        success:  'var(--color-success)',
        warning:  'var(--color-warning)',
        error:  'var(--color-error)',
        info:  'var(--color-info)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
