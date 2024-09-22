import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Otavio',
      password: 'plantacorrente29',
      role: 'admin',
    },
    {
      userId: 2,
      username: 'Juninho',
      password: 'abelhaturbinada88',
      role: 'user',
    },
    {
      userId: 3,
      username: 'Pedrinho',
      password: 'rodacerveja15',
      role: 'user',
    },
  ];

  // Busca todos os usuários
  async findAll(): Promise<User[]> {
    return this.users;
  }

  // Busca um usuário pelo ID
  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.userId === parseInt(id));
  }

  // Busca um usuário pelo nome de usuário (para login)
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
