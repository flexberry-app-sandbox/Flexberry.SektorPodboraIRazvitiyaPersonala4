import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегСотрудEnum from '../enums/i-i-s-sektor-podbora-i-razvitiya-personala-катег-сотруд';

export default FlexberryEnum.extend({
  enum: КатегСотрудEnum,
  sourceType: 'IIS.Sektor_podbora_i_razvitiya_personala.КатегСотруд'
});
