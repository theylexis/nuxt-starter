import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const btn = 'px-3 py-1.5 overflow-hidden relative rounded inline-flex items-center gap-2 cursor-pointer disabled:cursor-default disabled:opacity-50 hover:bg-opacity-90 active:bg-opacity-80'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: '#4DDCA1',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#E2F9F0',
        300: '#C0F3DE',
        400: '#9EECCC',
        500: '#7CE5BA',
        600: '#4DDCA1',
        700: '#28C987',
        800: '#1F9A68',
        900: '#156B48',
        950: '#115438',
      },
      canvas: 'Canvas',
    },
  },
  shortcuts: [
    ['btn', btn],
    ['btn-primary', `${btn} bg-primary text-dark`],
    ['btn-secondary', `${btn} bg-gray-300 text-dark`],

    ['border-muted', 'border-gray-200 dark:border-gray-700'],
    ['ring-muted', 'ring-gray-200 dark:ring-gray-700'],
    ['outline-muted', 'outline-gray-200 dark:outline-gray-700'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
