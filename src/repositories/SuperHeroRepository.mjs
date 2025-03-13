import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        // RESOLVER
        
                //Se declara una variable llamada filtrar que es un objeto vacío {}.
                //Este objeto servirá como filtro para la consulta en MongoDB.
        
        const filtrar = {};
        
        filtrar[atributo] = {$regex: valor,$options:'i'};
                //Búsqueda insencible a mayúsculas
        return await superHero.find(filtrar);

    }

    async obtenerMayoresDe30() {
        // RESOLVER
        return await superHero.find({ edad: { $gt: 30 } });
    }
}

export default new SuperHeroRepository();
