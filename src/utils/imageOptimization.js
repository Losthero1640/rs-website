export const generateImageMetadata = (imagePath, alt, width, height) => ({
  src: imagePath,
  alt: alt || 'VSSUT Robotics Society',
  width: width || 800,
  height: height || 600,
  loading: 'lazy',
  decoding: 'async'
});

export const generateImageSrcSet = (imagePath, sizes = [400, 800, 1200]) => {
  return sizes
    .map(size => `${imagePath}?w=${size} ${size}w`)
    .join(', ');
};

export const generateImagePlaceholder = (imagePath) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3C/svg%3E`;
};

export const optimizeImageUrl = (url, options = {}) => {
  const { width, height, quality = 80 } = options;
  const params = new URLSearchParams();
  
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  if (quality) params.append('q', quality);
  
  return `${url}?${params.toString()}`;
}; 