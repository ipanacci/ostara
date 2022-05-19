const db = require('../../app/database_sql.js');
 
module.exports = class UserRepository {
 
    getAll(offset = 0, limit = 100) {
        return db.promise().execute(
           "SELECT * FROM users LIMIT ?, ?", 
           [offset, limit]
        ).then(result => result[0]);
    }

    get(userId) {
        return db.promise().execute(
            "SELECT * FROM users WHERE id=?",
            [userId]
        ).then(result=> {
            return result[0]});
    }

    // add(user) {
    //     console.log(user);
    //     // return db.promise().execute(
    //     //     "INSERT INTO user (firstname, lastname, email, password, date) VALUES (user., '2013-02-12', 22.43)
    //     // ) metti i dati in x www urlencoded....
    //     return("ok");
    // }

    insert(entity) {
        return db.promise().execute(
            "INSERT INTO `users` (`firstname`, `lastname`, `email`, `password`, `date`) VALUES (?, ?, ?, ?, now())",
            [entity.firstname, entity.lastname, entity.email, entity.password]
        );
    }

    update(id, entity) {
        return db.promise().query(
            "UPDATE `users` SET ? WHERE `id`=?", 
            [entity, id]
        );
    }

    delete(id) {
        return db.promise().execute(
            "DELETE FROM `users` WHERE `id`=?",
            [id]
        );
    }


}
