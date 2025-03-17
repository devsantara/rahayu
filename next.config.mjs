import { fileURLToPath } from 'node:url';

import { createJiti } from 'jiti';

/**
 * @description  Validate the environment variables before starting the application
 * @see {@link https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)}
 */
const jiti = createJiti(fileURLToPath(import.meta.url));
await jiti.import('./src/env');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
};

export default nextConfig;
