import { useLayoutEffect, useState } from 'react';
import { desktopBreakpoint } from 'scss/shared';

const useIsDesktop = () => {
  const [ pageWidth, setPageWidth ] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      setPageWidth(window.innerWidth);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return pageWidth > desktopBreakpoint;
};

export default useIsDesktop;
