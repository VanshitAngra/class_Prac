import { Client } from "pg";

const client=new Client({
    connectionString:""
})
async function connect() {
    await client.connect();
}
connect();

async function createPostTable(){
    const query=`CREATE TABLE posts(
        id SERIAL PRIMARY KEY,
        postname VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255)  NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
    let result=await client.query(query);
    console.log(result);
}
// createPost();
async function insertData(postname:string,email:string,password:string){
    const query=`Insert Into posts(postname,email,password)
    VALUES($1,$2,$3);`
    const value=[postname,email,password];
    const res=await client.query(query,value);
    console.log(res);
}
insertData("vanshit","abc@gmail.com","xyz");