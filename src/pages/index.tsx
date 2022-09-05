import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zachuri | Full Stack Dev</title>
				<meta name="zachuri" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Main />
		</>
	);
};

export default Home;
