import { findPerId } from '@/shared/lib/helpers/findPerId';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useColorSelection = (initialColors = []) => {
  const [state, setState] = useState(() => ({
    colors: initialColors,
    selectedColor: initialColors[0] || null,
  }));

  const prevColorsHash = useRef(0);

  const currentHash = JSON.stringify(initialColors)?.length || 0;

  useEffect(() => {
    if (prevColorsHash.current !== currentHash) {
      setState({
        colors: initialColors,
        selectedColor: initialColors[0] || null,
      });
      prevColorsHash.current = currentHash;
    }
  }, [currentHash, initialColors]);

  const changeColor = useCallback((colorId) => {
    setState((prev) => ({
      ...prev,
      selectedColor: findPerId(prev.colors, colorId) || prev.selectedColor,
    }));
  }, []);

  return { ...state, changeColor };
};
