import { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			body: 'This is post 1',
		},
	]);
	console.log(posts);
	return (
		<PostContext.Provider value={[posts, setPosts]}>
			{props.children}
		</PostContext.Provider>
	);
};
