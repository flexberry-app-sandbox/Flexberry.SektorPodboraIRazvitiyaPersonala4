import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОценкаEnum from '../enums/i-i-s-sektor-podbora-i-razvitiya-personala-оценка';

export default FlexberryEnum.extend({
  enum: ОценкаEnum,
  sourceType: 'IIS.Sektor_podbora_i_razvitiya_personala.Оценка'
});
