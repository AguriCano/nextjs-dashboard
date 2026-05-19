import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";
import { SearchParams } from "next/dist/shared/lib/router/utils/parse-path";

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
