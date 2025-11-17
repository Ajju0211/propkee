type BlogDateFormat = 'full' | 'short';

export function formatReadableDate(isoString: string, format: BlogDateFormat = 'full') {
  const date = new Date(isoString);
  const day = date.getDate();
  const year = date.getFullYear();

  if (format === 'full') {
    // Full month with ordinal: 17th November 2025
    const month = date.toLocaleString('en-US', { month: 'long' });
    const suffix =
      day % 10 === 1 && day !== 11
        ? 'st'
        : day % 10 === 2 && day !== 12
          ? 'nd'
          : day % 10 === 3 && day !== 13
            ? 'rd'
            : 'th';
    return `${day}${suffix} ${month} ${year}`;
  } else {
    // Short month format: Sept 20, 2025
    const month = date.toLocaleString('en-US', { month: 'short' });
    return `${month} ${day}, ${year}`;
  }
}
