!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("@/atoms/button/Button"))
    : "function" == typeof define && define.amd
      ? define(["exports", "@/atoms/button/Button"], e)
      : e(
          ((t = "undefined" != typeof globalThis ? globalThis : t || self)[
            "atomic-bundle"
          ] = {}),
          t.Button,
        );
})(this, function (t, e) {
  "use strict";
  Object.defineProperty(t, "Button", {
    enumerable: !0,
    get: function () {
      return e.Button;
    },
  });
});
//# sourceMappingURL=atomic.bundle.js.map
