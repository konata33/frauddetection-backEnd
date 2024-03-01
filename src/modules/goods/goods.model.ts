import { modelOptions, prop } from '@typegoose/typegoose'

import { BaseModel } from '~/shared/model/base.model'

@modelOptions({ options: { customName: 'goods' } })
export class GoodsModel extends BaseModel {
  @prop({ require: true, trim: true })
  name: string

  @prop({ required: true, trim: true })
  securityCode: string
}
