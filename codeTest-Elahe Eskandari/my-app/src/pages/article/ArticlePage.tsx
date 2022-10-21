import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./articlePage.css";

const ArticlePage = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const navigate = useNavigate();
	return (
		<div className="article-container">
			<button className="goBack-btn-home" onClick={() => navigate("/")}>
				Back to Home
			</button>
			<div className="heading-paragraph-container">
				<h1 className="article-heading">Careers</h1>
				<div className="artcile-paragraph">
					<p className="ingress-text">
						Join CGI. Where your ideas make a difference. CGI offers more than a
						job. We offer limitless opportunities to make a difference for the
						clients and communities we serve.
					</p>
					<p className="body-text">
						In today’s business world, organizations with strong IT outsourcing
						partnerships are positioned to not just survive, but thrive, as what
						was once considered mainly a cost-cutting measure has become an
						effective way to increase business agility and resiliency.
					</p>
				</div>
				<button data-testid="more-btn" className="show-info-btn" onClick={() => setToggle(!toggle)}>
					{toggle ? "Done reading" : "Read more"}
				</button>
				{toggle ? (
					<p className="body-text">
						In an article published on Fortune.com, “Outsourcing’s new role in
						digital transformations,” Schindler notes CGI’s preference for the
						term managed services to describe what is traditionally called
						outsourcing.
					</p>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default ArticlePage;
