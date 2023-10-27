type ColorName =
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-950'

const colors: { [key in ColorName]: string } = {
  'gray-50': '#f2f7fb',
  'gray-100': '#e7f0f8',
  'gray-200': '#d3e2f2',
  'gray-300': '#b9cfe8',
  'gray-400': '#9cb6dd',
  'gray-500': '#839dd1',
  'gray-600': '#6a7fc1',
  'gray-700': '#6374ae',
  'gray-800': '#4a5989',
  'gray-900': '#414e6e',
  'gray-950': '#262c40',
}

export const color = (colorName: ColorName): string => {
  return colors[colorName]
}
