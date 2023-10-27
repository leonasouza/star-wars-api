type ColorName =
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'

const colors: { [key in ColorName]: string } = {
  'blue-50': '#f2f7fb',
  'blue-100': '#e7f0f8',
  'blue-200': '#d3e2f2',
  'blue-300': '#b9cfe8',
  'blue-400': '#9cb6dd',
  'blue-500': '#839dd1',
  'blue-600': '#6a7fc1',
  'blue-700': '#6374ae',
  'blue-800': '#4a5989',
  'blue-900': '#414e6e',
  'blue-950': '#262c40',
  'neutral-50': '#fafafa',
  'neutral-100': '#f5f5f5',
  'neutral-200': '#e5e5e5',
  'neutral-300': '#d4d4d4',
  'neutral-400': '#a3a3a3',
  'neutral-500': '#737373',
  'neutral-600': '#525252',
  'neutral-700': '#404040',
  'neutral-800': '#262626',
  'neutral-900': '#171717',
  'neutral-950': '#0a0a0a',
}

export const color = (colorName: ColorName): string => {
  return colors[colorName]
}
