import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <Link
        className="rounded-xl bg-white p-10 text-center shadow cursor-pointer"
        href={"/products"}
      >
        <h1 className="text-3xl font-bold text-gray-900">
          Next.js + MSSQL CRUD
        </h1>

        <p className="mt-3 text-gray-600">
          Pages Router + TypeScript + Tailwind CSS
        </p>
      </Link>
    </main>
  );
}

export default HomePage