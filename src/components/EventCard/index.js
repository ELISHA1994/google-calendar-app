import React  from "react";
import { Card } from "react-bootstrap";
import './EventCard.css';

function EventCard({item, eventTypeList}) {
    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ];

    const colors = [
        "#F08080",
        "#ADD8E6",
        "#FFFACD",
        "#87CEFA",
        "#20B2AA",
        "#FFA07A",
        "#00FA9A",
        "#FFE4E1",
        "#DA70D6",
        "#FFF5EE",
        "#87CEEB",
        "#F5DEB3",
        "#F0F8FF",
        "#FF7F50"
    ];

    // Start Date Format
    let startDate = new Date(item.start.dateTime);
    let startHr = startDate.getHours();
    let startMin = startDate.getMinutes();
    if (startMin < 10) {
        startMin = "0" + startMin;
    }
    let startampm = "AM";
    if (startHr > 12) {
        startHr -= 12;
        startampm = "PM";
    }

    // EndDate Format
    let endDate = new Date(item.end.dateTime);
    let endHr = endDate.getHours();
    let endMin = endDate.getMinutes();
    if (endMin < 10) {
        endMin = "0" + endMin;
    }
    let endampm = "AM";
    if (endHr > 12) {
        endHr -= 12;
        endampm = "PM";
    }

    // Month Format
    let month = months[startDate.getMonth()];
    let date = startDate.getDate();
    let indexColor = eventTypeList && eventTypeList.indexOf(item.eventType);

    return (
        <div>
            <Card
                style={{ backgroundColor: colors[indexColor] }}
                className="event-card"
            >
                <Card.Body>
                    <Card.Title>{item.summary}</Card.Title>
                    <h3 className="event-type">{item.eventType}</h3>
                    <p className="event-time">
                        {startHr + ":" + startMin + " " + startampm + " "}-
                        {" " + endHr + ":" + endMin + " " + endampm}
                    </p>
                </Card.Body>
            </Card>
            <Card className="event-card date-card">
                <Card.Body className="date-body">
                    <h3 className="event-type month">{month}</h3>
                    <h3 className="event-type date">{date}</h3>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EventCard

