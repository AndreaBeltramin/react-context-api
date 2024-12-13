import { postContext } from "../contexts/PostContext";
import PostCard from "../contexts/PostCard";

export default function PostsList() {
	const { posts } = postContext();
	return (
		<div>
			<h1>Lista dei Post: </h1>

			<PostCard />
		</div>
	);
}
