export default function HelloWorldPage() {
  return (
    <main
      style={{
        alignItems: "center",
        background: "#f7f7f2",
        color: "#171717",
        display: "flex",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          border: "1px solid #d8d8d0",
          borderRadius: 8,
          maxWidth: 520,
          padding: 32,
        }}
      >
        <p style={{ color: "#61615a", fontSize: 14, margin: "0 0 12px" }}>
          @tscircuit/laser-fabrication-bench
        </p>
        <h1 style={{ fontSize: 32, lineHeight: 1.1, margin: "0 0 12px" }}>
          Hello world
        </h1>
        <p
          style={{ color: "#44443f", fontSize: 16, lineHeight: 1.5, margin: 0 }}
        >
          Bootstrap visualizer page for future laser fabrication model work.
        </p>
      </section>
    </main>
  )
}
