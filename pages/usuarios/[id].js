import React from 'react';
import { useRouter } from 'next/router';

const Usuario = () => {
	const router = useRouter();
	return (
		<div>
			<p>homa mundo {router.query.id}</p>
		</div>
	);
};

export default Usuario;
