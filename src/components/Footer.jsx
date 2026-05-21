const Footer = () => {
  return (
    <footer
      style={{
        background: "#1e293b",
        color: "#fff",
        padding: "20px 15px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: "5px 0", fontSize: "14px" }}>
        🚀 Redux Builder - React + Redux Toolkit Project
      </p>

      <p style={{ margin: "5px 0", fontSize: "12px", color: "#cbd5e1" }}>
        Built for learning modern state management
      </p>

      <p style={{ margin: "5px 0", fontSize: "12px", color: "#94a3b8" }}>
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;