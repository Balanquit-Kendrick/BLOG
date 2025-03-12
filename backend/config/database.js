import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';

dotenv.config();

export const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false 
    }
);