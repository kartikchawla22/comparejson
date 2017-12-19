"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var _ = require("lodash");
var AppComponent = (function () {
    function AppComponent() {
        this.showjson = false;
        // onChangeJsonInput1(){
        // 	this.JsonInput1 =  JSON.stringify(this.JsonInput1, null, 2)
        //      .replace(' ', '&nbsp;')
        //      .replace('\n', '<br/>');
        // 	if(typeof(this.JsonInput1) == "object")
        // 		this.JsonInput1 = JSON.parse(this.JsonInput1);
        // 	this.JsonInput1Keys = Object.keys(this.JsonInput1);
        // }
        // onChangeJsonInput2(){
        // 	this.JsonInput2 = JSON.parse(this.JsonInput2);
        // 	this.JsonInput2Keys = Object.keys(this.JsonInput2);
        // }
    }
    AppComponent.prototype.ShowJson = function () {
        try {
            JSON.parse(this.JsonInput1) && JSON.parse(this.JsonInput2);
            this.JsonInput1 = JSON.parse(this.JsonInput1);
            this.JsonInput2 = JSON.parse(this.JsonInput2);
            var a = _.isEqual(this.JsonInput1, this.JsonInput2);
            console.log(a);
            if (a == false) {
                var b = _.intersectionWith(_.keys(this.JsonInput1), _.keys(this.JsonInput2));
                var c = _.intersectionWith(_.values(this.JsonInput1), _.values(this.JsonInput2));
                // console.log(b);
                console.log(c);
            }
            else {
                this.showjson = true;
            }
        }
        catch (e) {
            alert("json not valid");
        }
    };
    AppComponent.prototype.changes = function (object1, object2) {
        return _.transform(object1, function (result, value, key) {
            if ()
                ;
        });
    };
    AppComponent.prototype.newInputs = function () {
        this.showjson = false;
        this.JsonInput1 = "";
        this.JsonInput2 = "";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
