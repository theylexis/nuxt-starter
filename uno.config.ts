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

const btn = 'px-2.5 py-1 rounded inline-flex items-center gap-2 cursor-pointer disabled:cursor-default disabled:opacity-50 hover:brightness-95 active:brightness-90'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: '#edfffc',
        100: '#c2fff8',
        200: '#84fff3',
        300: '#3fffed',
        400: '#08f9df',
        500: '#00dcc6',
        600: '#00b2a4',
        700: '#008d84',
        800: '#006c67',
        900: '#065b57',
        950: '#003838',
      },
    },
  },
  shortcuts: [
    ['btn', btn],
    ['btn-primary', `${btn} bg-primary-600 text-white`],
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
        sans: 'DM Sans',
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
