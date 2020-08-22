export type DbConfig = {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

export const DB_CONFIG: DbConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'historiajone',
};
