export default function QRCodePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#f5f5f5'
    }}>
      <h1 style={{
        marginBottom: '20px',
        fontSize: '28px',
        color: '#333'
      }}>
        Infinito Hiro QR Code
      </h1>

      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <img
          src="/infinito-hiro-qr.png"
          alt="Infinito Hiro QR Code"
          style={{
            width: '300px',
            height: '300px',
            marginBottom: '30px'
          }}
        />

        <p style={{
          marginBottom: '20px',
          color: '#666',
          fontSize: '14px'
        }}>
          Scan to visit: https://infinito-hiro.vercel.app/infinito-hiro
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <a
            href="/infinito-hiro-qr.png"
            download="infinito-hiro-qr.png"
            style={{
              padding: '10px 20px',
              background: '#000',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Download PNG
          </a>

          <a
            href="/infinito-hiro-qr.svg"
            download="infinito-hiro-qr.svg"
            style={{
              padding: '10px 20px',
              background: '#fff',
              color: '#000',
              border: '2px solid #000',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Download SVG
          </a>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a
          href="/infinito-hiro"
          style={{
            color: '#666',
            fontSize: '14px'
          }}
        >
          ← Visit Infinito Hiro page
        </a>
      </div>
    </div>
  );
}