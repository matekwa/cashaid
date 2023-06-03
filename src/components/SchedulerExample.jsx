import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SchedulerExample = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');

    const handleEventNameChange = (e) => {
        setEventName(e.target.value);
    };

    const handleEventDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const handleEventTimeChange = (e) => {
        setEventTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use the event details to schedule a payment in Google Calendar
        // Add your code here to integrate with the Google Calendar API
        console.log('Event scheduled:', eventName, eventDate, eventTime);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label>Event Name</Label>
                <Input type="text" value={eventName} onChange={handleEventNameChange} />

                <Label>Event Date</Label>
                <Input type="date" value={eventDate} onChange={handleEventDateChange} />

                <Label>Event Time</Label>
                <Input type="time" value={eventTime} onChange={handleEventTimeChange} />

                <Button type="submit">Schedule Payment</Button>
            </Form>
        </Container>
    );
};

export default SchedulerExample;