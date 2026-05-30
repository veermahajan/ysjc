// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Deployed on Vercel — site lives at the root of its assigned domain.
// `base` is "/" (Astro default); the `withBase()` helper still works and
// becomes a no-op. If we ever deploy to a subpath again, set `base` here.
export default defineConfig({
  site: 'https://ysjc.vercel.app',
  integrations: [mdx()],
});
