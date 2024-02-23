import { useEffect, useState } from "react";

/**
 * Ensure that code is run only on mount, to avoid specific things from running server-side.
 * @returns isMounted - When client-side mounting has occured
 */
export function useMounted(onMount?: () => void) {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      onMount?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMounted;
}
