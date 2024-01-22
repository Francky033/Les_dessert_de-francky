// on définit le model coworking qui se traduira par une table avec ses champs dans la BDD
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Dessert', {
        // Model attributes are defined here
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            categorie: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            nom: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            img: {
              type: DataTypes.BLOB,
              allowNull: false,
            },
            ingredients: {
              type: DataTypes.JSON,
              allowNull: false,
            },
            preparation: {
              type: DataTypes.TEXT,
              allowNull: false,
            },
            duree: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            difficulte: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            calories: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
              },
         }, {
        onDelete: 'CASCADE'
    }
    );
}