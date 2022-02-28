import React, { useState, useContext } from 'react';
import { PostContext } from './PostContext';

const AddPost = () => {
	const [newPost, setNewPost] = useState();
	const [posts, setPosts] = useContext(PostContext);
	const handlePost = () => {
		const newVal = Math.floor(Math.random() * 100 + 1);
		setPosts([
			...posts,
			{
				id: newVal,
				title: `Post ${newVal}`,
				body: `This is post ${newVal}`,
			},
		]);
	};
	return (
		<div>
			<input
				type='text'
				value={newPost}
				onChange={(e) => setNewPost(e.target.value)}
			/>
			<button onClick={handlePost}>Add Post</button>
		</div>
	);
};

export default AddPost;
