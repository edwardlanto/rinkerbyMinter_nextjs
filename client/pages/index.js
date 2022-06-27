
import { useState, useEffect } from 'react';
import Layout from "../components/layouts/Layout";
import Hero from '../components/sections/Hero/index';

function Home() {
	return (
		<>
			<Layout>
				<Hero />
				<br />
			</Layout >
		</>
	);
}

export default Home;