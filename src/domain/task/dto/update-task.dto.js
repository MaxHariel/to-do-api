"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateTaskDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_task_dto_1 = require("./create-task.dto");
var UpdateTaskDto = /** @class */ (function (_super) {
    __extends(UpdateTaskDto, _super);
    function UpdateTaskDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateTaskDto;
}(mapped_types_1.PartialType(create_task_dto_1.CreateTaskDto)));
exports.UpdateTaskDto = UpdateTaskDto;
