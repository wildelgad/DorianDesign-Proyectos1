                /**********  EJEMPLO 1 **************/
/*
const getUser = (id, cb)=> {
    const user = {
        name: 'Dorian',
        id: id
    }
    if(id == 2) cb('user No Existe')
    else cb(null, user)
}

getUser(1, (err, user)=> {
    if(err) return console.log(err)
    console.log(`user name is ${user.name}`);
})
*/



                /**********  EJEMPLO 2 **************/

// Array con 3 objetos
const users = [
    {
        id: 1,
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        correo: 'dorian@correo.com'
    },
    {
        id: 2,
        correo: 'laura@correo.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id)
    if(!user) cb(`No existe un usuario con id ${id}`)
    else cb(null, user)    
}

getUser(1, (err, user)=> {
    if (err) return console.log(err)
    console.log(user);
})