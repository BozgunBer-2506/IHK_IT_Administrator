const modules = import.meta.glob('../docs/**/*.md', { as: 'raw', eager: true });
export const getGuides = () => {
  return Object.keys(modules).map((path) => {
    const parts = path.split('/');
    return {
      id: path,
      folder: parts[parts.length - 2],
      title: parts[parts.length - 1].replace('.md', ''),
      content: modules[path]
    };
  });
};
