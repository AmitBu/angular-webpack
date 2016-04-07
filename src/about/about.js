import angular from 'angular';
// import appName from '../app/app';

export default
    angular.module("app.about", [])
        .component('about', {
               bindings: {
                   count: '='
               },
               template: require('./about.html'),
               controller: function() {
                   // $ngOnInit = function() {
                   //
                   // }
                   debugger;
                   this.harta = "test";
               }
        }).name;