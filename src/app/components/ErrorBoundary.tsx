import React from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[Portfolio Error]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            background: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#00ff11', fontSize: '2rem', marginBottom: '1rem' }}>
            ✦
          </p>
          <h1 style={{ marginBottom: '0.5rem', fontWeight: 300 }}>
            Quelque chose s'est mal passé
          </h1>
          <p style={{ opacity: 0.5, marginBottom: '2rem', fontSize: '0.9rem' }}>
            Rafraîchis la page pour réessayer.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'transparent',
              border: '1px solid #00ff11',
              color: '#00ff11',
              padding: '0.6rem 1.8rem',
              cursor: 'pointer',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
            }}
          >
            Recharger ↺
          </button>

          {/* Détails de l'erreur en dev uniquement */}
          {import.meta.env.DEV && this.state.error && (
            <pre
              style={{
                marginTop: '2rem',
                opacity: 0.35,
                fontSize: '0.7rem',
                maxWidth: '640px',
                overflow: 'auto',
                textAlign: 'left',
                background: '#111',
                padding: '1rem',
                borderRadius: '4px',
              }}
            >
              {this.state.error.message}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
