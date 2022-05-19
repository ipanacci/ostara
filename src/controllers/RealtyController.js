const RealtyRepository = require('../repository/RealtyRepository');

module.exports = class RealtyController{

    getAll(request, response) {
        const Realty = new RealtyRepository(); //
        Realty.getAll().then(realties => { //nel getAll puoi mettere l'offset che ricavi dalla pagina
            response.status(200).json(realties);
            // response.status(200).json(dataResponse(users, page, ...)); page la trovi in request.query.page
        });
    }

    getById(request, response){
        const Realty = new RealtyRepository();
        Realty.get().then(realty=> {
            response.status(200).json(realty)
        });
    }

    add(request, response) {
        const Realty = new RealtyRepository();
        let entity={
            type : request.body.type,
            address_1 : request.body.address_1,
            address_2 : request.body.address_2,
            city : request.body.city,
            zipcode : request.body.zipcode,
            surface : request.body.surface,
            nb_rooms : request.body.nb_rooms,
            price : request.body.price,
            description : request.body.description,
        };
        Realty.insert(entity).then(result=>{
            response.status(201).send("Realty Type bien ajouté");
        })
    }

    edit(request, response) {
        const Realty = new RealtyRepository();
        let entity={};
        let fields= ['type', 'address_1', 'address_2', 'city','zipcode','surface','nb_rooms','price','description'];
        for (let el of fields){
            if (request.body[el]){
                entity[el]=request.body[el];
            }
        }
        Realty.update(entity, request.params.id).then(result=>{
            response.status(200).send("Realty bien modifié");
        })
    }

    remove(request, response){
        const Realty = new RealtyRepository();
        Realty.delete(request.params.id).then(result=>{
            response.status(200).send("Realty bien éliminé");
        })   
    }

}