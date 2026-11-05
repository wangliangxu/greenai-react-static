/* pandas does not declare its optional HTML parser as a required dependency. */
export async function loadNotebookPackages(python, source) {
  await python.loadPackagesFromImports(source);
  // Keep this available across cells, including cells that only use an existing pd alias.
  if (python.loadedPackages.pandas && !python.loadedPackages.lxml) {
    await python.loadPackage('lxml');
  }
}
