import React, {useEffect, useState} from 'react';

function ResizeTracker ({ style }){
	const [resized, setResized] = useState(false);
	const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		// componentDidMount
		console.log('effect1 called');
		// componentWillUnmount
		return () => {
			console.log('component unmounted');
		}
	}, []);

	useEffect(() => {
		console.log('resize effect called');
		window.addEventListener('resize',handleResize);
		// componentWillUnmount
		return () => {
			console.log('listener removed');
			window.removeEventListener('resize',handleResize);
		}
	},[resized]);

	const handleResize = () => {
		setWindowInnerWidth(window.innerWidth);
		console.log(window.innerWidth);
	}

    return (
        <div style={style}>
			{ windowInnerWidth > 1024 ? <span>Desktop Version</span> :
			<span>Mobile Version</span>}
			<button onClick={()=>setResized(!resized)}>Generate Render</button>
        </div>
    );
}

export default ResizeTracker;