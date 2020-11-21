import { useEffect, useState } from "react";
import './styles.scss';

const useFade = (show: boolean) => {
  const [ localShow, setLocalShow ] = useState(show);
  useEffect(() => {
    if (show) {
      setLocalShow(true);
    } else {
      setTimeout(() => setLocalShow(false), 300);
    }
  }, [ show ]);

  if (show) {
    return 'UseFade-reveal';
  } else if (!show && !localShow) {
    return 'UseFade-hiden';
  }

  return 'UseFade-hide';
}

export default useFade;
