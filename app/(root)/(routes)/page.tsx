import SearchInput from "@/components/Layout/Search-Input";
import Categories from "@/components/Layout/categories";
import Companions from "@/components/Layout/companions";
import prismadb from "@/lib/prismadb";
import * as React from "react";

interface IRootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage: React.FC<IRootPageProps> = async ({ searchParams }) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });
  const categories = await prismadb.category.findMany();
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  );
};

export default RootPage;
