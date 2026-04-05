import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 32px",
        backgroundColor: "hsl(var(--background))",
        borderBottom: "1px solid hsl(var(--border))",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "15px",
          fontWeight: "700",
          letterSpacing: "-0.02em",
          color: "hsl(var(--foreground))",
          textDecoration: "none",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Cove
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {[
          { to: "/", label: "Home" },
          { to: "/signup", label: "Signup" },
          { to: "/logout", label: "Logout" },
        ].map(({ to, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "13px",
                fontFamily: "system-ui, sans-serif",
                textDecoration: "none",
                color: active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                backgroundColor: active ? "hsl(var(--accent))" : "transparent",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.backgroundColor = "hsl(var(--accent))";
                  e.currentTarget.style.color = "hsl(var(--foreground))";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                }
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;