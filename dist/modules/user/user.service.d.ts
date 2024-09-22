import { User } from './user.interface';
export declare class UsersService {
    private readonly users;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | undefined>;
    findOne(username: string): Promise<User | undefined>;
}
