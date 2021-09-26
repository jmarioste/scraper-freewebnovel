export function getMetaProperty($: cheerio.Root, property: string) {
  return $(`meta[property="${property}"]`).attr('content') ?? '';
}
