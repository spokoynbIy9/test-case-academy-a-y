import { useCallback, useEffect, useState } from 'react';

export const useImageSelection = (initialImage = '') => {
  const [selectedImage, setSelectedImage] = useState(initialImage);

  useEffect(() => {
    if (initialImage) setSelectedImage(initialImage);
  }, [initialImage]);

  const changeActiveImage = useCallback(
    (newImage) => {
      if (newImage && newImage !== selectedImage) {
        setSelectedImage(newImage);
      }
    },
    [selectedImage]
  );

  return {
    selectedImage,
    changeActiveImage,
  };
};
