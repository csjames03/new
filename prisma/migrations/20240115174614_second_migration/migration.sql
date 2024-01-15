-- CreateTable
CREATE TABLE "Donates" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "bloodId" TEXT NOT NULL,

    CONSTRAINT "Donates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requests" (
    "id" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "progress" TEXT NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestedBags" INTEGER NOT NULL,
    "requestedBlood" TEXT NOT NULL,
    "requestedBy" TEXT NOT NULL,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodBank" (
    "id" TEXT NOT NULL,
    "bloods" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "rh" TEXT NOT NULL,

    CONSTRAINT "BloodBank_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donates" ADD CONSTRAINT "Donates_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donates" ADD CONSTRAINT "Donates_bloodId_fkey" FOREIGN KEY ("bloodId") REFERENCES "Blood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_requestedBlood_fkey" FOREIGN KEY ("requestedBlood") REFERENCES "Blood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_requestedBy_fkey" FOREIGN KEY ("requestedBy") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
