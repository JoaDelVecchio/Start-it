window.trustedTypes?.createPolicy("default", {
  createHTML: (html) => html,
  createScript: (script) => script,
  createScriptURL: (url) => url,
});
