import { PrismaClient } from "@prisma/client";



const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
}
// eslint-disable-next-line prefer-const
let prisma: PrismaClient;

if(!globalForPrisma.prisma){
    globalForPrisma.prisma = new PrismaClient();
}

prisma = globalForPrisma.prisma

export default prisma;