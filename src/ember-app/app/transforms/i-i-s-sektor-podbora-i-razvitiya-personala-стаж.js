import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтажEnum from '../enums/i-i-s-sektor-podbora-i-razvitiya-personala-стаж';

export default FlexberryEnum.extend({
  enum: СтажEnum,
  sourceType: 'IIS.Sektor_podbora_i_razvitiya_personala.Стаж'
});
