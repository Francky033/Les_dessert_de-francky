const mockDessert = require('./mock-desserts')
const mockUsers = require('./mock-users')
const bcrypt = require('bcrypt')

const setDessert = (Dessert) => {
    return mockDessert.map((element) => {
        const newDessert = { ...element, id: null }
        return Dessert.create(newDessert)
            .then(() => { })
            .catch((error) => {
                console.log(error.message)
            })
    })
}

const setUsers = (User) => {
    return mockUsers.map(user => {
        return bcrypt.hash(user.password, 10)
            .then(hashResult => {
                return User.create({ ...user, password: hashResult })
                    .then(() => { })
                    .catch((error) => {
                        console.log(error.message)
                    })
            })
    })
}

const setRoles = (Role) => {
    return (Role.create({ label: "admin" }), Role.create({ label: "user" }))
}

const setCategory = (Category) => {
    return  (Category.create({ label: "chocolat" }), Category.create({ label: "fruit" }))
}


module.exports = { setDessert, setCategory, setUsers, setRoles}