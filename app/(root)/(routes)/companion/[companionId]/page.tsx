import prismadb from "@/lib/prismadb";
import * as React from "react";
import CompanionForm from "./components/companion-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface ICompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage: React.FC<ICompanionIdPageProps> = async ({ params }) => {
  const { userId } = auth();
  //TODO: CHECK SUBSCRIPTIONS

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
