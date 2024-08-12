import { PrismaClient, Row, Prisma } from '@prisma/client';
import { Assert } from 'ts-runtime-checks';

export class DbBaseClient<T, CreateInput, UpdateInput> {
  protected prisma: PrismaClient;
  protected model: any;

  constructor(prisma: PrismaClient, model: string) {
    this.prisma = prisma;
    this.model = this.prisma[model as keyof PrismaClient];
  }

  async create(data: Assert<CreateInput>): Promise<T> {
    return this.model.create({ data })
  }

  async findAll(): Promise<T[]> {
    return this.model.findMany()
  }

  async findOne(id: number): Promise<T | null> {
    return this.model.findUnique({ where: { id } })
  }

  async update(id: number, data: Assert<UpdateInput>): Promise<T> {
    return this.model.update({
      where: { id },
      data,
    })
  }

  async delete(id: number): Promise<T> {
    return this.model.delete({ where: { id } })
  }
}

// Copy the exported class below to extend factory with dbBaseClients for other models
export class RowService extends DbBaseClient<Row, Prisma.RowCreateInput, Prisma.RowUpdateInput> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'row')
  }
}

export function createRowService(){
  const prisma = new PrismaClient();
  const rowService = new RowService(prisma);
  return rowService;
}
