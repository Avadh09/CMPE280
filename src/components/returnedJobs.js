import React, { Component } from 'react';
import JobInfo from './jobInfo'

class ReturnJobs extends React.Component {

    constructor(props) {
        super(props);
    }

    showJobs = () => {

        console.log("show returned jobs: ", this.props.data)
        let data = this.props.data;

        console.log(JSON.stringify(data[1]));

    }

    render() {
        return (
            <div className="returnJobs">

                <p> I am in return jobs </p>
                {
                    // this.showJobs()
                    this.props.data.map((eachJob) =>

                        <JobInfo key={eachJob.id}
                                 info={eachJob} />
                    )
                }

            </div>
        )
    }
}

export default ReturnJobs;