"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_entity_1 = require("./domain/user/model/user.entity");
var user_module_1 = require("./domain/user/user.module");
var auth_module_1 = require("./domain/auth/auth.module");
var task_entity_1 = require("./domain/task/model/task.entity");
var task_module_1 = require("./domain/task/task.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({ envFilePath: '.env' }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: process.env.TYPEORM_CONNECTION,
                    host: process.env.TYPEORM_HOST,
                    port: parseInt(process.env.TYPEORM_PORT),
                    username: process.env.TYPEORM_USERNAME,
                    password: process.env.TYPEORM_PASSWORD,
                    database: process.env.TYPEORM_DATABASE,
                    entities: [user_entity_1.User, task_entity_1.Task]
                }),
                user_module_1.UserModule,
                task_module_1.TaskModule,
                auth_module_1.AuthModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
