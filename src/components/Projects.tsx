import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
	function importAll(r: __WebpackModuleApi.RequireContext) {
		const images = {};
		r.keys().map((item) => {
			images[item.replace("./", "/assets/projects/")] = r(item);
		});

		return Object.keys(images);
	}

	const images = importAll(
		require.context(
			"../../public/assets/projects/",
			false,
			/\.(png|jpe?g|svg)$/
		)
	);

	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>

				<h2 className="py-4">What I've Built</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{images.map((image) => {
						const title = image
							.replace("_", " ")
							.replace("/assets/projects/", "")
							.replace(".jpg", "");
						const projectUrl = image
							.replace("_app", "")
							.replace("_finder", "")
							.replace("_clone", "");
						return (
							<ProjectItem
								title={title}
								backgroundImg={image}
								projectUrl={projectUrl}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Projects;
