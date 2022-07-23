const User = require('../../models/users.model');

async function saveUser(data){
    const user = new User(data);
    return user.save()
}

module.exports = {saveUser}

