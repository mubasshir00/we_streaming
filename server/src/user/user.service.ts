import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entity/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<any>,
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { email, first_name, last_name, password, user_name } =
        createUserDto;
      const user = new User();
      const date = Date.now();
      user.email = email;
      user.password = password;
      user.first_name = first_name;
      user.last_name = last_name;
      user.user_name = user_name;
      user.user_id = first_name + date;

      const newUser = await this.userRepository.create(user);
      const result = await this.userRepository.save(newUser);
      console.log({ result });
    } catch (err) {
      console.log({ err });
    }
  }
}
