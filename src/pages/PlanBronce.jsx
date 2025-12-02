export default function PlanBronce() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Plan Bronce</h1>

      <p style={styles.text}>
        Este plan incluye acceso a clases, talleres exclusivos y material de estudio
        para que puedas iniciar tu formación en Business Intelligence.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "120px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    animation: "fadeIn 0.6s ease"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "bold"
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    lineHeight: "1.6"
  }
};
