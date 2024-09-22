import { UsersService } from './user.service';
import { User } from './user.interface';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getAdminById(id: string): Promise<User>;
    getUserById(id: string): Promise<User>;
}
