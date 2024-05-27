import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';
import modelImage from '../media/model.png'; // Ensure the correct path
import batImage from '../media/bat.png'; // Ensure the correct path
import briImage from '../media/bri.png'; // Ensure the correct path
import et0Image from '../media/et0.png'; // Ensure the correct path
import humImage from '../media/hum.png'; // Ensure the correct path
import preImage from '../media/pre.png'; // Ensure the correct path
import raiImage from '../media/rai.png'; // Ensure the correct path
import temImage from '../media/tem.png'; // Ensure the correct path
import uvImage from '../media/uv.png'; // Ensure the correct path
import winImage from '../media/win.png'; // Ensure the correct path
import wsImage from '../media/ws.png'; // Ensure the correct path
import potImage from '../media/pot.png'; // Ensure the correct path

const images = {
    model: modelImage,
    ws: wsImage,
    bat: batImage,
    bri: briImage,
    et0: et0Image,
    hum: humImage,
    pre: preImage,
    rai: raiImage,
    tem: temImage,
    uv: uvImage,
    win: winImage,
    pot: potImage,
    pho: potImage,
    azo: potImage,
};

const Measures = (props) => {
    return (
        <div>
            <div className="row">
                {Object.entries(props.values).map(([key, value], index) => (
                    <div className="col" key={index}>
                        <Link to={`${props.device}/${key}`}>
                            <img src={images[key]} alt={key} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        </Link>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Content(props) {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentContext = currentPath.split('/').pop();
    console.log("***************************************", props.layout);

    const devices = {
        'model': { 'tem': 35, 'hum': 20, 'azo': 25, 'pho': 25, 'pot': 25, 'bat': 3.33 },
        'ws': { 'tem': 25, 'hum': 25, 'win': 25, 'bri': 25, 'et0': 25, 'rai': 25, 'uv': 25, 'pre': 25, 'bat': 3.33 }
    };
    const deviceEntries = Object.entries(devices);

    if (props.layout === 'Devices') {
        return (
            <Row xs={1} md={4} className="g-4">
                {deviceEntries.map(([key, values], idx) => (
                    <Col key={idx}>
                        <Card>
                            <Link to={key}>
                                <Card.Img variant="top" src={images[key]} className="card-image" style={{ width: '200px', height: '200px', marginRight: '5px' }} />
                            </Link>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <span className="justify-content-start">etat</span>
                                    <span className="justify-content-end">battrie</span>
                                </div>
                                <Card.Title>{key}</Card.Title>
                                <Card.Text>
                                    <Measures values={values} device={key} />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    } else if (props.layout === 'Device') {
        const currentDevice = devices[currentContext];
        return (
            <Row xs={1} md={4} className="g-4">
                {Object.entries(currentDevice).map(([key, value], idx) => (
                    <Col key={idx}>
                        <Card>
                            <Link to={key}>
                                <Card.Img variant="top" src={images[key]} className="card-image" style={{ width: '200px', height: '200px', marginRight: '5px' }} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{key+': '}25</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <span className="justify-content-start">Max: 30</span>
                                    <span className="justify-content-end">Min: 3</span>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    } else if(props.layout === 'Measures') {
        return null;
    }else return null;
}

export default Content;
