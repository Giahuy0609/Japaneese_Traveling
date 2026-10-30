// Căn chỉnh: chạy trực tiếp i18n.js trong Node để xem lỗi thật
const fs = require("fs");
const src = fs.readFileSync("js/i18n.js", "utf8");
const vm = require("vm");

const sandbox = {
  window: {},
  document: {
    readyState: "complete",
    documentElement: { lang: "ja" },
    addEventListener: () => {},
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    createElement: () => ({ style: {} }),
    dispatchEvent: () => {},
  },
  localStorage: { getItem: () => null, setItem: () => {} },
  CustomEvent: function (n, o) { return { type: n, detail: o?.detail }; },
  console,
  setTimeout,
  performance: { now: () => 0 },
};
sandbox.window.document = sandbox.document;

try {
  vm.runInNewContext(src, sandbox);
  console.log("EXEC OK — window.i18n:", typeof sandbox.window.i18n);
  console.log(
    "keys:",
    sandbox.window.i18n ? Object.keys(sandbox.window.i18n) : "-",
  );
  console.log(
    "culture6 in ja:",
    !!sandbox.window.i18n?.getAllData().ja?.culture6Title,
  );
} catch (e) {
  console.log("EXEC FAIL:", e.message.slice(0, 500));
  console.log("stack:", (e.stack || "").split("\n").slice(0, 6).join("\n"));
}
