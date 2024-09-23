import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined;
// };

// if (!globalForPrisma.prisma) {
//   globalForPrisma.prisma = new PrismaClient();
// }
// prisma = globalForPrisma.prisma;
const prisma: PrismaClient = (() => {
  const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
  };

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }

  return globalForPrisma.prisma;
})();


export default prisma;