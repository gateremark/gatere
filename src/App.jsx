import AnimatedCursor from "react-animated-cursor";

function App() {
	return (
		<>
			<AnimatedCursor
				innerSize={20}
				outerSize={20}
				color="4, 180, 224"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					"a",
					"img",
					"Link",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'div[className="projects"]',
					"label[for]",
					"select",
					"textarea",
					"Particles",
					"button",
					".link",
				]}
			/>
			<div>
				<h1 className=" text-5xl text-center">Latest Portfolio</h1>
			</div>
		</>
	);
}

export default App;
