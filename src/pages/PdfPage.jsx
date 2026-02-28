export default function PdfPage() {
  const pdfUrl = "/docs/Resolucion%20guia%20IA.pdf"
  return (
    <section className="pdf-page">
      <header style={{marginBottom: 12}}>
        <h1>Documento del Proyecto (PDF)</h1>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <a className="btn" href={pdfUrl} target="_blank" rel="noopener noreferrer">Abrir en pestaña nueva</a>
          <a className="btn" href={pdfUrl} download>Descargar PDF</a>
        </div>
      </header>
      <div style={{border:'1px solid #1f2832', borderRadius:10, overflow:'hidden'}}>
        <iframe
          title="Resolución guía IA (PDF)"
          src={`${pdfUrl}#view=FitH`}
          style={{ width: '100%', height: '85vh', border: 0, background: '#fff' }}
        />
      </div>
    </section>
  )
}