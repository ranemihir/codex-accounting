import * as mongodb from 'mongodb';
import { DatabaseController } from '../src/controller';
import '../src/env-test';

/**
 * Test for the Database Controller module
 */
describe('Database Controller', () => {
  console.log(process.env);
  if (!process.env.MONGO_ACCOUNTING_DATABASE_URI) {
    console.error('Please, specify mongodb uri via .env MONGO_ACCOUNTING_DATABASE_URI option');
    process.exit(1);
  }
  const db = new DatabaseController(process.env.MONGO_ACCOUNTING_DATABASE_URI);

  beforeAll(async () => {
    console.log('connect in tests');
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
  });

  it('should return connection instance', async () => {
    const connection = db.getConnection();
    const result = connection instanceof mongodb.Db;

    expect(result).toBe(true);
  });
});
