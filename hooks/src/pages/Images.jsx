import React, {useEffect, useState} from 'react';
import {Route, Switch, useRouteMatch} from 'react-router';
import { Link } from 'react-router-dom';
import Image from './Image';

function Images (){
	const [records, setRecords] = useState([]);
	const match = useRouteMatch();
	// console.log(match, 'router match');
	useEffect(() => {
		fetch('https://harvardartmuseums.org/browse').then((res)=>res.json()).then(data => {
			setRecords(data.records);
		})
	}, []);
	// console.log(records);
	return (
        <div>
			<h2>Records</h2>
			<div>
				{!!records.length && records.map(({ department, classification, id }) => {
					return (<span key={id}>
						<Link to={`${match.url}/${id}?q="hello"`}>{department}</Link> <br/>
						{/*<span>{classification}</span>*/}
					</span>)
				})}
			</div>
			<Switch>
				<Route path={`${match.path}/:imageId`}>
					<Image />
				</Route>
			</Switch>
        </div>
    );
}

export default Images;