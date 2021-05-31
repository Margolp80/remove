import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from "./Link";

class Output extends Component {



    render() {
        return (
            <div>
                <p>{this.props.fileInfo}</p>
                <Link href={'read-file'}>Back</Link>
            </div>
        );
    }
}



export default Output;