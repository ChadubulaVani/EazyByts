import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const token = localStorage.getItem("token");

  const allSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "VS Code",
    "Postman",
  ];

  const displayedSkills = allSkills.slice(0, 5);

  return (
    <div className="image">
    <div
      className="home-container"
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        🎉 Welcome to My Portfolio 🎉
      </h1>

      {/* Auth Buttons */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {!token && (
          <>
            <Link to="/login">
              <button
                style={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  padding: "12px 25px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  margin: "10px",
                  boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                🔐 Login
              </button>
            </Link>

            <Link to="/register">
              <button
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "12px 25px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  margin: "10px",
                  boxShadow: "0 4px 8px rgba(40, 167, 69, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                📝 Register
              </button>
            </Link>
          </>
        )}
        <p style={{ color: token ? "green" : "red", fontWeight: "bold" }}>
          {token ? "You are logged in" : "Please login to continue"}
        </p>
      </div>

      {/* About Me */}
      <section style={{ marginBottom: "30px" }}>
        <h2>About Me</h2>
        <p>
          I am a passionate web developer focused on building clean and
          user-friendly web applications. Skilled in both frontend and backend
          technologies, I love creating efficient and dynamic digital
          experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Skills</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "10px",
          }}
        >
          {displayedSkills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f0f4ff",
                color: "#007BFF",
                padding: "12px 20px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: "700",
                boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
                minWidth: "100px",
                textAlign: "center",
                cursor: "default",
                userSelect: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {skill}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "left" }}>
          <Link to="/skills" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "8px 18px",
                border: "none",
                borderRadius: "5px",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(49, 40, 167, 0.6)",
              }}
            >
              ➡️ View All Skills
            </button>
          </Link>
        </div>
      </section>

      {/* Projects Preview */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Featured Projects</h2>

        <div style={{ marginBottom: "20px" }}>
          <h3>📁 Portfolio Website</h3>
          <p>
            A dynamic portfolio site with CMS integration to showcase projects,
            skills, and achievements efficiently.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>📺 Netflix Home Page</h3>
          <p>
            A Netflix homepage clone built with HTML, CSS, and JavaScript
            featuring responsive design and interactive UI elements.
          </p>
        </div>

        {/* View All Projects Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#007BFF",
                color: "white",
                padding: "10px 25px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 3px 6px rgba(0, 123, 255, 0.4)",
              }}
            >
              📁 View All Projects
            </button>
          </Link>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
  <Link to="/dashboard" style={{ textDecoration: "none" }}>
    <button
      style={{
        backgroundColor: "#ffc107",
        color: "#000",
        padding: "10px 25px",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: "600",
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      }}
    >
      🛠️ Go to Dashboard
    </button>
  </Link>
</div>

      </section>
      <footer
        style={{
          marginTop: "60px",
          padding: "25px 0",
          backgroundColor: "transparent",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        
        <p style={{ marginBottom: "60px", fontSize: "16px" }}>
          Thank you for visiting my portfolio! 😊
        </p>
        <Link to="/contact">
          <button
            style={{
              backgroundColor: "#6f42c1",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "15px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              boxShadow: "0 3px 6px rgba(111, 66, 193, 0.3)",
            }}
          >
            📩 Contact Me
          </button>
        </Link>
      </footer>
    </div>
    </div>
  );
}

export default Home;
