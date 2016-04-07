import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

import about from './about/about';

// Style imports
import '../style/app.css';


let appComponent = {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
};

class AppCtrl {
  constructor() {
      this.url = '';
      this.data = 'Data passed from app'
  }
}

let app = angular.module('app', [uirouter, about]);

app.config(routing)
   .component('app', appComponent)
   .controller('AppCtrl', AppCtrl);


export default app;


