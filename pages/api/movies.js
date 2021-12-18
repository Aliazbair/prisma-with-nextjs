/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);
  // console.log(data);

  const createMovie = await prisma.movie.create({ data: { data } });
  res.json(createMovie);
};
