import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core'

import { THEMES } from 'src/constants'

import typography from './typography'
import { softShadows, strongShadows } from './shadows'

const size = {
  mobileS: '375px',
  mobileM: '425px',
  mobileL: '600px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1366px',
  desktop: '1440px',
}

export const baseConfig = {
  props: {
    MuiTypography: {
      variantMapping: {
        subtitle1: 'span',
        subtitle2: 'span',
        body1: 'span',
        body2: 'p',
      },
    },
  },
  direction: 'ltr',
  typography,
  universalColors: {
    green: '#008000',
    gold: '#FFD700',
    red: '#CC0000',
    black: '#000000',
    blue: '#3047AA',
    darkBlue: '#293C8F',
    white: '#fff',
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1366,
      xl: 1920,
    },
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
  },
}

const themeConfigs = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: '#ffffff',
        invertedA: '#1E1F25',
        invertedB: '#222426',
        light: '#ffffff',
        normal: '#ffffff',
        dark: '#F8F8F9',
        switch: '#FFFFFF',
        main: '#f8f8f9',
        slider: '#fefefe',
        blue: '#415a93',
        red: '#E74B36',
        darker: '#ECEEF7',
      },
      primary: {
        main: '#EC8A34',
      },
      secondary: {
        main: '#344CB5',
      },
      text: {
        default: '#222426',
        primary: '#344CB5',
        secondary: '#66696C',
        inverted: '#fff',
      },
      border: {
        default: '#4C4F53',
        primary: '#4C4F53',
        secondary: '#1F1F25',
        tertiary: '#222426',
        quaternary: '#222426',
        grey: '#C3C6C9',
        tag: '#A0A2A4',
        nav: '#F2F2F9',
        contrast: '#1E1F25',
        input: '#CDD3DB',
        dark: '#F8F8F9',
        step: '#1e1f25',
        blue: '#344cb5',
        lightGrey: '#EEF1F4',
        red: '#E64B36',
        inverted: '#fff',
      },
      hover: {
        primary: '#EEF1F4',
        secondary: '#EDF0F3',
        lightOrange: '#ffae66',
      },
      custom: {
        orangeBlue: '#EC8A34',
        blueOrange: '#344CB5',
        block: '#cdd3db',
      },
      icon: {
        primary: '#FFFFFF',
        dark: '#222426',
        contrast: '#222426',
      },
      input: {
        background: '#FFFFFF',
        text: '#222426',
        border: '#CDD3DB',
        placeholder: '#66696C',
        invalid: '#F64746',
        active: '#2A3E96',
        disabled: '#F9F9FC',
      },
      sidebar: {
        background: '#fff',
        text: '#3047aa',
        border: '#fff',
        backgroundActive: '#293C8F',
        textActive: '#fff',
      },
      status: {
        deliver: '#3147aa',
        open: '#f4a12e',
        accept: '#50CBAE',
        reject: '#f64746',
        reply: '#FFDA00',
      },
      snackbar: {
        info: '#708AFC',
        error: '#e74b36',
        success: '#50cbae',
        warning: '#FFE072',
      },
      separator: {
        main: '#cdd3db',
      },
      contrastText: '#fff',
    },
    shadows: softShadows,
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#1D1F25',
        invertedA: '#2B2D33',
        invertedB: '#F8F8F9',
        light: '#17181D',
        normal: '#0E0F14',
        dark: '#0E0F14',
        main: '#17181D',
        slider: '#fefefe',
        blue: '#415a93',
        darker: '#ECEEF7',
      },
      primary: {
        main: '#EC8A34',
      },
      secondary: {
        main: '#344CB5',
      },
      text: {
        default: '#F8F8F9',
        primary: '#F8F8F9',
        secondary: '#F8F8F9',
        inverted: '#222426',
      },
      border: {
        default: '#0E0F14',
        primary: '#F8F8F9',
        secondary: '#F8F8F9',
        tertiary: '#FFFFFF',
        quaternary: '#F8F8F9',
        grey: '#C3C6C9',
        tag: '#A0A2A4',
        nav: '#22242B',
        contrast: '#F8F8F9',
        input: '#CDD3DB',
        step: '#1e1f25',
        blue: '#344cb5',
        lightGrey: '#EEF1F4',
      },
      custom: {
        orangeBlue: '#344CB5',
        blueOrange: '#EC8A34',
        block: '#cdd3db',
      },
      hover: {
        primary: '#EEF1F4',
        secondary: '#EDF0F3',
        lightOrange: '#ffae66',
      },
      input: {
        background: '#FFFFFF',
        text: '#222426',
        border: '#CDD3DB',
        placeholder: '#66696C',
        invalid: '#F64746',
        active: '#2A3E96',
        disabled: '#F9F9FC',
      },
      icon: {
        primary: '#F8F8F9',
        dark: '#222426',
        contrast: '#ffffff',
      },
      sidebar: {
        background: '#fff',
        text: '#3047aa',
        border: '#fff',
        backgroundActive: '#293C8F',
        textActive: '#fff',
      },
      status: {
        deliver: '#3147aa',
        open: '#f4a12e',
        accept: '#50CBAE',
        reject: '#f64746',
        reply: '#FFDA00',
      },
      snackbar: {
        info: '#708AFC',
        error: '#e74b36',
        success: '#50cbae',
        warning: '#FFE072',
      },
      separator: {
        main: '#cdd3db',
      },
      contrastText: '#fff',
    },
    shadows: strongShadows,
  },
]

export function createTheme(settings = {}) {
  const settingThemeName = settings.theme ? THEMES.ONE_DARK : THEMES.LIGHT
  let themeConfig = themeConfigs.find(
    (theme) => theme.name === settingThemeName
  )

  if (!themeConfig) {
    console.warn(new Error(`The theme ${settings.theme} is not valid`))
    ;[themeConfig] = themeConfigs
  }

  let theme = createMuiTheme(
    Object.assign({}, baseConfig, themeConfig, {
      direction: settings.direction,
      spacing: (factor) => `${0.25 * factor}rem`,
      fontSize: (factor) => `${1 * factor}rem`,
    })
  )

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
