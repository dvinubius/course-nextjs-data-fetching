'use client'
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  
  public render() {
    if (this.state.hasError) {
      return (
      <div className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='text-3xl text-red-500'>Sorry, an error occured!</div>
        <button
          className="mt-12 rounded-md bg-gray-800 px-4 py-2 text-white hover:opacity-80 transition-all duration-300 ease-in-out"
          onClick={
            () => window.location.reload() // not optimal, but using the next router in a class component is too tedious ATM
          }
        >
          Try again
        </button>
      </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;