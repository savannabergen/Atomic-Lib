import type { AvatarProps } from "./avatar.types";
import { useRef, useEffect } from 'react';

const sizeClasses = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const Avatar = ({ src = "", alt = "", size = "medium" }: AvatarProps) => {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (avatarRef.current) {
      const shadowRoot = avatarRef.current.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
        .avatar {
          border-radius: 50%;
          object-fit: cover;
        }
        .small {
          width: 32px;
          height: 32px;
        }
        .medium {
          width: 48px;
          height: 48px;
        }
        .large {
          width: 64px;
          height: 64px;
        }
      `;
      shadowRoot.appendChild(style);

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.className = `avatar ${sizeClasses[size]}`;
      shadowRoot.appendChild(img);
    }
  }, [src, alt, size]);

  return <div ref={avatarRef} />;
};