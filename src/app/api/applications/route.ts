import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(applications)
}

export async function POST(req: Request) {
  const request = (await req.json());
  const { name, email, domain, workshop, description, whatsapp } = request;

  if (!name || !email || !domain || !workshop || !description) {
    return NextResponse.json({ message: 'All fields except WhatsApp are required.' }, { status: 400 })
  }

  const newApplication = await prisma.application.create({
    data: { name, email, whatsapp, domain, workshop, description },
  });
  return NextResponse.json(newApplication, { status: 201 })

}
