import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { Col, Row } from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
  BarElement,
} from "chart.js";
import AdminNavbar from "components/Navbars/AdminNavbar";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
  BarElement
);

// Chart Data
const performanceData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Performance",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "#1f8ef1",  // Lighter blue for lines
      borderColor: "#1f8ef1",
    },
  ],
};

const usageData = {
  labels: ["Emails", "Web Traffic", "File Transfers", "Others"],
  datasets: [
    {
      data: [300, 50, 100, 80],
      backgroundColor: ["#f5365c", "#5e72e4", "#2dce89", "#fb6340"],  // Updated to match theme colors
    },
  ],
};

const alertData = {
  labels: ["Phishing", "Malware", "DDoS", "Brute Force"],
  datasets: [
    {
      label: "Alerts",
      data: [5, 10, 3, 7],
      backgroundColor: "#5e72e4",  // Blue shade
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#fff", // White labels for dark theme
      },
    },
    title: {
      display: true,
      color: "#fff", // White title for dark theme
    },
  },
};

function User(props) {
  // Sample coordinates for devices (Replace with actual data)
  const deviceLocations = [
    { lat: 37.7749, lng: -122.4194, name: "Device 1 - San Francisco" },
    { lat: 34.0522, lng: -118.2437, name: "Device 2 - Los Angeles" },
    { lat: 40.7128, lng: -74.0060, name: "Device 3 - New York" },
  ];

  return (
    <div style={dashboardContainerStyle}>
      <Row>
      <Col md={12}>
        <AdminNavbar/>
      </Col>
        {/* Sidebar */}
        

        {/* Main Content */}
        <Col md={12}>
          <main style={mainContentStyle}>
            <h1 style={headerStyle}>User Dashboard</h1>

            {/* Performance Section */}
            

            {/* Additional Stats */}
            <Row>
              <Col md={6}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Usage Stats</h3>
                  <Doughnut
                    data={usageData}
                    options={{
                      ...chartOptions,
                      title: { display: true, text: "Usage Breakdown" },
                    }}
                  />
                </div>
              </Col>
              <Col md={6}>
              <Row>
              <Col md={12}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Alerts</h3>
                  <Bar
                    data={alertData}
                    options={{
                      ...chartOptions,
                      title: { display: true, text: "Alert Types" },
                    }}
                  />
                </div>
                </Col>
                </Row>
                <Row>
              <Col md={12}>
                <div style={chartContainerStyle}>
                  <h2 style={chartTitleStyle}>Performance Overview</h2>
                  <Line
                    data={performanceData}
                    options={{
                      ...chartOptions,
                      title: { display: true, text: "Performance Data" },
                    }}
                  />
                </div>
              </Col>
            </Row>
              </Col>
              <Col md={12}>
                <div style={mapContainerStyle}>
                  <h3 style={chartTitleStyle}>Current Logins Location</h3>
                  <MapContainer
                    center={[37.7749, -122.4194]} // Centered on San Francisco
                    zoom={4}
                    style={{ height: "400px", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {deviceLocations.map((device, index) => (
                      <Marker key={index} position={[device.lat, device.lng]}>
                        <Popup>{device.name}</Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </Col>
            </Row>

            {/* Tips, Alerts, and Map */}
            <Row>
              <Col md={6}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Security Tips</h3>
                  <ul style={listStyle}>
                    <li>Use strong, unique passwords for each account.</li>
                    <li>Enable two-factor authentication where possible.</li>
                    <li>Regularly update your software and antivirus.</li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Recent Alerts</h3>
                  <ul style={listStyle}>
                    <li>5 Phishing attempts detected this week.</li>
                    <li>10 Malware alerts in the last 24 hours.</li>
                    <li>3 DDoS attacks mitigated today.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </main>
        </Col>
      </Row>
    </div>
  );
}

// Styles
const dashboardContainerStyle = {
  backgroundColor: "#1c2333", // Darker background
  color: "#c2c7d0", // Slightly lighter text color
};

const sidebarStyle = {
  height: "100vh",
  backgroundColor: "#00a6ed", // Blue sidebar
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const sidebarHeaderStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const sidebarTextStyle = {
  color: "#fff", // White text for sidebar
};

const dashboardIconStyle = {
  fontSize: "50px",
  color: "#fff", // White icon
  marginBottom: "10px",
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const iconButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "30px",
  color: "#fff", // White icons in sidebar
  cursor: "pointer",
};

const mainContentStyle = {
  padding: "20px",
  boxSizing: "border-box",
};

const chartContainerStyle = {
  backgroundColor: "#252f3f", // Dark card background
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const chartTitleStyle = {
  color: "#fff", // White titles
};

const infoBoxStyle = {
  backgroundColor: "#252f3f", // Dark card background
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const mapContainerStyle = {
  backgroundColor: "#252f3f", // Dark card background
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const headerStyle = {
  color: "#fff", // White header text
};

const listStyle = {
  color: "#c2c7d0", // Lighter text for lists
};

export default User;
