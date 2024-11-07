import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: process.env.MONGODB_URL,
  host: '"localhost"',
  port: 27017,
  database: 'todos',
  useNewUrlParser: true,
};

@lifeCycleObserver('datasource')
export class MongoDbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'mongoDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
