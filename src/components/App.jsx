import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../data/recipes.json";
import { Component } from "react";

// class component
export class App extends Component {
	handleClick = () => {
		console.log("hello Im clicked");
	};

	render() {
		return (
			<>
				<RecipeList recipes={recipes} />
				<button onClick={this.handleClick}>Click Me</button>
				<button onClick={() => this.handleClick}>Click Me</button>
			</>
		);
	}
}
// functional component - modern react class
// export const App = () => {
// 	return <RecipeList recipes={recipes} />;
// };
