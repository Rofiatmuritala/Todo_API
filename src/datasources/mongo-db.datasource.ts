import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'mongodb+srv://Portfolio:5QQ9qXXjzXUuPcZD@cluster0.4bgugcc.mongodb.net/todoDb',
  host: '"localhost"',
  port: 27017,
  user: 'Portfolio',
  password: '5QQ9qXXjzXUuPcZD',
  database: 'todos',
  useNewUrlParser: true,
};
// sm72UzZyfS5WrYix;

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
