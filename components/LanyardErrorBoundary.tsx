'use client';

import React from 'react';

interface LanyardErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface LanyardErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class LanyardErrorBoundary extends React.Component<
  LanyardErrorBoundaryProps,
  LanyardErrorBoundaryState
> {
  constructor(props: LanyardErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): LanyardErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Lanyard Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-gray-600">3D Card temporarily unavailable</p>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
