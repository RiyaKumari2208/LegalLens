const { PrismaClient } = require("@prisma/client");

const api = new PrismaClient();

module.exports = api;
