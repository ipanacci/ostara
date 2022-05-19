const db = require('../../app/database_sql.js');
 
module.exports = class RealtyTypeRepository {
    getAll(offset = 0, limit = 100){
        return db.promise().execute(
            "SELECT * FROM `types_realty` LIMIT ?,? ",
            [offset, limit]
        ).then(result=>result[0]);
    }

    get(id){
        return db.promise().execute(
            "SELECT * FROM `types_realty` WHERE `id` = ?",
            [id] 
        ).then(result=>result[0]);
    }

    insert(entity){
        return db.promise().execute(
            "INSERT INTO `types_realty` (`title`) VALUES (?)",
            [entity.title]
        );
    }

    update(entity, id){
        return db.promise().query(
            "UPDATE `types_realty` SET ? WHERE `id`= ?",
            [entity, id]
        );
    }

    delete(id){
        return db.promise().execute(
            "DELETE FROM `types_realty` WHERE `id`= ?",
            [id]
        );
    }


}