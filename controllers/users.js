import { v4 as uuidv4 } from 'uuid';


let users = [];
// get users
export const getUsers = (req, res) => {
    res.send(users);
}

// create user
export const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database!`);
}

// get user by id
export const getUser = (req, res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

// delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;

    // id to delete  123

    // john 123
    // jane 321
    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);
}

// update user
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body; // what can we receive
    
    const user = users.find((user) => user.id === id); 
    // check each 
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated.`);
   
}