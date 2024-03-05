import { Body, Controller, Get, Post } from '@nestjs/common'

import { AuthService } from '../auth/auth.service'
import { LoginDto } from './user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('/')
  async getUsers() {
    return []
  }

  @Post('/create')
  async created(@Body() createDto) {
    return await this.userService.createMaster(createDto)
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto
    return await this.userService.login(username, password)
  }

  @Get('/userInfo')
  async userInfo() {
    return await this.userService.getMasterInfo()
  }
}
