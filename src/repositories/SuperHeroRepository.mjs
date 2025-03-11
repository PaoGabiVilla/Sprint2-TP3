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
        
     /* //Se declara una variable llamada filtrar que es un objeto vacío {}.Este objeto servirá como filtro para la consulta en MongoDB.
        const filtrar = {};
        //$regex: valor: "permite buscar valores que contengan la palabra, sin importar en qué parte del texto aparezca."
        //$options: 'i': Hace la búsqueda insensible a mayúsculas y minúsculas.
        filtrar[atributo] = {$regex: valor,$option:'i'};//Búsqueda insencible a mayúsculas
        return await superHero.find(filtrar);*/

    }

    async obtenerMayoresDe30() {
        // RESOLVER
        /*{ edad: { $gt: 30 } }:Es el filtro de búsqueda en MongoDB.
        { $gt: 30 }:$gt (greater than) es un operador de MongoDB que significa "mayor que".*/
        return await superHero.find({edad: {$gt:30}});
        }
    }

export default new SuperHeroRepository();
