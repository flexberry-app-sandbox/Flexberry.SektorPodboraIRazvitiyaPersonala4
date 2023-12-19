import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-анкеты-e/new' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-причин-увольн-e/new' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-специалист-l');
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e/:id' });
  this.route('i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e.new',
  { path: 'i-i-s-sektor-podbora-i-razvitiya-personala-специалист-e/new' });
});

export default Router;
