import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { Col, Row, Table } from "reactstrap";
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
const systemHealthData = {
  labels: ["CPU", "Memory", "Disk"],
  datasets: [
    {
      label: "Usage (%)",
      data: [65, 75, 50],
      backgroundColor: ["#1f8ef1", "#5e72e4", "#fb6340"],
    },
  ],
};

const recentLoginsData = {
  labels: ["Location 1", "Location 2", "Location 3", "Location 4"],
  datasets: [
    {
      label: "Recent Logins",
      data: [5, 10, 3, 7],
      backgroundColor: "#5e72e4",
    },
  ],
};

const securityAlertsData = {
  labels: ["Critical", "High", "Medium", "Low"],
  datasets: [
    {
      label: "Alerts",
      data: [2, 4, 6, 8],
      backgroundColor: ["#f5365c", "#fb6340", "#ffd600", "#2dce89"],
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

function Subadmin(props) {
  // Sample coordinates for recent logins (Replace with actual data)
  const loginLocations = [
    { lat: 37.7749, lng: -122.4194, name: "Login 1 - San Francisco" },
    { lat: 34.0522, lng: -118.2437, name: "Login 2 - Los Angeles" },
    { lat: 40.7128, lng: -74.0060, name: "Login 3 - New York" },
  ];

  return (
    <div style={dashboardContainerStyle}>
      <Row>
      <Col md={12}>
        <AdminNavbar/>
      </Col>
        <Col md={12}>
          <main style={mainContentStyle}>
            <h1 style={headerStyle}>Subadmin Dashboard</h1>

            {/* Subadmin Overview Section */}
            <Row>
              <Col md={4}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Total Users Managed</h3>
                  <p style={overviewNumberStyle}>1,230</p>
                </div>
              </Col>
              <Col md={4}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Active Sessions</h3>
                  <p style={overviewNumberStyle}>57</p>
                </div>
              </Col>
              <Col md={4}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Recently Resolved Issues</h3>
                  <p style={overviewNumberStyle}>15</p>
                </div>
              </Col>
            </Row>

            {/* System Monitoring Section */}
            <Row>
              <Col md={6}>
                <div style={chartContainerStyle}>
                  <h3 style={chartTitleStyle}>System Health Overview</h3>
                  <Doughnut data={systemHealthData} options={chartOptions} />
                </div>
              </Col>
              <Col md={6}>
                <div style={chartContainerStyle}>
                  <h3 style={chartTitleStyle}>Recent Logins</h3>
                  <Bar data={recentLoginsData} options={chartOptions} />
                </div>
              </Col>
            </Row>

            {/* Security Alerts Section */}
            <Row>
              <Col md={12}>
                <div style={chartContainerStyle}>
                  <h3 style={chartTitleStyle}>Security Alerts</h3>
                  <Bar data={securityAlertsData} options={chartOptions} />
                </div>
              </Col>
            </Row>

            {/* Tasks and Assignments Section */}
            <Row>
              <Col md={6}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Pending Tasks</h3>
                  <ul style={listStyle}>
                    <li>Review recent phishing reports.</li>
                    <li>Update firewall rules.</li>
                    <li>Audit user permissions.</li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div style={infoBoxStyle}>
                  <h3 style={chartTitleStyle}>Completed Tasks</h3>
                  <ul style={listStyle}>
                    <li>Resolved DDoS attack on server 3.</li>
                    <li>Patched vulnerabilities in web application.</li>
                    <li>Completed security training for all users.</li>
                  </ul>
                </div>
              </Col>
            </Row>

            {/* Map of Recent Logins */}
            <Row>
              <Col md={12}>
                <div style={mapContainerStyle}>
                  <h3 style={chartTitleStyle}>Recent Login Locations</h3>
                  <MapContainer
                    center={[37.7749, -122.4194]} // Centered on San Francisco
                    zoom={4}
                    style={{ height: "400px", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {loginLocations.map((login, index) => (
                      <Marker key={index} position={[login.lat, login.lng]}>
                        <Popup>{login.name}</Popup>
                      </Marker>
                    ))}
                  </MapContainer>
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

const headerStyle = {
  color: "#fff", // White header text
};

const overviewNumberStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  color: "#fff", // White numbers
};

const mapContainerStyle = {
  backgroundColor: "#252f3f", // Dark card background
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const listStyle = {
  color: "#c2c7d0", // Lighter text for lists
};

export default Subadmin;
