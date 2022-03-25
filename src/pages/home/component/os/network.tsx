import { useMount } from '@/util';
import { Fragment, memo, useState } from 'react';

export const Network = memo(
  () => {
    const [network, setNetwork] = useState<boolean>(navigator.onLine);
    useMount(() => {
      window.addEventListener('online', () => setNetwork(true));
      window.addEventListener('offline', () => setNetwork(false));
    });
    return <>{network ? 'online' : 'offline'}</>;
  },
  () => true,
);
