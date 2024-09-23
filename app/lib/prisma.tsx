import { PrismaClient } from "@prisma/client";



const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
}
let prisma: PrismaClient;

if(!globalForPrisma.prisma){
    globalForPrisma.prisma = new PrismaClient();
}

prisma = globalForPrisma.prisma

export default prisma;