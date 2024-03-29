import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'

import { InjectModel } from '~/transformers/model.transformer'

import { CreateGoodsDto, UpdateGoodsDto } from './goods.dto'
import { GoodsModel } from './goods.model'

@Injectable()
export class GoodsService {
  constructor(
    @InjectModel(GoodsModel)
    private readonly goodsModel: ReturnModelType<typeof GoodsModel>,
  ) {}
  public get model() {
    return this.goodsModel
  }

  async createGoods(createGoodsDto: CreateGoodsDto) {
    const newGoods = new this.goodsModel(createGoodsDto)
    return await newGoods.save()
  }

  async getOneGoodsBySecurityCode(securityCode: string) {
    return await this.goodsModel.findOne({ securityCode })
  }

  async getGoodsList() {
    const list = await this.goodsModel.find()
    const total = await this.goodsModel.countDocuments()
    return { data: list, code: 200, total }
  }

  async updateGoods(id: string, updateGoodsDto: UpdateGoodsDto) {
    return await this.goodsModel.findByIdAndUpdate(id, updateGoodsDto)
  }

  async deleteGoods(id: string) {
    return await this.goodsModel.findByIdAndDelete(id)
  }
}
