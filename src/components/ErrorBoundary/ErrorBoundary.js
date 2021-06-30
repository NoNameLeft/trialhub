import React from 'react';

import Error from '../Error';

class CustomErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error from componentDidCatch: ', error);
    }
    
    render() {
        if (this.state.hasError) {
            return <Error />
        }

        return this.props.children;
    }
}

export default CustomErrorBoundary;