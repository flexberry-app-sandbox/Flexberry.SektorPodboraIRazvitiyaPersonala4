import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет', 'Unit | Serializer | i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sektor-podbora-i-razvitiya-personala-возраст',
    'transform:i-i-s-sektor-podbora-i-razvitiya-personala-катег-сотруд',
    'transform:i-i-s-sektor-podbora-i-razvitiya-personala-оценка',
    'transform:i-i-s-sektor-podbora-i-razvitiya-personala-стаж',
    'transform:i-i-s-sektor-podbora-i-razvitiya-personala-факторы',

    'model:i-i-s-sektor-podbora-i-razvitiya-personala-анкеты',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-рекомендац',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-специалист',
    'model:i-i-s-sektor-podbora-i-razvitiya-personala-список-анкет',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
