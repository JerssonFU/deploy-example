export default function MegahilosSAC() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Megahilos S.A.C</h1>

      <p style={styles.text}>
        Proyecto empresarial enfocado en el análisis, modelado y mejora 
        de procesos dentro de Megahilos S.A.C. Incluye desarrollo BI, 
        documentación funcional y propuestas de optimización.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "120px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    animation: "fadeIn 0.6s ease"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "25px",
    fontWeight: "bold"
  },
  text: {
    fontSize: "1.3rem",
    marginBottom: "40px",
    lineHeight: "1.8"
  }
};
