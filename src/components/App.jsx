import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../data/recipes.json";
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
		count: 0,
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	handleClick = (type) => {
		this.setState((prevState) => ({
			...prevState,
			[type]: prevState[type] + 1,
		}));
	};

	handleAddition = () => {
		this.setState((prevState) => ({
			...prevState,
			count: prevState.count + 1,
		}));
	};

	handleSubtraction = () => {
		this.setState((prevState) => ({
			...prevState,
			count: prevState.count - 1,
		}));
	};

	render() {
		const { good, neutral, bad, count } = this.state;
		const total = this.countTotalFeedback();
		const options = ["good", "neutral", "bad"];

		return (
			<>
				<RecipeList recipes={recipes} />

				<div>
					<p>Count:{count}</p>
					<button onClick={this.handleAddition}>Add 1</button>
					<button onClick={this.handleSubtraction}>Minus 1</button>
				</div>

				<Section title="Please Leave Feedback">
					{/* Create DOM to feedback options */}
					<FeedbackOptions
						options={options}
						onLeaveFeedback={this.handleClick}
					/>
				</Section>

				<Section title="Statistics">
					{/* Create DOM statistics */}
					<Statistics good={good} neutral={neutral} bad={bad} total={total} />
				</Section>
			</>
		);
	}
}

// class component
// export class App extends Component {
// 	handleClick = () => {
// 		console.log("hello Im clicked");
// 	};

// 	//whenever you use parameter/arguments with handler, use a callback first
// 	handleClicktest = (name) => {
// 		console.log(`Hello Im clicked by ${name}`);
// 	};

// 	render() {
// 		return (
// 			<>
// 				<RecipeList recipes={recipes} />
// 				<button onClick={this.handleClick}>Click Me</button>
// 				<button onClick={() => this.handleClicktest("Ed")}>Click Me</button>
// 			</>
// 		);
// 	}
// }
// functional component - modern react class
// export const App = () => {
// 	return <RecipeList recipes={recipes} />;
// };
