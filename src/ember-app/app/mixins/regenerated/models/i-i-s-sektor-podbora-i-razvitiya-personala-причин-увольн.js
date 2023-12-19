import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date', { defaultValue() { return new Date(); } }),
  специалист: DS.belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-специалист', { inverse: null, async: false }),
  список: DS.hasMany('i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет', { inverse: 'причинУвольн', async: false }),
  рекомендации: DS.hasMany('i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац', { inverse: 'причинУвольн', async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  рекомендации: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн.validations.рекомендации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричинУвольнE', 'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    список: hasMany('i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет', 'Список анкет', {
      анкеты: belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты', 'Номер анкеты', {
        главнПричин: attr('Причина увольнения', { index: 1 }),
        относКатСотр: attr('Категория сотрудника', { index: 2 }),
        коммент: attr('Комментарий сотрудника', { index: 3 })
      }, { index: 0, displayMemberPath: 'номер' })
    }),
    рекомендации: hasMany('i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац', 'Рекомендации', {
      специалисты: attr('Специалисты', { index: 0 }),
      руководители: attr('Руководители', { index: 1 }),
      рабочие: attr('Рабочие', { index: 2 })
    })
  });

  modelClass.defineProjection('ПричинУвольнL', 'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн', {
    датаЗаполн: attr('Дата заполнения', { index: 0 })
  });
};
