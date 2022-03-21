import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Leagues = (props) => {
    const {strLeagueAlternate, strLeague, strSport, idLeague} = props.league;
    const [badge, setBadge] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/eventresults.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBadge(data.leagues[0]))
    } , [idLeague])
    
    return (
        <Col xs={12} md={4}>
            <Card>
                <Card.Img variant="top" src={badge.strBadge} />
                <Card.Body>
                    <Card.Title>{strLeagueAlternate || strLeague}</Card.Title>
                    <p>Sports Type: {strSport}</p>
                    <Button className="main-btn"><Link to={`/league/${idLeague}`}> Explore <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Leagues;