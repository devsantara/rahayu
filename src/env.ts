import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * The `env` object is used to access the environment variables
 * and define the schema to validate the environment variables
 *
 * @see {@link https://env.t3.gg/docs/nextjs#create-your-schema}
 */
export const env = createEnv({
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
  server: {},
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
