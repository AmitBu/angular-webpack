import angular from 'angular';

class AboutCtrl {
    constructor() {
        this.name = "Amit";
    }

    changeName() {
        this.name = "Stam"
    }
}

let options =  {
    bindings: {
        data: '='
    },
    template: require('./about.html'),
    controllerAs: "about",
    controller: AboutCtrl
};

export default angular.module("app.about", [])
    .component('about', options).name;