const UserRepository = require('./repositories/user/userRepository.js');

const userRepository = new UserRepository();

userRepository.getUsers()
    .then(rows => {
        console.log(rows);
    })
    .catch(error => {
        console.error(error);
    })

