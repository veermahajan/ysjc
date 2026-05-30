// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Deploys at https://veermahajan.github.io/ysjc/
// When the project moves to a custom domain, set CUSTOM_DOMAIN=1 in env
// so the base path goes back to "/".
const usingCustomDomain = process.env.CUSTOM_DOMAIN === '1';

export default defineConfig({
  site: usingCustomDomain ? 'https://ysjc.org' : 'https://veermahajan.github.io',
  base: usingCustomDomain ? '/' : '/ysjc',
  integrations: [mdx()],
});
