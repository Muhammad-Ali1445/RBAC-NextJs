"use client";

import students from "../../students.json";
import { useParams, useRouter } from "next/navigation";

const StudentDetail = () => {
  const { id } = useParams();
  const router = useRouter();

  const student = students.find((s) => s.id === id);
  console.log(student);

  return (
    <div className="flex flex-col items-center mt-20">
    
      <div className="bg-gray-300 shadow-lg rounded-2xl p-6 w-96 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">{student?.name}</h1>
        <p>
          <strong>ID:</strong> {student?.id}
        </p>
        <p>
          <strong>Shift:</strong> {student?.shift}
        </p>
        <p>
          <strong>CGPA:</strong> {student?.cgpa}
        </p>
        <p>
          <strong>Discipline:</strong> {student?.discipline}
        </p>
        
        <button className="bg-amber-500 px-4 py-2 rounded-md  text-white mt-5 hover:bg-amber-600" onClick={()=>router.push('/generalDashboard')}>
          Back to Dashboard
        </button>
       
      </div>
    </div>
  );
};

export default StudentDetail;

// "use client";
// import students from "../../students.json";
// import { useParams, useRouter } from "next/navigation";

// const StudentDetails = () => {
//   const { id } = useParams();
//   const router = useRouter();

//   const student = students.find((s) => s.id === id);

//   if (!student) {
//     return (
//       <div className="text-center mt-10">
//         <h2 className="text-red-600 font-semibold text-lg">
//           Student not found
//         </h2>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//           onClick={() => router.push("/generalDashboard")}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center mt-20">
//       <div className="bg-gray-200 shadow-lg rounded-2xl p-6 w-96">
//         <h1 className="text-2xl font-bold text-center mb-4">
//           {student.name}
//         </h1>
// <p><strong>ID:</strong> {student.id}</p>
// <p><strong>Shift:</strong> {student.shift}</p>
// <p><strong>CGPA:</strong> {student.cgpa}</p>
// <p><strong>Discipline:</strong> {student.discipline}</p>

//         <button
//           className="mt-5 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600"
//           onClick={() => router.push("/generalDashboard")}
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentDetails;
