import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import { format } from "date-fns";
import Table from "./Table/Table";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Admin() {
  const [dashboardData, setDashboardData] = useState({
    linkClicks: 0,
    totalLinks: 0,
    todayVisit: 0,
  });

  const [userData, setUserData] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [deviceData, setDeviceData] = useState({});

  useEffect(() => {
    const email = localStorage.getItem("Email");
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/url/userinfo/${email}`
        );
        const urls = res.data.UserInfo || [];

        // Device breakdown logic
        const deviceCount = {};

        urls.forEach((url) => {
          url.visitHistory.forEach((visit) => {
            const type = visit.deviceType.toLowerCase();
            deviceCount[type] = (deviceCount[type] || 0) + 1;
          });
        });

        setDeviceData(deviceCount);

        // Dashboard calculations
        let totalClicks = 0;
        let todayClicks = 0;
        const today = format(new Date(), "yyyy-MM-dd");

        const dateVisitMap = {};

        urls.forEach((item) => {
          const history = item.visitHistory || [];
          totalClicks += history.length;

          history.forEach((entry) => {
            const visitDate = format(new Date(entry.timestamp), "yyyy-MM-dd");
            if (visitDate === today) todayClicks += 1;

            if (!dateVisitMap[visitDate]) {
              dateVisitMap[visitDate] = 1;
            } else {
              dateVisitMap[visitDate]++;
            }
          });
        });

        const dateDataFormatted = Object.entries(dateVisitMap)
          .map(([date, count]) => ({
            date: format(new Date(date), "dd MMM"),
            totalEnteries: count,
          }))
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );

        setDashboardData({
          linkClicks: totalClicks,
          totalLinks: urls.length,
          todayVisit: todayClicks,
        });

        setUserData(urls);
        setDateData(dateDataFormatted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center">
        <div className="w-4/5">
          <div className="flex flex-col items-center">
            <p className="font-WorkSans text-4xl my-5 text-center">
              Analytics Dashboard
            </p>
            <p className="backdrop-filter shadow-xl bg-gray-400 backdrop-blur-md bg-opacity-10 w-full mt-4 p-4 rounded-xl text-black text-2xl font-medium">
              Dashboard
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-white mt-10 text-xl font-WorkSans">
            <StatCard
              title="Link Clicks"
              value={dashboardData.linkClicks}
              icon={<PersonIcon fontSize="large" />}
            />
            <StatCard
              title="Total Links"
              value={dashboardData.totalLinks}
              icon={<CurrencyRupeeIcon fontSize="large" />}
            />
            <StatCard
              title="People Visits Link Today"
              value={dashboardData.todayVisit}
              icon={<CalendarMonthIcon fontSize="large" />}
            />
          </div>

          {/* Charts */}
          <div className="flex flex-col mt-10 gap-10">
            <p className="text-center font-WorkSans text-2xl font-medium">
              Daily Clicks Overview
            </p>
            <div className="flex max-xl:flex-col max-xl:gap-7 mb-16 items-center">
              <div className="w-full xl:max-w-screen-sm text-white h-80">
                <Line
                  data={{
                    labels: dateData.map((entry) => entry.date),
                    datasets: [
                      {
                        label: "Clicks",
                        data: dateData.map((entry) => entry.totalEnteries),
                        backgroundColor: "rgba(6, 79, 240, 0.2)",
                        borderColor: "#064FF0",
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    elements: { line: { tension: 1 } },
                    plugins: {
                      title: {
                        display: true,
                        text: "Line Chart",
                        color: "#22c55e",
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="w-full xl:max-w-screen-sm h-80">
                <Doughnut
                  data={{
                    labels: Object.keys(deviceData),
                    datasets: [
                      {
                        label: "Device Clicks",
                        data: Object.values(deviceData),
                        backgroundColor: Object.keys(deviceData).map(
                          () =>
                            `rgba(${Math.floor(
                              Math.random() * 256
                            )}, ${Math.floor(
                              Math.random() * 256
                            )}, ${Math.floor(Math.random() * 256)}, 0.8)`
                        ),
                        borderColor: "rgba(0,0,0,0.5)",
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: "Device Type Click Ratio",
                        color: "#22c55e",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <Table userData={userData} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, icon }) => (
  <div
    title={title}
    className="flex justify-between backdrop-filter hover:scale-105 ease-in-out transition-all cursor-pointer bg-gray-400 backdrop-blur-md bg-opacity-10 text-black shadow-xl rounded-xl w-full mr-5 p-4"
  >
    <div className="flex flex-col justify-between">
      <p className="font-medium">{title}</p>
      <p className="text-white">{value}</p>
    </div>
    <div className="flex items-center">{icon}</div>
  </div>
);

export default Admin;
