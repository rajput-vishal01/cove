import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "10k+", label: "Active users" },
  { value: "99.9%", label: "Uptime" },
  { value: "256-bit", label: "Encryption" },
];

const features = [
  {
    title: "Write freely",
    desc: "A distraction-free editor that gets out of your way. Just you and your words.",
  },
  {
    title: "Stay organized",
    desc: "Folders, tags, and search that actually work. Find anything in seconds.",
  },
  {
    title: "Fully private",
    desc: "Your data is yours. End-to-end encrypted, never sold, never shared.",
  },
  {
    title: "Any device",
    desc: "Syncs instantly across phone, tablet, and desktop. Always in sync.",
  },
];

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
  });

  return (
    <div style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))", minHeight: "100vh" }}>

      {/* Hero — full width with subtle grid bg */}
      <section
        style={{
          width: "100%",
          padding: "96px 24px 80px",
          textAlign: "center",
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          borderBottom: "1px solid hsl(var(--border))",
          boxSizing: "border-box",
        }}
      >
        <div style={fade(0)}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "hsl(var(--muted-foreground))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "999px",
              padding: "4px 14px",
              marginBottom: "28px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Now in open beta
          </span>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: "700",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              margin: "0 auto 20px",
              maxWidth: "800px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Your thoughts deserve
            <br />
            <span style={{ color: "hsl(var(--muted-foreground))", fontWeight: "400" }}>
              a better home.
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.75",
              color: "hsl(var(--muted-foreground))",
              maxWidth: "520px",
              margin: "0 auto 40px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Cove is a calm, private space to write, reflect, and stay organized.
            No noise. No algorithms. Just you.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/signup"
              style={{
                backgroundColor: "hsl(var(--foreground))",
                color: "hsl(var(--background))",
                padding: "11px 28px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get started free
            </Link>
            <Link
              to="/login"
              style={{
                backgroundColor: "transparent",
                color: "hsl(var(--foreground))",
                padding: "11px 28px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                border: "1px solid hsl(var(--border))",
                fontFamily: "system-ui, sans-serif",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "hsl(var(--accent))")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          ...fade(0.15),
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "0",
          borderBottom: "1px solid hsl(var(--border))",
          boxSizing: "border-box",
        }}
      >
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              flex: "1",
              maxWidth: "280px",
              padding: "28px 24px",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid hsl(var(--border))" : "none",
            }}
          >
            <div style={{ fontSize: "1.75rem", fontWeight: "700", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.02em" }}>
              {value}
            </div>
            <div style={{ fontSize: "13px", color: "hsl(var(--muted-foreground))", marginTop: "4px", fontFamily: "system-ui, sans-serif" }}>
              {label}
            </div>
          </div>
        ))}
      </section>

      {/* Features grid — full width */}
      <section
        style={{
          ...fade(0.25),
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1px solid hsl(var(--border))",
          boxSizing: "border-box",
        }}
      >
        {features.map(({ title, desc }, i) => (
          <div
            key={title}
            style={{
              padding: "48px 32px",
              borderRight: i < features.length - 1 ? "1px solid hsl(var(--border))" : "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "hsl(var(--foreground))",
                marginBottom: "20px",
              }}
            />
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "10px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.7",
                color: "hsl(var(--muted-foreground))",
                fontFamily: "system-ui, sans-serif",
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </section>

      {/* CTA band */}
      <section
        style={{
          ...fade(0.35),
          width: "100%",
          padding: "80px 24px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Ready to find your cove?
        </h2>
        <p
          style={{
            color: "hsl(var(--muted-foreground))",
            fontSize: "15px",
            marginBottom: "32px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Free to start. No credit card required.
        </p>
        <Link
          to="/signup"
          style={{
            backgroundColor: "hsl(var(--foreground))",
            color: "hsl(var(--background))",
            padding: "12px 32px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Create your account
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid hsl(var(--border))",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: "hsl(var(--muted-foreground))",
          fontFamily: "system-ui, sans-serif",
          boxSizing: "border-box",
        }}
      >
        <span>© {new Date().getFullYear()} Cove</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/privacy" style={{ color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>Privacy</Link>
          <Link to="/terms" style={{ color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>Terms</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;