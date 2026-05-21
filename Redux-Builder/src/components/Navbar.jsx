import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#1e293b",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "24px",
        }}
      >
        Redux Builder
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/login"
          style={{
            background: "#3b82f6",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;