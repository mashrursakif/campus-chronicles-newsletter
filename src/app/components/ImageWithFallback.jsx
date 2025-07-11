'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageWithFallback({ fallback, alt, src, ...props }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
}
