import { getEnv, mergeDeepRight } from '@/utils/helpers';

import { config as base } from './default';
import { config as custom } from './production';

type TDefaultConfig = typeof base;
type TCustomConfig = typeof custom;
export type TConfig = TDefaultConfig & TCustomConfig;

export const configuration = async (): Promise<TConfig> => {
  const { config: baseConfig }: { config: TDefaultConfig } = await import(
    `${__dirname}/envs/default`
  );

  const { config: customConfig }: { config: TCustomConfig } = await import(
    `${__dirname}/envs/${getEnv()}`
  );

  return mergeDeepRight(baseConfig, customConfig);
};
