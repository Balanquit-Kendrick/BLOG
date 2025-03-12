import { DataTypes } from 'sequelize';
import { db } from '../config/database.js';

const Post = db.define('Post', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

export default Post;
