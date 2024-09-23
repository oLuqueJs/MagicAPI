import { Body, Controller, Post, Get, Param, UseGuards, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { UsersService } from './user.service';
import { Roles } from './roles/decorators/roles.decorators';
import { RolesGuard } from './roles/roles.guard';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/setMetadata.decorator';

@ApiTags('User')
@Controller('users')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly usersService: UsersService) { }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Registrar um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao criar o usuário.' })
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.usersService.create(createUserDto);
      return user;
    } catch (error) {
      throw new BadRequestException('Erro ao criar o usuário.');
    }
  }

  @Get('userslist')
  @Roles('admin')
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários.' })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado.' })
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


  @Get('admin/:id')
  @Roles('admin')
  @ApiOperation({ summary: 'Obter usuário pelo ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
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


  @Get('userslist/:id')
  @Roles('admin')
  @ApiOperation({ summary: 'Obter usuário pelo ID (geral)' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
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
