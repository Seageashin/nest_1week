import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    @Post('/sign-up')
    signUp(@Body() signUpDto: SignUpDto): SignUpDto {
        const data = await this.authService.signUp(signUpDto);
        return { statusCode: HttpStatus.CREATED, message: '회원가입이 완료되었습니다.', data, };

    }
}
