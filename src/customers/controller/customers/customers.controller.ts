import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomers.dto';
import { CustomersService } from 'src/customers/service/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  @Get(':id')
  getCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerService.getUserById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ mass: 'can not found customer' });
    }
  }

  @Get('search/:id')
  searchUserById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.getUserById(id);
    if (customer) return customer;
    else
      throw new HttpException('can not found Customer', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Get('')
  getAllCustomer() {
    return this.customerService.getCustomer();
  }
}
