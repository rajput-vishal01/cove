import React from "react";
import { Link } from "react-router-dom";

const inputStyle = {
  width: "100%",
  padding: "9px 12px",
  fontSize: "13px",
  fontFamily: "system-ui, sans-serif",
  backgroundColor: "hsl(var(--background))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  color: "hsl(var(--foreground))",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

const fields = [
  { type: "text", name: "username", placeholder: "Username" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "text", name: "fullname", placeholder: "Full Name" },
  { type: "password", name: "password", placeholder: "Password" },
];

const Signup = () => {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 49px)",
        backgroundColor: "hsl(var(--background))",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          backgroundColor: "hsl(var(--background))",
          border: "1px solid hsl(var(--border))",
          borderRadius: "10px",
          padding: "32px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              margin: "0 0 6px",
              fontFamily: "system-ui, sans-serif",
              color: "hsl(var(--foreground))",
            }}
          >
            Create an account
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "hsl(var(--muted-foreground))",
              margin: 0,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Enter your details below to get started
          </p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {fields.map(({ type, name, placeholder }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--foreground))";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))";
              }}
            />
          ))}

          <button
            type="submit"
            style={{
              marginTop: "4px",
              width: "100%",
              padding: "9px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "system-ui, sans-serif",
              backgroundColor: "hsl(var(--foreground))",
              color: "hsl(var(--background))",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Create Account
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "20px",
            color: "hsl(var(--muted-foreground))",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "hsl(var(--foreground))",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;