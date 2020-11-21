import { useEffect } from "react";

const useOutClick = (ref: any, onClick: (e: any) => void) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClick(e);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener("clear", handleClickOutside);
  }, [ ref, onClick ]);
}

export default useOutClick;
