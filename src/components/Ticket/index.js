import React from 'react'

function Ticket(props) {

    const {data} = props;

    return (
        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-capitalize"><b>Average per day:</b> {data.averages.day}</li>
                <li className="list-group-item text-capitalize"><b>ask:</b> {data.ask}</li>
                <li className="list-group-item text-capitalize"><b>last:</b> {data.last}</li>
            </ul>
        </div>
    )
}

export default Ticket;
