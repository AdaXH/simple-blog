export function initTypes(arr: ArticleModel[]) {
  return ['All'].concat([...new Set(arr.map(({ type }) => type))]);
}
