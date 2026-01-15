'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
          <h1>エラーが発生しました</h1>
          <p style={{ color: 'red', whiteSpace: 'pre-wrap' }}>
            {error.message}
          </p>
          <p style={{ color: 'gray', fontSize: '12px' }}>
            {error.stack}
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  )
}
