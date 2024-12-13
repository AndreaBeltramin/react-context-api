import { postContext } from "./PostContext";

export default function PostCard() {
	const { post } = postContext();

	return (
		<div className="col" key={post.id}>
			<div className="card">
				//
				<img src={post.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{post.title.toUpperCase()}</h5>
					<div className="card-text">
						{post.content}
						<div>
							<span className="badge bg-info p-2">{post.category}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
