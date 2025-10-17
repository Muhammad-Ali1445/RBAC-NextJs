import ProtectedRoute from "@/app/components/protectedRoute";

const TeacherDashBoard = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <ProtectedRoute allowedRole="teacher">
        <div className="text-center text-3xl bg-gray-300">
          👩‍🏫 Welcome to the Teacher DashBoard
        </div>
      </ProtectedRoute>
    </div>
  );
};

export default TeacherDashBoard;
