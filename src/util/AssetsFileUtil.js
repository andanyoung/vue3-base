export const getAssetsImage = (url) => {
  const path = `../assets/images/${url}`;
  const modules = import.meta.globEager('@/assets/images/*');
  console.log('getAssetsImage', modules);
  return modules[path] ? modules[path].default : null;
};
