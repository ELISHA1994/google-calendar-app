import React from 'react';
import { useGoogleLogout } from "react-google-login";
import { Button, Col, Row } from "react-bootstrap";
import EventCard from "../../components/EventCard";
import Axios from "axios"
import "./Events.css";

const clientId = '202767119530-kp425ls86h63lsgt1jr03ven88c8av0f.apps.googleusercontent.com';

function Events({ auth, setAuth }) {
    const [events, setEvents] = React.useState(null);
    // const [addModal, setAddModal] = React.useState(false);

    React.useEffect(() => {
        async function getEvents() {
            const response = await Axios.post(
                'https://roja-tech-google-calendar-app.herokuapp.com/getCalendarEvents', {token: auth}
                // 'http://localhost:1337/getCalendarEvents', {token: auth}
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
    // const AddModalShow = () => {
    //     setAddModal(true);
    // };

    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
        setAuth(null);
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

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
                                    LogOut {" "}
                                    <Button
                                        onClick={signOut}
                                        variant="outline-primary"
                                        size="sm"
                                    >
                                        <img src="icons/google.svg" alt="google login" />
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
