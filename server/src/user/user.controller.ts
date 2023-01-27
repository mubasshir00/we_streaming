import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async registerUser(@Body() createUserDto: CreateUserDto, @Res() res: any) {
    const result = await this.userService.createUser(createUserDto);
    return res.status(200).json({
      status: true,
      status_message: 'Success',
    });
  }
}
