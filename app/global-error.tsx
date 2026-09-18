"use client";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          color: "#FFFFFF",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#B59A52",
            }}
          >
            Doss Realty
          </p>

          <h1 style={{ margin: "16px 0 0", fontSize: 40, fontWeight: 500 }}>
            Something went wrong
          </h1>

          <p
            style={{
              margin: "16px auto 0",
              maxWidth: 420,
              fontSize: 15,
              lineHeight: 1.7,
              color: "#AFAFAF",
            }}
          >
            The application hit an unexpected error. Please try again.
          </p>

          <button
            onClick={() => unstable_retry()}
            style={{
              marginTop: 32,
              cursor: "pointer",
              borderRadius: 999,
              border: "none",
              backgroundColor: "#B59A52",
              color: "#121212",
              padding: "12px 32px",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
