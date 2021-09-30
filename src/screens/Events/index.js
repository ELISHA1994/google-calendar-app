import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import EventCard from "../../components/EventCard";
import Axios from "axios"
import "./Events.css";

function Events({ auth }) {
    const [events, setEvents] = React.useState(null);
    const [addModal, setAddModal] = React.useState(false);
    console.log(addModal);

    React.useEffect(() => {
        async function getEvents() {
            const response = await Axios.post(
                'https://roja-tech-google-calendar-app.herokuapp.com/getCalendarEvents', {token: auth}
            )
            setEvents(response.data);
        }
        getEvents().then(() => {})
    }, [auth])

    const colors = [
        "highlight1",
        "highlight2",
        "highlight3",
        "highlight4",
        "highlight5",
        "highlight6",
        "highlight7",
        "highlight8",
        "highlight9",
        "highlight10",
        "highlight11",
        "highlight12",
        "highlight13",
        "highlight14"
    ];
    const AddModalShow = () => {
        setAddModal(true);
    };

    // const AddModalClose = () => {
    //     setAddModal(false);
    // };

    const eventTypeList = ['default', 'leave', 'travel', 'birthdays'];
    console.log('Events Array', events)
    // eslint-disable-next-line array-callback-return
    events && events.map(x => {
        let indexColor = eventTypeList && eventTypeList.indexOf(x.eventType);
        x.colorName = colors[indexColor];
    })

    return (
        <div className="div-event">
            <Row>
                <Col lg={8} md={8} sm={12} xs={12}>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div>
                                <h2>Events</h2>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="div-create">
                                <h6>
                                    Create event{" "}
                                    <Button
                                        onClick={AddModalShow}
                                        variant="outline-primary"
                                        size="sm"
                                    >
                                        +
                                    </Button>{" "}
                                </h6>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {" "}
                        {events && events.map((x, index) => (
                            <Col
                                key={index}
                                lg={4}
                                md={6}
                                sm={6}
                                xs={12}
                                className="cards"
                            >
                                <EventCard item={x} eventTypeList={eventTypeList} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Events
