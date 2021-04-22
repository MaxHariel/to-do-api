"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var task_entity_1 = require("../../task/model/task.entity");
var User = /** @class */ (function () {
    function User(partial) {
        Object.assign(this, partial);
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "identification");
    __decorate([
        typeorm_1.Column(),
        class_transformer_1.Exclude()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.OneToMany(function () { return task_entity_1.Task; }, function (task) { return task.user; }, { eager: true })
    ], User.prototype, "tasks");
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    ], User.prototype, "createdAt");
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    ], User.prototype, "updatedAt");
    User = __decorate([
        typeorm_1.Entity({ name: 'users' })
    ], User);
    return User;
}());
exports.User = User;
