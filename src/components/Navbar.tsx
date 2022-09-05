import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div className="fixed w-full h-20 shadow-xl z-[100">
			<div className="flex justify-between items-center w-full h-full px-2">
				<Image
					src="/assets/navLogo.png"
					alt="Navbar logo"
					width="125"
					height="50"
				/>
				<div>
					{/* show hidden when mobile/ above medium flex */}
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Home
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								About
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Skills
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
