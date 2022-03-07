import Sequelize from "sequelize";
import { sequelize } from '../db/dbConnect.js';

const Event = sequelize.define('messages', {
  message_id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  message: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'messages',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "message_id" },
      ]
    },
  ]
});

export default Event;
