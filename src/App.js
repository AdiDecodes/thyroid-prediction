import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
// import Thyroid from "./components/Prediction";
import Login from './components/Login';
import Home from './components/Home';
import Blogs from './components/Blogs';
import NavBar from './components/NavBar';
import Thyroid from './components/Prediction';
import AwareNess from './components/AwareNess';

// import Resources from "./components/Resources"; // Import Resources component
// import AddJobForm from "./components/AddJobForm"; // Import AddJobForm component
// import NotFound from "./components/NotFound"; // Import NotFound component
// import RecentJobs from "./components/RecentJobs"; // Import RecentJobs component

const App = () => {
	return (
		<>
			<Router>
				{/* <NavBar className='w-screen h-auto' /> */}
				<Routes>
					<Route
						exact
						path='/Blogs'
						element={<Blogs />}
					/>
					<Route
						path='/Login'
						element={<Login />}
					/>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					{/* <Route exact path="*" element={<NotFound />} /> */}
					<Route
						path='/Home'
						element={<Home />}
					/>
					<Route
						path='/prediction'
						element={<Thyroid />}
					/>
					<Route
						path='/Awareness'
						element={<AwareNess />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
