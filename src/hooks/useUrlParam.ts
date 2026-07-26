import { useState, useEffect } from 'react';

export function useUrlParam(key: string): [string | null, (val: string | null) => void] {
  const [value, setValue] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  });

  const updateValue = (newVal: string | null) => {
    setValue(newVal);
    const params = new URLSearchParams(window.location.search);
    if (newVal) {
      params.set(key, newVal);
    } else {
      params.delete(key);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
  };

  useEffect(() => {
    const handlePop = () => {
      const params = new URLSearchParams(window.location.search);
      setValue(params.get(key));
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [key]);

  return [value, updateValue];
}
