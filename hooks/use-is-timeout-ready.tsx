import { useEffect, useState } from 'react';

export function useIsTimeoutReady(shouldStart: boolean) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [shouldStart]);

  return isReady;
}
