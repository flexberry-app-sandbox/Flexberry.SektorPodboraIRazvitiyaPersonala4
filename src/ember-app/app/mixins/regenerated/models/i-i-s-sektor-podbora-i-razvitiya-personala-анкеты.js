import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  возрастСотруд: DS.attr('i-i-s-sektor-podbora-i-razvitiya-personala-возраст'),
  главнПричин: DS.attr('i-i-s-sektor-podbora-i-razvitiya-personala-факторы'),
  датаЗаполн: DS.attr('date'),
  какойСтаж: DS.attr('i-i-s-sektor-podbora-i-razvitiya-personala-стаж'),
  коммент: DS.attr('string'),
  номер: DS.attr('number'),
  относКатСотр: DS.attr('i-i-s-sektor-podbora-i-razvitiya-personala-катег-сотруд'),
  оценРабот: DS.attr('i-i-s-sektor-podbora-i-razvitiya-personala-оценка'),
  специалист: DS.belongsTo('i-i-s-sektor-podbora-i-razvitiya-personala-специалист', { inverse: null, async: false })
});

export let ValidationRules = {
  возрастСотруд: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.возрастСотруд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  главнПричин: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.главнПричин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  какойСтаж: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.какойСтаж.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  коммент: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.коммент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  относКатСотр: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.относКатСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оценРабот: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.оценРабот.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-sektor-podbora-i-razvitiya-personala-анкеты.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетыE', 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты', {
    номер: attr('Номер', { index: 0 }),
    датаЗаполн: attr('Дата заполнения', { index: 1 }),
    главнПричин: attr('Главная причина ухода сотрудника', { index: 2 }),
    оценРабот: attr('В целом оценивает работу увол. сотрудник', { index: 3 }),
    относКатСотр: attr('Категория сотрудников', { index: 4 }),
    какойСтаж: attr('Стаж', { index: 5 }),
    возрастСотруд: attr('Возраст сотрудника', { index: 6 }),
    коммент: attr('Комментарии уволившегося сотрудника', { index: 7 })
  });

  modelClass.defineProjection('АнкетыL', 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты', {
    номер: attr('Номер', { index: 0 }),
    датаЗаполн: attr('Дата заполнения', { index: 1 }),
    главнПричин: attr('Главная причина', { index: 2 }),
    оценРабот: attr('В целом оценивает', { index: 3 }),
    относКатСотр: attr('Категория сотрудника', { index: 4 }),
    какойСтаж: attr('Стаж', { index: 5 }),
    возрастСотруд: attr('Возраст', { index: 6 }),
    коммент: attr('Комментарии', { index: 7 })
  });
};
