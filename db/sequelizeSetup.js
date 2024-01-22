const DessertModel = require('../models/dessertModel')
const UserModel = require('../models/userModel')
const RoleModel = require('../models/roleModel')
const { Sequelize, DataTypes } = require('sequelize');
const { setDessert, setUsers, setRoles, setCategory,} = require('./setDataSample');
const ReviewModel = require('../models/reviewModel');
const CategoryModel = require('../models/categoryModel')
// const customerModel = require('../models/customerModel');
// const registrationModel = require('../models/registrationModel');
const sequelize = new Sequelize(
    'les_dessert_de_francky',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        logging: false
    }
)
//

const Role = RoleModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
const Dessert = DessertModel(sequelize, DataTypes)
const Review = ReviewModel(sequelize, DataTypes)
const Category = CategoryModel(sequelize, DataTypes)
// const Customer = customerModel(sequelize, DataTypes)
// const Registration = registrationModel(sequelize, DataTypes, Coworking, Customer)

Role.hasMany(User)
User.belongsTo(Role)

User.hasMany(Review)
Review.belongsTo(User)

Dessert.hasMany(Review)
Review.belongsTo(Dessert)

Category.hasMany(Dessert)
Dessert.belongsTo(Category)


sequelize.sync({ force: true })
    .then(async () => {
        await setRoles(Role)
        // setRoles permet de creer un tableau
        await setUsers(User)
        await setDessert(Dessert)
        await setCategory(Category)
        // await setCustomers(Customer)
        // setRegistrations(Registration)
    })
    .catch(error => {
        console.log(error)
    })


sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))


module.exports = { Dessert, User, Role, Category, Review, sequelize }

