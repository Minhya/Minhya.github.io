"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { Expand, X, ZoomIn, ZoomOut } from "lucide-react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  children: ReactNode;
};

export function ZoomableImage({ src, alt, width, height, className, children }: ZoomableImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <button type="button" className={`${className} image-zoom-trigger`} aria-label={`Enlarge image: ${alt}`} onClick={() => dialog.current?.showModal()}>
        {children}
        <span className="image-zoom-hint" aria-hidden="true"><Expand size={18} /></span>
      </button>
      <dialog ref={dialog} className="image-lightbox" aria-label={alt} onClose={() => setZoomed(false)} onClick={(event) => {
        if (event.target === event.currentTarget ||
          (event.target instanceof HTMLElement && event.target.classList.contains("lightbox-image-area"))) {
          dialog.current?.close();
        }
      }}>
        <div className="lightbox-toolbar">
          <button type="button" aria-label={zoomed ? "Zoom out" : "Zoom in"} aria-pressed={zoomed} onClick={() => setZoomed((value) => !value)}>
            {zoomed ? <ZoomOut size={22} aria-hidden="true" /> : <ZoomIn size={22} aria-hidden="true" />}
          </button>
          <button type="button" aria-label="Close image" onClick={() => dialog.current?.close()}><X size={24} aria-hidden="true" /></button>
        </div>
        <div className={`lightbox-image-area${zoomed ? " is-zoomed" : ""}`}>
          <Image src={src} alt={alt} width={width} height={height} sizes="100vw" />
        </div>
      </dialog>
    </>
  );
}
