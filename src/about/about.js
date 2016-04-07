import angular from 'angular';

let options =  {
    bindings: {
        count: '='
    },
    template: require('./about.html'),
    controllerAs: "about",
    controller: function() {
        this.name = "Amit";
    }
};

export default angular.module("app.about", [])
    .component('about', options).name;