import {Component, type ErrorInfo, type ReactNode} from "react";

interface IProps {
    children?: ReactNode
}

interface IState {
    hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error);
        console.log(errorInfo);
        // logErrorToMyService(error, errorInfo);
    }

    render () {
        if (this.state.hasError) {
            return <h1>Xatolik yuzaga keldi</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;