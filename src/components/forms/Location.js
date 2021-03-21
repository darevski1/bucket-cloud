import React, { useState, useEffect } from 'react';



const Location = () => {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch("./data.json",
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'method': 'get',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Bucket Location:</Form.Label>
            <Form.Control as="select" name="location" value={location} onChange={e => onChange(e)}>
                {data.map((d, i) => {
                    return (
                        <option key={i}>{d.location}</option>
                    )
                })}
            </Form.Control>
        </Form.Group>
    )
}
export default Location;