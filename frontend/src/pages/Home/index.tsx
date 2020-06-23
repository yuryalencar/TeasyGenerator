import React from "react";
import { Link } from 'react-router-dom';

import logoImg from '../../assets/teste.png'
import tutorial from '../../assets/tutorial.svg'
import github from '../../assets/github-icon.svg'
import database from '../../assets/database-icon.svg'
import paper from '../../assets/file-icon.svg'

import './styles.css'

const Home: React.FC = () => {
    return (

        <div className="home-container">
            <div className="header">
                <img width="300px" src={logoImg} alt='Teasy' />
            </div>

            <div className="content-center">
                <div className="left">
                    <img className="" width="80px" src={paper} alt="brand" />
                    <h1>You have a Teasy
JSON</h1>
                    <h3>is simply dummy text of the printing and
                    typesetting industry.
               </h3>
                    <Link to="/import-teasy-json/" >
                        <button type="button" className="btn-l">Lorem</button>
                    </Link>
                </div>
                <div className="right">
                    <img className="" width="80px" src={database} alt="img" />
                    <h1>You have a Tree
Backup</h1>
                    <h3>is simply dummy text of the printing and
                    typesetting industry.
               </h3>
                    <Link to="/import-teasy-and-backup" >
                        <button type="button" className="btn-r">Lorem</button>
                    </Link>

                </div>
            </div>

            <div className="footer">
                <img className="img-l" width="40px" src={tutorial} alt='Teasy' />
                <img className="img-r" width="40px" src={github} alt='Teasy' />
            </div>

        </div>

    )
}

export default Home;
