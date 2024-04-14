// auth.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import * as bcrypt from "bcryptjs";
import { Repository } from "typeorm";

import { UserData } from "./user.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<UserData>
  ) {}

  async authenticate(username: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ username }); // Validate user

    if (!user) {
      return false;
    }
    // Password is stored as a hash
    return bcrypt.compare(password, user.password); // Use Bcrypt to compare passwords
  }
}
