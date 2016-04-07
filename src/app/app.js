import angular from 'angular';
import about from '../about/about'


import '../style/app.css';


let appComponent = {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

let runFunc = () => {

};

const MODULE_NAME = 'app';
let app = angular.module(MODULE_NAME, [about]);

app.run(runFunc)
   .component('app', appComponent)
   .controller('AppCtrl', AppCtrl);


export default app;


