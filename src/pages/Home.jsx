const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SECTION (2/3) */}
        <div
          style={{
            flex: "2",
            minWidth: "300px",
          }}
        >
          <h1
            style={{
              fontSize: "45px",
              marginBottom: "15px",
            }}
          >
            Redux Builder 🚀
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#cbd5e1",
              marginBottom: "25px",
            }}
          >
            A powerful React + Redux Toolkit project designed
            to master state management, authentication flows,
            and scalable architecture patterns used in real
            applications.
          </p>

          {/* FEATURES GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>⚛️ React</h3>
              <p>Component UI System</p>
            </div>

            <div
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>🧠 Redux Toolkit</h3>
              <p>Global State Management</p>
            </div>

            <div
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>🔗 Router</h3>
              <p>Multi Page Navigation</p>
            </div>

            <div
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>⚡ Scalable</h3>
              <p>Production Structure</p>
            </div>
          </div>

          <button
            style={{
              padding: "12px 20px",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Get Started
          </button>
        </div>

        {/* RIGHT SECTION (1/3) */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "15px",
            padding: "25px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
            alt="redux"
            style={{
              width: "120px",
              marginBottom: "15px",
            }}
          />

          <h3>Project Highlights</h3>

          <ul
            style={{
              textAlign: "left",
              marginTop: "15px",
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "14px",
            }}
          >
            <li>✔ Authentication Flow</li>
            <li>✔ Counter with Redux</li>
            <li>✔ Clean Folder Structure</li>
            <li>✔ Reusable Components</li>
            <li>✔ Scalable Architecture</li>
          </ul>

          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              background: "#1e293b",
              borderRadius: "10px",
              fontSize: "13px",
              color: "#94a3b8",
            }}
          >
            Built for learning + real-world practice
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;