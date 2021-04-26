import React from 'react';
import { Link } from 'react-router-dom';

function Home (){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/images">Images</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;