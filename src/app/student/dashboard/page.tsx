"use client";
import ProtectedRoute from "@/app/components/protectedRoute";

const StudentDashboard = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <ProtectedRoute allowedRole="student">
        <div className="text-center text-3xl bg-gray-300 p-10 rounded-xl shadow-md">
          🎓 Welcome to the Student Dashboard
        </div>
      </ProtectedRoute>
    </div>
  );
};

export default StudentDashboard;
