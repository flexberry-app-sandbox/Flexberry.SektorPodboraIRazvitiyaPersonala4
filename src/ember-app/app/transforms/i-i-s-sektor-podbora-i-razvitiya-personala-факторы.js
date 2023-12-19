import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ФакторыEnum from '../enums/i-i-s-sektor-podbora-i-razvitiya-personala-факторы';

export default FlexberryEnum.extend({
  enum: ФакторыEnum,
  sourceType: 'IIS.Sektor_podbora_i_razvitiya_personala.Факторы'
});
