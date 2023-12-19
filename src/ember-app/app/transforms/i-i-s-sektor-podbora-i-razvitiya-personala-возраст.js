import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВозрастEnum from '../enums/i-i-s-sektor-podbora-i-razvitiya-personala-возраст';

export default FlexberryEnum.extend({
  enum: ВозрастEnum,
  sourceType: 'IIS.Sektor_podbora_i_razvitiya_personala.Возраст'
});
