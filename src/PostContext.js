import { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'Post 1',
			body: 'This is post 1',
		},
		{
			id: 2,
			title: 'Post 2',
			body: 'This is post 2',
		},
		{
			id: 3,
			title: 'Post 3',
			body: 'This is post 3',
		},
		{
			id: 4,
			title: 'Post 4',
			body: 'This is post 4',
		},
		{
			id: 5,
			title: 'Post 5',
			body: 'This is post 5',
		},
	]);
	console.log(posts);
	return (
		<PostContext.Provider value={[posts, setPosts]}>
			{props.children}
		</PostContext.Provider>
	);
};
