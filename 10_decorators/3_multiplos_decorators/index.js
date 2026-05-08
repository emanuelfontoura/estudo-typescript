"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function a() {
    console.log('iniciou decorator A');
    return function (target, propertKey, descriptor) {
        console.log('executou decorator A');
    };
}
function b() {
    console.log('iniciou decorator B');
    return function (target, propertKey, descriptor) {
        console.log('executou decorator B');
    };
}
class User {
    executar() {
        console.log('funcao executada');
    }
}
__decorate([
    a(),
    b()
], User.prototype, "executar", null);
const user1 = new User;
user1.executar();
//# sourceMappingURL=index.js.map