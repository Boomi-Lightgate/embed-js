import React, { Component, ReactNode } from "react";
import logger from "../logger.service";
import Notification from './ui/Notification';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logger.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <Notification
          type="Error"
          message={this.state.error.message || "An unexpected error occurred"}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
