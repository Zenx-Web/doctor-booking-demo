// Expose globally for no-bundler prototype
window.classNames = function classNames(...args) {
  return args.filter(Boolean).join(' ');
};
