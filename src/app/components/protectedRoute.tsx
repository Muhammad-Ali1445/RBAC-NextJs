"use client";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRole,
}) => {
  const router = useRouter();

  
  useEffect(() => {
    const userData = localStorage.getItem("Userdata"); // 👈 matches your stored key
    const user = userData ? JSON.parse(userData) : null;

    if (!user) {
      router.push("/login");
    } else if (user.role !== allowedRole) {
      router.push("/unauthorized");
      setTimeout(() => {
        router.push(`${user.role}/dashboard`);
      }, 3000);
    }
  }, [router, allowedRole]);

  return <>{children}</>;
};

export default ProtectedRoute;
