"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectEvent {
    constructor() {
        this.event = 'connecting';
        this.listener = this.onConnect;
    }
    onConnect(io, socket) {
        return __awaiter(this, void 0, void 0, function* () {
            socket.user = {
                _id: new mongoose_1.default.Types.ObjectId(123123),
                firstname: '123',
                lastname: '123',
                password: '123',
                email: '123',
            };
            io.socket_list = [...io.socket_list, socket];
        });
    }
}
exports.default = new ConnectEvent();
