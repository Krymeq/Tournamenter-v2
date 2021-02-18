import { User } from "src/entities/user.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(User)
export class AccountRepository extends Repository<User> {
    
}