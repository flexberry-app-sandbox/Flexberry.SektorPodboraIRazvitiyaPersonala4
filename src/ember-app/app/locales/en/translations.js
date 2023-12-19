import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sektor_podbora_i_razvitiya_personala',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sektor_podbora_i_razvitiya_personala',
          title: 'Sektor_podbora_i_razvitiya_personala'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
