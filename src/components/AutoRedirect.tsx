'use client';

import { useEffect, useState } from 'react';

export default function AutoRedirect({ deepLink }: { deepLink: string }) {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (!redirected) {
      // Try to open the app immediately
      window.location.href = deepLink;
      setRedirected(true);
      
      // Optional: Fallback logic or timeout could go here
      // But for now, we just attempt the redirect.
    }
  }, [deepLink, redirected]);

  return null;
}
