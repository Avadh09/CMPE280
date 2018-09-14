import React, { Component } from 'react';

class JobInfo extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jobInfo">

                {JSON.stringify(this.props.info)}

            </div>
        )
    }


};

export default JobInfo;