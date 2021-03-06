const Sequelize = require('sequelize')
const instance = require('../../../database')

const columns = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    provider: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../Model'),
            key: 'id'
            
        }
    }
}

const tableOptions = {
    freezeTableName: true,
    tableName: 'products',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version'

}

module.exports = instance.define('products', columns, tableOptions)