import React from 'react';

function SNSIcon({ fill, d }: { d: string; fill: string }) {
    return (
		<svg viewBox="0 0 24 24">
            <path 
                d={d} 
                fill={fill}
            />
		</svg>
	);
}

SNSIcon.defaultProps = {
    fill: '#000'
};
export default SNSIcon