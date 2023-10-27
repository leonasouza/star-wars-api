type SizeValue = 'mini' | 'small' | 'regular' | 'large' | 'title' | 'big'

const sizes: { [key in SizeValue]: string } = {
  mini: '10px',
  small: '14px',
  regular: '18px',
  large: '22px',
  title: '26px',
  big: '40px',
}

export const fontSize = (size: SizeValue): string => {
  return sizes[size]
}
