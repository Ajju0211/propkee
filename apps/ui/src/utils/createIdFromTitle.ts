export function createIdFromTitle(title?: string): string {
  if (!title || typeof title !== 'string') return '';

  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}
