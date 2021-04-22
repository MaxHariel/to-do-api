"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskModule = void 0;
var common_1 = require("@nestjs/common");
var task_service_1 = require("./task.service");
var task_controller_1 = require("./task.controller");
var typeorm_1 = require("@nestjs/typeorm");
var task_entity_1 = require("./model/task.entity");
var user_module_1 = require("../user/user.module");
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task]), user_module_1.UserModule],
            controllers: [task_controller_1.TaskController],
            providers: [task_service_1.TaskService]
        })
    ], TaskModule);
    return TaskModule;
}());
exports.TaskModule = TaskModule;
