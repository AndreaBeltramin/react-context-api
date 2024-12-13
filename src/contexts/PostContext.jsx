import { createContext, useContext } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
	const postData = {
		posts: [
			{
				id: 1,
				title: "ciambellone",
				content: "ciambellone fatto in casa",
				img: "http://localhost:3000/images/ciambellone.jpeg",
				tags: ["cucina", "dolce", "dessert"],
				category: "dessert",
			},
			{
				id: 2,
				title: "cracker di barbabietola",
				content: "cracker di barbabietola fatti in casa",
				img: "http://localhost:3000/images/cracker_barbabietola.jpeg",
				tags: ["cucina", "antipasto"],
				category: "panificati",
			},
			{
				id: 3,
				title: "pane dolce fritto",
				content: "pane dolce fritto fatto in casa",
				img: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
				tags: ["cucina", "panificazione", "dolce"],
				category: "dessert",
			},
			{
				id: 4,
				title: "pasta alla barbabietola",
				content: "pasta alla barbabietola fatta in casa",
				img: "http://localhost:3000/images/pasta_barbabietola.jpeg",
				tags: ["cucina", "pasta", "primo"],
				category: "primo piatto",
			},
			{
				id: 5,
				title: "torta paesana",
				content: "torta paesana fatta in casa",
				img: "http://localhost:3000/images/torta_paesana.jpeg",
				tags: ["cucina", "dolce", "dessert"],
				category: "dessert",
			},
		],
	};
	return (
		<PostContext.Provider value={postData}>{children}</PostContext.Provider>
	);
};

export const postContext = () => {
	return useContext(PostContext);
};
