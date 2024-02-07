const regex = /\/([^/]+)\.astro$/;
const pageModules = Object.entries(
  import.meta.glob("./../components/sections/*.astro", { eager: true }),
);

export const getPageModuleFragments = () => {
  return pageModules
    .filter(([filename, pm]) => pm.fragment)
    .reduce((map, [filename, { fragment }]) => {
      const moduleName = filename.match(regex)[1];
      map["module" + moduleName] = fragment;
      return map;
    }, {});
};

export const getPageModuleComponents = () => {
  return pageModules
    .filter(([filename, pm]) => pm.default)
    .reduce((map, [filename, { default: component }]) => {
      const moduleName = filename.match(regex)[1];
      map["module" + moduleName] = component;
      return map;
    }, {});
};

export const renderPageModuleFragments = (includedFragments = []) => {
  const fragments = getPageModuleFragments();
  const fragmentNames = Object.keys(fragments).filter((f) =>
    includedFragments.length > 0 ? includedFragments.includes(f) : f,
  );

  return fragmentNames.reduce((query, fragmentName, index) => {
    return `
        ${index == 0 ? query : query + ", "}
        _type == "${fragmentName}" => {
          ${fragments[fragmentName]}
        }
      `;
  }, ``);
};
