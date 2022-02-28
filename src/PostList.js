import React, { useContext } from 'react';
import { PostContext } from './PostContext';

const PostList = () => {
	const [posts, setPosts] = useContext(PostContext);
	const deleteHandler = (id) => {
		setPosts(posts.filter((post) => post.id !== id));
	};
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
					<p>{post.body}</p>
					<button onClick={() => deleteHandler(post.id)}>Delete</button>
					
				</div>
			))}
		</div>
	);
};

export default PostList;
