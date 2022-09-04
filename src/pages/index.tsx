import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zachuri | Full-Stack Developer</title>
				<meta name="zachuri portfolio" content="personal" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
};

export default Home;
