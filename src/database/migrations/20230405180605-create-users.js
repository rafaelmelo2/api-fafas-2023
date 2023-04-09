'use strict';

const { INTEGER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      avatar:{
        type: Sequelize.STRING,
      },
      bio:{
        type: Sequelize.STRING,
      },
      gender:{
        type: Sequelize.STRING,
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  
    await queryInterface.dropTable('Users');
  
  }
};
