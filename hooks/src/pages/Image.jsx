import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router';

function Image (){
	const history = useHistory();
	const { imageId } = useParams();

	useEffect(() => {
		console.log(history, 'search data');
		// const query = '';
		fetch(`http://openlibrary.org/search.json${history.location.search}`).then((res) => res.json()).then((data) => console.log(data, 'data from search'));
	}, [])
	return (
        <div>
           Here is your Image ID: {imageId}
        </div>
    );
}

export default Image;