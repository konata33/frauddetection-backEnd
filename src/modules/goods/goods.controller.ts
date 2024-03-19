import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'

import { HTTPDecorators } from '~/common/decorators/http.decorator'

import { CreateGoodsDto, QueryGoodsDto, UpdateGoodsDto } from './goods.dto'
import { GoodsService } from './goods.service'

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get('')
  @HTTPDecorators.Bypass
  async getList(@Query() paginationDto: QueryGoodsDto) {
    return await this.goodsService.getGoodsList()
  }

  @Post()
  async create(@Body() createGoodsDto: CreateGoodsDto) {
    return await this.goodsService.createGoods(createGoodsDto)
  }

  @Get('/:securityCode')
  async getOne(@Param('securityCode') securityCode: string) {
    return await this.goodsService.getOneGoodsBySecurityCode(securityCode)
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateGoodsDto: UpdateGoodsDto,
  ) {
    return await this.goodsService.updateGoods(id, updateGoodsDto)
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.goodsService.deleteGoods(id)
  }
}
