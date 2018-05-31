export function getImageData(field) {
  const {
    sizes,
    src,
    srcSet
  } = field.localFile.childImageSharp.sizes;

  return {
    sizes,
    src,
    srcSet
  };
}