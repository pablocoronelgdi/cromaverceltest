export type StyledImageProps = {
  width: number, /* modifies element width */
  height: number, /* modifies element height */
  image: string, /* parameter to add the image to display */
  backgroundImage?: boolean, /* activate brackground image mode */
  children?: Object, 
  alt: string, /* SEO tool defines a parameter in relation to the element */
  title: string, /* usability tool defines a title to read or display */
  circle?: boolean, /* activate avatar or circular mode */
  hover?: boolean, /* activate hover mode for images */
  fullWidth?: boolean,
}
