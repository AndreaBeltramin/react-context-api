import DefaultLayout from "./layouts/DefaultLayout";

// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/PostsPage";

import { PostProvider } from "./contexts/PostContext";

function App() {
	return (
		<PostProvider>
			<BrowserRouter>
				<Routes>
					<Route Component={DefaultLayout}>
						<Route path="/" Component={PostsPage} />
					</Route>
				</Routes>
			</BrowserRouter>
		</PostProvider>
	);
}

export default App;
