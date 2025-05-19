import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar } from "./Avatar";
export default {
  title: "Atoms/Avatar",
  component: Avatar,
};
export const Default = () => _jsx(Avatar, { src: "https://picsum.photos/200" });
export const Small = () =>
  _jsx(Avatar, { src: "https://picsum.photos/200", size: "small" });
export const Large = () =>
  _jsx(Avatar, { src: "https://picsum.photos/200", size: "large" });
export const Fallback = () => _jsx(Avatar, {});
//# sourceMappingURL=avatar.stories.js.map
