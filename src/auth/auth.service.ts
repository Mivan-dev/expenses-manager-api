import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string){
    const usuarioLogin = await this.usuarioService.findByEmail(email);
    if(usuarioLogin){
        const passwordValido = await bcrypt.compare(password, usuarioLogin.password)
        if( passwordValido){
            return {token: this.jwtService.sign({sub: usuarioLogin.id, email: usuarioLogin.email})};
        } else {
            throw new UnauthorizedException('Credenciales inválidas')
        }
    } else {
        throw new UnauthorizedException('Credenciales inválidas')
    }
  }
}
