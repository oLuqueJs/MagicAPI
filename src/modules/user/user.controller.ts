import { Controller, Get, Param, UseGuards, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './user.service';
import { Roles } from './roles/decorators/roles.decorators';
import { RolesGuard } from './roles/roles.guard';
import { User } from './user.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
@UseGuards(RolesGuard) 
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  // Rota pulica para retornar todos os usuários
  @Get()
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.usersService.findAll();
      if (!users || users.length === 0) {
        throw new NotFoundException('Nenhum usuário encontrado.');
      }
      return users;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar usuários.');
    }
  }

  // Rota protegida que só admin acessa
  @Get('admin/:id')
  @Roles('admin') 
  async getAdminById(@Param('id') id: string): Promise<User> {
    try {
      const user = await this.usersService.findById(id);
      if (!user) {
        throw new NotFoundException(`Usuário com ID ${id} não foi encontrado.`);
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar usuário.');
    }
  }

  // Rota para usuários ou admins
  @Get(':id')
  @Roles('user', 'admin') 
  async getUserById(@Param('id') id: string): Promise<User> {
    try {
      const user = await this.usersService.findById(id);
      if (!user) {
        throw new NotFoundException(`Usuário com ID ${id} não foi encontrado.`);
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar usuário.');
    }
  }
}
