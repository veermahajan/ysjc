// Prepend Astro's configured base path to internal paths.
// When base is "/" this is a no-op; when base is "/ysjc" it produces "/ysjc/foo".
// Use for every internal href and every absolute asset URL in /public/.

export function withBase(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  return base + path;
}
