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

import { CreateGoodsDto, QueryGoodsDto, UpdateGoodsDto } from './goods.dto'
import { GoodsService } from './goods.service'

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get('')
  async getList(@Query() paginationDto: QueryGoodsDto) {
    return await this.goodsService.getGoodsList(paginationDto)
  }

  @Post()
  async create(@Body() createGoodsDto: CreateGoodsDto) {
    return await this.goodsService.createGoods(createGoodsDto)
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return await this.goodsService.getOneGoods(id)
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
