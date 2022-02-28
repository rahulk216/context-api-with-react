import React, { useContext } from 'react';
import { PostContext } from './PostContext';

const Nav = () => {
	const [posts, setPosts] = useContext(PostContext);
	console.log(posts);
	return (
		<div>
			<div>Total posts :{posts.length}</div>
		</div>
	);
};

export default Nav;
