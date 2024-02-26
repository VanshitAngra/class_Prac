import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()
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
insertData("vanshit@gmail.com","vanshit12","vanshit");