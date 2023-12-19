import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет+анкеты':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номер',
            required: false,
            relationName: 'анкеты',
            projection: 'АнкетыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
