import React, { useState } from 'react';
import ResizeTracker from './resizeTracker';

function DraftApp() {
	const [isResizeTrackerOpen, setIsResizeTrackerOpen] = useState(true);
	return (
		<div>
			<button onClick={() => setIsResizeTrackerOpen(!isResizeTrackerOpen)}>{isResizeTrackerOpen ? 'Hide' : 'Show'}</button>
			{isResizeTrackerOpen && <ResizeTracker/>}
			<ResizeTracker style={{ display: isResizeTrackerOpen ? 'block' : 'none'}}/>
			<ResizeTracker style={{ visibility: isResizeTrackerOpen ? '' : 'hidden'}}/>
		</div>
	);
}

export default DraftApp;