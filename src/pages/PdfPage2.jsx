// src/pages/PdfPage2.jsx
export default function PdfPage2() {
  const pdfUrl = "/docs/R_Plan-estrategico-Agenda-Antioquia-2040-1.pdf"

  return (
    <section className="pdf-page">
      <header style={{ marginBottom: "12px" }}>
        <h1>Segundo Documento PDF</h1>

        <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
          <a className="btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Abrir en pestaña nueva
          </a>
          <a className="btn" href={pdfUrl} download>
            Descargar PDF
          </a>
        </div>
      </header>

      <div style={{ border: "1px solid #1f2832", borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          title="Segundo Documento PDF"
          src={`${pdfUrl}#view=FitH`}
          style={{ width: "100%", height: "85vh", border: 0, background: "#fff" }}
        />
      </div>
    </section>
  )
}