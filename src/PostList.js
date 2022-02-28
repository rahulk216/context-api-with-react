import React, { useContext } from 'react';
import { PostContext } from './PostContext';

const PostList = () => {
	const [posts, setPosts] = useContext(PostContext);
	console.log(posts);
	return (
		<div>
			{posts.map((post) => (
				<div
					style={{
						border: '1px solid black',
						margin: '1rem',
						width: '50%',
					}}
					key={post.id}
				>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};

export default PostList;
