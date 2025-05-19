import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from "./Label";
export default {
  title: "Atoms/Label",
  component: Label,
};
const Template = (args) => _jsx(Label, Object.assign({}, args));
export const Default = {
  render: Template,
  args: {
    children: "Default label",
  },
};
export const Required = {
  render: Template,
  args: {
    children: "Required label",
    required: true,
  },
};
export const Error = {
  render: Template,
  args: {
    children: "Error label",
    error: true,
  },
};
export const Disabled = {
  render: Template,
  args: {
    children: "Disabled label",
    disabled: true,
  },
};
//# sourceMappingURL=label.stories.js.map
