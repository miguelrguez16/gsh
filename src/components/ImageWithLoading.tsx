import React, { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
}
export const ImageWithLoading: React.FC<Props> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    const handleLoad = () => {
      setLoading(false);
      setError(false);
    };
    const handleError = () => {
      setLoading(false);
      setError(true);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);
    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading image</div>;
  }

  return <img src={src} alt={alt} />;
};
