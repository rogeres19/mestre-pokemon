import Router from "express"
import { createUserController } from "./useCases/User/CreateUser"
import { editUserController } from "./useCases/User/EditUser"
import { createPokemonController } from "./useCases/Pokemon/CreatePokemon"
import { listPokemonController } from "./useCases/Pokemon/ListPokemons"
import { editPokemonController } from "./useCases/Pokemon/EditPokemon"
import { deletePokemonController } from "./useCases/Pokemon/DeletePokemon"
import { detailsPokemonController } from "./useCases/Pokemon/DetailsPokemon"
import { authUserController } from "./useCases/User/AuthUser"
import ensureAuthenticated from './middlewares/ensureAuthenticated'



const router = Router()

router.post('/auth', (request, response) => {
    return authUserController.handle(request, response)
})

router.get('/', (request, response) => {
    return response.json("API POKEMON")
})

router.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})

//protected routers
router.use(ensureAuthenticated)


router.put('/users/:id', (request, response) => {
    return editUserController.handle(request, response)
})

router.post('/pokemons', (request, response) => {
    return createPokemonController.handle(request, response)
})


router.put('/pokemons/:id', (request, response) => {
    return editPokemonController.handle(request, response)
})

router.get('/pokemons', (request, response) => {
    return listPokemonController.handle(request, response)
})

router.get('/pokemons/:id', (request, response) => {
    return detailsPokemonController.handle(request, response)
})

router.delete('/pokemons/:id', (request, response) => {
    return deletePokemonController.handle(request, response)
})


export { router }
