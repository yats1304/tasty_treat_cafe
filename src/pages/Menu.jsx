import React, { useState, useEffect } from "react";
import { MenuList } from "../data/data";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ maxWidth: 1000, margin: "50px auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "0 20px" }}>
      {MenuList.map(({ name, image, items }) => {
        // Use old simple stacked layout for mobile:
        if (isMobile) {
          return (
            <div
              key={name}
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                borderRadius: 12,
                padding: 12,
                marginBottom: 20,
                color: "#222"
              }}
            >
              <img
                src={image}
                alt={name}
                style={{ width: "100%", borderRadius: 10, marginBottom: 10 }}
              />
              <h2 style={{ color: "#FFD600", fontWeight: "bold", fontSize: 22, marginBottom: 10, textTransform: "uppercase" }}>
                {name}
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0, fontSize: 16, lineHeight: 1.6, color: "#444" }}>
                {items.map((item, idx) => {
                  const parts = item.split(/\s{2,}/);
                  return (
                    <li key={idx} style={{ borderBottom: "1px dotted #ccc", padding: "6px 0", display: "flex", justifyContent: "space-between" }}>
                      <span>{parts[0]}</span>
                      <span style={{ color: "#FFD600", fontWeight: "bold" }}>{parts[1]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }

        // Desktop improved layout
        return (
          <div
            key={name}
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              borderRadius: 12,
              padding: 24,
              marginBottom: 40,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              minWidth: 320,
              overflow: "hidden",
              color: "#222"
            }}
          >
            <div
              style={{
                flex: "0 0 240px",
                marginRight: 32,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={image}
                alt={name}
                style={{
                  width: "220px",
                  height: "auto",
                  borderRadius: 10,
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2
                style={{
                  color: "#FFD600",
                  fontWeight: "bold",
                  fontSize: 28,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                }}
              >
                {name}
              </h2>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "#444"
                }}
              >
                {items.map((item, idx) => {
                  const parts = item.split(/\s{2,}/);
                  return (
                    <li
                      key={idx}
                      style={{
                        borderBottom: "1px dotted #ccc",
                        padding: "6px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        wordBreak: "break-word"
                      }}
                    >
                      <span>{parts[0]}</span>
                      <span style={{ color: "#FFD600", fontWeight: "bold" }}>{parts[1]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
