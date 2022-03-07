import Sequelize from "sequelize";
import { sequelize } from '../db/dbConnect.js';

const Event = sequelize.define('report', {
  report_id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  classe: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  mathematics: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  physics: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  history: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  geography: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  kinyarwanda: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  term: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  adult_contact: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'report',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "report_id" },
      ]
    },
  ]
});

export default Event;
