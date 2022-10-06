import { useWindowDimensions } from './useWindowDimensions'

export const useIsMobile = () => {
  const { width } = useWindowDimensions()

  return width && width <= 768
}
