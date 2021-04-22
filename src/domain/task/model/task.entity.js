"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Task = void 0;
var task_constants_1 = require("../constants/task.constants");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../user/model/user.entity");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], Task.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'enum', "enum": task_constants_1.TaskStatus })
    ], Task.prototype, "status");
    __decorate([
        typeorm_1.Column()
    ], Task.prototype, "name");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.tasks; })
    ], Task.prototype, "user");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    ], Task.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    ], Task.prototype, "updatedAt");
    Task = __decorate([
        typeorm_1.Entity({ name: 'tasks' })
    ], Task);
    return Task;
}());
exports.Task = Task;
