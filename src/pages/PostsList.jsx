import { postContext } from "../contexts/PostContext";
// import PostCard from "../contexts/PostCard";

export default function PostsList() {
	const { posts } = postContext();
	return (
		<div>
			<h1>Lista dei Post: </h1>
			<div className="row row-cols-3 g-3">
				{posts.map((post) => (
					<div className="col" key={post.id}>
						<div className="card">
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
				))}
			</div>
		</div>
	);
}
