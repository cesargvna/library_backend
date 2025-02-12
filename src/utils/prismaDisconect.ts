import { PrismaClient } from "@prisma/client";


export async function disconnectPrisma(prisma: PrismaClient): Promise<void> {
  await prisma.$disconnect();
}

export default disconnectPrisma;
