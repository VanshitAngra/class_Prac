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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://vanshit1519.be21:Aw6HFIzgsT8k@ep-wild-lab-a19bmhmh.ap-southeast-1.aws.neon.tech/vanshit?sslmode=require"
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
    });
}
connect();
function createPostTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `CREATE TABLE posts(
        id SERIAL PRIMARY KEY,
        postname VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255)  NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;
        let result = yield client.query(query);
        console.log(result);
    });
}
// createPost();
function insertData(postname, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `Insert Into posts(postname,email,password)
    VALUES($1,$2,$3);`;
        const value = [postname, email, password];
        const res = yield client.query(query, value);
        console.log(res);
    });
}
insertData("vanshit", "abc@gmail.com", "xyz");
