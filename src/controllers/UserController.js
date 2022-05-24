const UserRepository = require('../repository/UserRepository');
module.exports = class UserController {
    getAll(request, response) {
        const User = new UserRepository();
        User.getAll().then(users => {
            response.status(200).json(users);
        });
    }

    get(request, response){
        const User = new UserRepository();
        if(isNaN(request.params.id)){
            response.status(400).send("The id is not well formatted");
        }
        else{
            User.get(request.params.id).then(user=> {
                if (user.length == 0){
                    response.status(404).send("User not found");
                }
                else {
                    response.status(200).json(user);
                }
            })
        }
    }

    post(request, response){
        const User = new UserRepository();
        let entity = {
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email,
            password: request.body.password,
        };
        User.insert(entity).then(result => {
            response.status(201).json(result);
        });

    }

    modify(request, response) {
        let entity = {};
        let fields = ['firstname', 'lastname', 'email', 'password'];
        fields.forEach(field => { if (request.body[field])  entity[field] = request.body[field]; });
        const User = new UserRepository();
        User.update(request.params.id, entity).then(result => {
            response.status(200).json(result);
        });
    } 

    remove(request, response) {
        const User = new UserRepository();
        User.delete(request.params.id).then(result => {
            response.status(200).json(result);
        });
    }


}
