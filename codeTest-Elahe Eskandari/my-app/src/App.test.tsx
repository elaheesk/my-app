import { fireEvent, render, screen } from "@testing-library/react";

import ArticlePage from "./pages/article/ArticlePage";
import { BrowserRouter, Form } from "react-router-dom";
import FormPage from "./pages/form/FormPage";
import HomePage from "./pages/home/HomePage";

test("should render form page", () => {
	render(
		<BrowserRouter>
			<FormPage />
		</BrowserRouter>
	);
	const page = screen.getByText(/Contact form/i);
	expect(page).toBeInTheDocument();
});
test("should render Home page", () => {
	render(
		<BrowserRouter>
			<HomePage />
		</BrowserRouter>
	);
	const title = screen.getByText(/Welcome to CGI/i);
	expect(title).toBeInTheDocument();
});

it("expect the button to change innerText when clicked on", () => {
	() => {
		render(
			<BrowserRouter>
				<ArticlePage />
			</BrowserRouter>
		);
		const clickButton = screen.getByTestId("Read more");
		fireEvent.click(clickButton);

		expect(clickButton).toBeInTheDocument();
		expect(screen.getByText(/Done reading/i)).toBeInTheDocument();
	};
});

it("expect to show information when button is clicked", () => {
	() => {
		() => {
			const readMore = screen.getByText("Read more");
			fireEvent.click(readMore);
			render(<ArticlePage />);
			const parag = screen.getByTestId(/more-btn/i);
			expect(parag).toBeInTheDocument();
		};
	};
});
