const db = require('../../app/database_sql.js');
 
module.exports = class RealtyRepository {
    
    getAll(offset = 0, limit = 100){
        return db.promise().execute(
            "SELECT * FROM `realties` LIMIT ?,? ",
            [offset, limit]
        ).then(result=> result[0]);
    }

    get(id){
        return db.promise().execute(
            "SELECT * FROM `realties` WHERE `id` = ?",
            [id] 
        ).then(result=>result[0]);
    }

    insert(entity){
        return db.promise().execute(
            "INSERT INTO `realties` (`type`, `address_1`, `address_2`, `city`, `zipcode`, `surface`, `nb_rooms`, `price`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [entity.type, entity.address_1, entity.address_2, entity.city, entity.zipcode, entity.surface, entity.nb_rooms, entity.price, entity.description]
        );
    }

    update(entity, id){
        return db.promise().query(
            "UPDATE `realties` SET ? WHERE `id`= ?",
            [entity, id]
        );
    }

    delete(id){
        return db.promise().execute(
            "DELETE FROM `realties` WHERE `id`= ?",
            [id]
        );
    }

}