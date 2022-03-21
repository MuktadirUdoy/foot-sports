import React, { useEffect, useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import Leagues from '../Leagues/Leagues';
import './Home.css';


const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    } , [])

    return (
        <div>
            <section className="home-header">
                <h1>Welcome to FootSports </h1>
            </section>

            <section className="home-body">
                <Container>
                    <Row>
                        {
                            leagues.slice(0, 15).map( league => <Leagues key={league.idLeague} league={league}></Leagues>)
                            // leagues.map( league => <Leagues key={league.idLeague} league={league}></Leagues>)
                        }           
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;