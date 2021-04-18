import React from 'react';

export function Post ({ title, body, userId }){
    return (
		<div>
			<h3>{title}</h3>
			<span>{body}</span><br/>
			<span style={{ color: 'green', fontWight: 'bold' }}>{userId}</span>
		</div>
    );
}