import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSektor_podbora_i_razvitiya_personalaАнкетыLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l';
import IISSektor_podbora_i_razvitiya_personalaПричинУвольнLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l';
import IISSektor_podbora_i_razvitiya_personalaСпециалистLForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l';
import IISSektor_podbora_i_razvitiya_personalaАнкетыEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e';
import IISSektor_podbora_i_razvitiya_personalaПричинУвольнEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-e';
import IISSektor_podbora_i_razvitiya_personalaСпециалистEForm from './forms/i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e';
import IISSektor_podbora_i_razvitiya_personalaАнкетыModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-анкеты';
import IISSektor_podbora_i_razvitiya_personalaПричинУвольнModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн';
import IISSektor_podbora_i_razvitiya_personalaРекомендацModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац';
import IISSektor_podbora_i_razvitiya_personalaСпециалистModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-специалист';
import IISSektor_podbora_i_razvitiya_personalaСписокАнкетModel from './models/i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты': IISSektor_podbora_i_razvitiya_personalaАнкетыModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн': IISSektor_podbora_i_razvitiya_personalaПричинУвольнModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац': IISSektor_podbora_i_razvitiya_personalaРекомендацModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-специалист': IISSektor_podbora_i_razvitiya_personalaСпециалистModel,
    'i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет': IISSektor_podbora_i_razvitiya_personalaСписокАнкетModel
  },

  'application-name': 'Sektor_podbora_i_razvitiya_personala',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sektor_podbora_i_razvitiya_personala',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sektor_podbora_i_razvitiya_personala',
          title: 'Sektor_podbora_i_razvitiya_personala'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        сектор: {
          caption: 'Сектор',
          title: 'Сектор',
          'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l': {
            caption: 'Специалист',
            title: ''
          }
        },
        увольнение: {
          caption: 'Увольнение',
          title: 'Увольнение',
          'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l': IISSektor_podbora_i_razvitiya_personalaАнкетыLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l': IISSektor_podbora_i_razvitiya_personalaПричинУвольнLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l': IISSektor_podbora_i_razvitiya_personalaСпециалистLForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e': IISSektor_podbora_i_razvitiya_personalaАнкетыEForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-e': IISSektor_podbora_i_razvitiya_personalaПричинУвольнEForm,
    'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e': IISSektor_podbora_i_razvitiya_personalaСпециалистEForm
  },

});

export default translations;
