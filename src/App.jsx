import DefaultLayout from "./layouts/DefaultLayout";

// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPostPage from "./pages/ListPostPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={DefaultLayout}>
					<Route path="/" Component={HomePage} />
					<Route path="/posts" Component={ListPostPage} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
