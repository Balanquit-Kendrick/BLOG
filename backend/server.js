import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import users from './router/users.js';
import { db } from './config/database.js';
import User from './models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const PORT = process.env.PORT;
const app = express();

db.sync()
  .then(() => console.log('✅ Database synced...'))
  .catch(err => console.error('❌ Sync error: ' + err));
  
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

app.use('/users', users);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})