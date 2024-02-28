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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertData(email, password, firstname) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield prisma.user.create({
            data: {
                email,
                password,
                firstname
            }
        });
        console.log(user);
    });
}
let data = [
    { email: "abc@gmail.com", password: "abc", firstname: "abc" },
    { email: "xyz@gmail.com", password: "xyz", firstname: "xyz" },
    { email: "pqr@gmail.com", password: "pqr", firstname: "pqr" }
];
function insertManyData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield prisma.user.createMany({
                data: data.map(entry => ({
                    email: entry.email,
                    password: entry.password,
                    firstname: entry.firstname
                }))
            });
            console.log(users);
        }
        catch (error) {
            console.log(error);
        }
        // insertData("vanshit@gmail.com","vanshit12","vanshit");
    });
}
function findunique(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: {
                id: 2
            }
        });
        console.log(user);
    });
}
function findmany() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findMany({
            where: {
                email: {
                    contains: '@gmail.com'
                }
            }
        });
        console.log(user);
    });
}
// insertManyData(data);
// findunique(2);
// findmany();
function deleteuser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.delete({
            where: {
                id: id
            }
        });
        console.log("user deleted");
    });
}
deleteuser(2);
// insertData("vanshit@gmail.com","vanshit12","vanshit")
