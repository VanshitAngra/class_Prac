import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()

interface userData{
    email:string;
    password:string;
    firstname:string;
}
async function insertData(email:string,password:string,firstname:string) {
    let user=await prisma.user.create({
        data:{
            email,
            password,
            firstname
        }
    })
    console.log(user);
}
let data=[
    {email:"abc@gmail.com",password:"abc",firstname:"abc"},
    {email:"xyz@gmail.com",password:"xyz",firstname:"xyz"},
    {email:"pqr@gmail.com",password:"pqr",firstname:"pqr"}
]
async function insertManyData(data:userData[])
{
    try{
        const users=await prisma.user.createMany({
            data:data.map(entry=>({
                email:entry.email,
                password:entry.password,
                firstname:entry.firstname
            }))
        })
        console.log(users);
    }
    catch(error){
        console.log(error);
}
// insertData("vanshit@gmail.com","vanshit12","vanshit");
}
async function findunique(id:number) {
    const user=await prisma.user.findUnique({
        where:{
            id:2
        }
    })
    console.log(user);
}
async function findmany() {
    const user=await prisma.user.findMany({
        where:{
            email:{
                contains:'@gmail.com'
            }
        }
    })
    console.log(user);
}
// insertManyData(data);
// findunique(2);
// findmany();
async function deleteuser(id: number){
    const user=await prisma.user.delete({
        where:{
            id:id
            }
    });
    console.log("user deleted");
}
deleteuser(2);
// insertData("vanshit@gmail.com","vanshit12","vanshit")
