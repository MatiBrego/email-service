-- DropForeignKey
ALTER TABLE "EmailsByDay" DROP CONSTRAINT "EmailsByDay_userId_fkey";

-- AddForeignKey
ALTER TABLE "EmailsByDay" ADD CONSTRAINT "EmailsByDay_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
