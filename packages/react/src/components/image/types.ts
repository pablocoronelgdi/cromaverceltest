export type StyledImageProps = {
  width: string | number /* modifies element width */
  height: string | number /* modifies element height */
  image: string /* parameter to add the image to display */
  backgroundImage?: boolean /* activate brackground image mode */
  children?: unknown
  alt: string /* SEO tool defines a parameter in relation to the element */
  title: string /* usability tool defines a title to read or display */
  circle?: boolean /* activate avatar or circular mode */
  hover?: boolean /* activate hover mode for images */
  fullWidth?: boolean
}
