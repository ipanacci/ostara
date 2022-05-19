const RealtyTypeRepository = require('../repository/RealtyTypeRepository');

module.exports = class RealtyTypeController{

    getAll(request, response) {
        const RealtyType = new RealtyTypeRepository(); //
        RealtyType.getAll().then(types => { //nel getAll puoi mettere l'offset che ricavi dalla pagina
            response.status(200).json(types);
            // response.status(200).json(dataResponse(users, page, ...)); page la trovi in request.query.page
        });
    }

    get(request, response) {
        const RealtyType = new RealtyTypeRepository();
        RealtyType.get(request.params.id).then(result=>{
            if (result.length === 0){
                response.status(404).send("User not found");
            }
            else {
                response.status(200).json(result);
            }
        })
    }

    add(request, response) {
        const RealtyType = new RealtyTypeRepository();
        let entity={
            title : request.body.title,
        };
        RealtyType.insert(entity).then(result=>{
            response.status(201).send(" Realty Type bien ajouté");
        })
    }

    edit(request, response) {
        const RealtyType = new RealtyTypeRepository();
        let entity={};
        let fields= ['title'];
        for (let el of fields){
            if (request.body[el]){
                entity[el]=request.body[el];
            }
        }
        RealtyType.update(entity, request.params.id).then(result=>{
            response.status(200).send("Realty Type bien modifié");
        })
    }

    remove(request, response){
        const RealtyType = new RealtyTypeRepository();
        RealtyType.delete(request.params.id).then(result=>{
            response.status(200).send("Realty type bien éliminé");
        })   
    }


    
}