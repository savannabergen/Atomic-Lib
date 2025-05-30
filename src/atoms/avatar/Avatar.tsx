import type { AvatarProps } from "./avatar.types";
import { useRef, useEffect } from "react";

const sizeClasses = {
  small: "32px",
  medium: "48px",
  large: "64px",
};

export const Avatar = ({
  src = "",
  alt = "",
  size = "medium",
}: AvatarProps) => {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (avatarRef.current) {
      const shadowRoot = avatarRef.current.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
      img.avatar {
        border-radius: 50%;
        object-fit: cover;
        width: ${sizeClasses[size]};
        height: ${sizeClasses[size]};
      }
    `;
      shadowRoot.appendChild(style);

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.className = "avatar";
      shadowRoot.appendChild(img);
    }
  }, [src, alt, size]);

  return <div ref={avatarRef} />;
};
