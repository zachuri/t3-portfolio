import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Navbar() {
	const [nav, setNav] = useState<boolean>(false);
	const [shadow, setShadow] = useState<boolean>(false);
	const [navBg, setNavBg] = useState<string>("#ecf0f3");
	const [linkColor, setLinkColor] = useState<string>("#1f2937");
	const router = useRouter();

	useEffect(() => {
		if (
			router.asPath === "/property_finder" ||
			router.asPath === "/netflix_app" ||
			router.asPath === "/crypto_app" ||
			router.asPath === "/twitch_clone"
		) {
			setNavBg("transparent");
			setLinkColor("#f8f8f8");
		} else {
			setNavBg("#ecf0f3");
			setLinkColor("#1f2937");
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			// when scroll is greater than 90 pixels -> show shadow
			window.scrollY >= 90 ? setShadow(true) : setShadow(false);
		};

		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20  z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2">
				<Link href="/#home">
					<Image
						src="/assets/navLogo.png"
						alt="Navbar logo"
						width="125"
						height="50"
					/>
				</Link>

				{/* For Medium and up display  */}
				<div>
					{/* show hidden when mobile/ above medium flex */}
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<Link href="/#home">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b">
								projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>

					{/* For mobile hamburger menu*/}
					{/* anything above hidden medium this hidden */}
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Sidebar Drawer Menu */}
			{/* This div will display the background opacity */}

			<div
				className={
					// make hidden when above medium screen
					nav
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: ""
				}
			>
				{/* This div will display the side bar menu */}
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"
					}
				>
					{/* Put it in a container where all all the items will be in the middle */}
					<div>
						{/* Div for Logo and Exit */}
						<div className="flex w-full items-center justify-between">
							<Image
								src="/assets/navLogo.png"
								alt="/"
								width="87"
								height="35"
							/>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>

						{/* Div for description  */}
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w[90%] py-4">
								{/* // eslint-disable-next-line react/no-unescaped-entities */}
								Let's build something legendary together
							</p>
						</div>

						{/* Menu List */}
						<div className="py-4 flex flex-col">
							<ul>
								<Link href="/#home">
									<li
										onClick={() => {
											setNav(false);
										}}
										className="py-4 text-sm"
									>
										Home
									</li>
								</Link>
								<Link href="/#about">
									<li
										onClick={() => {
											setNav(false);
										}}
										className="py-4 text-sm"
									>
										About
									</li>
								</Link>
								<Link href="/#skills">
									<li
										onClick={() => {
											setNav(false);
										}}
										className="py-4 text-sm"
									>
										Skills
									</li>
								</Link>
								<Link href="/#projects">
									<li
										onClick={() => {
											setNav(false);
										}}
										className="py-4 text-sm"
									>
										Projects
									</li>
								</Link>
								<Link href="/#contact">
									<li
										onClick={() => {
											setNav(false);
										}}
										className="py-4 text-sm"
									>
										Contact
									</li>
								</Link>
							</ul>

							{/* Let Connect logos */}
							<div className="pt-40">
								<p className="uppercase tracking-widest text-[#5651e5]">
									Let's Connect
								</p>
								<div className="container mx-auto flex items-center justify-between my-4 w-full sm:w-[80%]">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaLinkedin />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiOutlineMail />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
