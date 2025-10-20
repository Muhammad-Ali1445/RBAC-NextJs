import Link from "next/link";

const Dashboard = async () => {
  return (
    <div className="container mx-auto my-40 ">
      <h1 className="font-bold text-center">
        Click the below btn to see the specific Student Data
      </h1>
      <div className="flex justify-center gap-5 mt-4">
        {[1, 2, 3, 4, 5].map((id) => (
          <Link key={id} href={`/generalDashboard/${id}`}>
            <button className="bg-amber-500 px-6 py-3 rounded-md hover:bg-amber-600">
              Student {id}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
