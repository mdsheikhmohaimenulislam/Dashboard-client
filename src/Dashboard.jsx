import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const nameFromLocal = localStorage.getItem("userName");

  useEffect(() => {
    fetch("https://dashboard-server-3lrv.onrender.com/user")
      .then((res) => res.json())
      .then((data) => {
        // Replace name from dummy data with local name if present
        if (nameFromLocal) data.name = nameFromLocal;
        setUserData(data);
      });
  }, []);

  if (!userData) return <div className="flex justify-center mt-60 "><span className="loading loading-dots loading-lg"></span></div>;

  // console.log(userData);

  return (
    <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-3 m-10">
      {userData.map((data, index) => (
        <DashboardCard key={index} data={data} />
      ))}
    </div>

    // <div>

    // </div>
  );
}
