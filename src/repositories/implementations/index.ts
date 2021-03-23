import { config } from '../../config/database'
import { PostgresUsersRepository } from "@src/repositories/implementations/PostgresUsersRepository";
import { PostgresPokemonsRepository } from "@src/repositories/implementations/PostgresPokemonsRepository";
import { MongoUsersRepository } from "@src/repositories/implementations/MongoUsersRepository";
import { MongoPokemonsRepository } from "@src/repositories/implementations/MongoPokemonsRepository";

const ImplementationsUserRepository = config.selected_db == "postgres" ? PostgresUsersRepository : MongoUsersRepository;
const ImplementationsPokemonsRepository = config.selected_db == "postgres" ? PostgresPokemonsRepository : MongoPokemonsRepository;

export { ImplementationsUserRepository, ImplementationsPokemonsRepository }
