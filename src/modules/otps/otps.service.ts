import { Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';

@Injectable()
export class OtpsService {
  create(createOtpDto: CreateOtpDto) {
    return 'This action adds a new otp'+    createOtpDto;
  }

  findAll() {
    return `This action returns all otps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otp`;
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return `This action updates a #${id} otp`+updateOtpDto;
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
