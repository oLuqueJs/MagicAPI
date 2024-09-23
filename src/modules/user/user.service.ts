import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  // Register
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({
      userId: await this.userModel.countDocuments() + 1,
      ...createUserDto,
      role: createUserDto.role || 'user',
    });
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findOne({ userId: parseInt(id) }).exec();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }
}
