import { Link } from "react-router-dom";
import "./homePage.css";
const HomePage = () => {
	const backgroundImg =
		"https://wowslider.com/sliders/demo-40/data1/images/cherry_blossom.jpg";

	return (
		<div className="home-container">
			<div className="topp-nav">
				<Link to="/article" className="link">
					Article
				</Link>
				<Link to="/form" className="link">
					Form
				</Link>
			</div>
			<h1 className="home-heading">Welcome to CGI</h1>
			<img className="background-img" alt="backgroundImg" src={backgroundImg} />

			<p className="description-text">
				CGI has been named by Forbes magazine one of the World’s Best Employers
				for 2022. Compiled in partnership with market research firm Statista,
				the ranking is based on surveys conducted among 150,000 full-time and
				part-time employees in 57 countries who work for multi-national
				companies and institutions. The annual ranking identifies organizations
				that excel in corporate impact and image, talent development, gender
				equality, and social responsibility, and is relied on by professionals
				and other stakeholders such as prospective clients and investors in
				evaluating businesses.
			</p>
		</div>
	);
};
export default HomePage;
