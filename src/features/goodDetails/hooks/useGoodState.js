import { useState, useEffect, useCallback, useRef } from 'react';

export const useGoodState = (colors) => {
  const [state, setState] = useState({
    colorId: colors[0]?.id || null,
    sizeId: null,
    selectedImage: colors[0]?.images[0] || '',
  });

  const prevColors = useRef(colors);

  useEffect(() => {
    const colorsChanged = prevColors.current !== colors;

    if (colorsChanged) {
      const currentColorExists = colors.some((c) => c.id === state.colorId);

      if (!currentColorExists || colorsChanged) {
        const newColor = colors[0] || null;

        setState((prev) => ({
          ...prev,
          colorId: newColor?.id || null,
          selectedImage: newColor?.images[0] || '',
          sizeId: null,
        }));
      }

      prevColors.current = colors;
    }
  }, [colors, state.colorId]);

  const setColorId = useCallback(
    (newColorId) => {
      const newColor = colors.find((c) => c.id === newColorId);
      setState((prev) => ({
        ...prev,
        colorId: newColorId,
        selectedImage: newColor?.images[0] || prev.selectedImage,
        sizeId: null,
      }));
    },
    [colors]
  );

  const setSizeId = useCallback((sizeId) => {
    setState((prev) => ({ ...prev, sizeId }));
  }, []);

  const setSelectedImage = useCallback((image) => {
    setState((prev) => ({ ...prev, selectedImage: image }));
  }, []);

  return {
    ...state,
    setColorId,
    setSizeId,
    setSelectedImage,
  };
};
