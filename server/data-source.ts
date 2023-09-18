/**
 * @file
 */

import 'reflect-metadata';
import { LoadStrategy } from '@mikro-orm/core';
// import { defineConfig } from '@mikro-orm/mariadb';
import { Migrator } from '@mikro-orm/migrations';
// import { resolve } from 'node:path';

import * as entities from '~/server/entities/index.ts';

const options = // defineConfig(
{
  allowGlobalContext: false,
  dbName: 'nuxt',
  debug: true, // ['discovery', 'info', 'query', 'query-params'],
  discovery: {
    disableDynamicFileAccess: true,
    warnWhenNoEntities: true
  },
  entities: Object.values(entities),
  entitiesTS: Object.values(entities),
  extensions: [Migrator],
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    path: './migrations', // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files       
  },
  password: 'changeme',
  populateAfterFlush: true,
  port: 3306,
  registerRequestContext: false,
  type: 'mariadb',
  user: 'root'
}
//);

console.log('[datasource]');

export default options;
