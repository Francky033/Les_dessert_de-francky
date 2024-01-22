module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        label : {type: DataTypes.STRING}
    },{timestapms : false})
}