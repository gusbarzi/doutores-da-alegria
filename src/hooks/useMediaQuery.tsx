import { useState, useEffect, useCallback } from 'react';

type UseMediaQuery = (query: string) => boolean;

const useMediaQuery: UseMediaQuery = inputQuery => {
  const [matches, setMatches] = useState<boolean>(false);

  const sanitizedQuery = /^(?:@media )?(.+)/.exec(inputQuery)?.[1] ?? inputQuery;

  const handleResize = useCallback(() => {
    const media = window.matchMedia(sanitizedQuery);
    setMatches(media.matches);
  }, [sanitizedQuery]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return matches;
};

export default useMediaQuery;
