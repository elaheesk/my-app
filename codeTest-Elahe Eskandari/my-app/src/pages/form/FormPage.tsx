import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mailformat, nameRegex, numberRegex } from "../../functions";
import { ICreateNewUser } from "../../type";
import "./formPage.css";
const FormPage = () => {
	const navigate = useNavigate();
	const [emailmessage, setEmailMessage] = useState<string>("");
	const [inputVal, setInputVal] = useState<string>("");
	const [phoneMessage, setPhoneMessage] = useState<string>("");
	const [firstNameMessage, setFirstNameMessage] = useState<string>("");
	const [surNameMessage, setSurNameMessage] = useState<string>("");
	const [userDetails, setUserDetails] = useState<ICreateNewUser>({
		firstName: "",
		surName: "",
		phoneNumber: "",
		email: "",
	});
	const [firstNameInputBorder, setFirstNameInputBorder] =
		useState<string>(" 1px solid black");

	const [surNameInputBorder, setSurNameInputBorder] =
		useState<string>(" 1px solid black");
	const [emailInputBorder, setEmailInputBorder] =
		useState<string>(" 1px solid black");
	const [phoneInputBorder, setPhoneInputBorder] =
		useState<string>(" 1px solid black");

	const checkForNumber = (inputVal: string) => {
		if (numberRegex.test(inputVal)) {
			setPhoneMessage("");
			return true;
		} else {
			return false;
		}
	};

	const firstNameChecker = (firstName: string): boolean => {
		if (firstName.length <= 1 || firstName.match(nameRegex)) {
			return false;
		} else {
			return true;
		}
	};

	const surNameChecker = (surName: string): boolean => {
		if (surName.length <= 1 || surName.match(nameRegex)) {
			return false;
		} else {
			return true;
		}
	};

	const validateEmail = (email: string): boolean => {
		if (email.match(mailformat)) {
			return true;
		} else {
			return false;
		}
	};

	const formSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!validateEmail(userDetails.email)) {
			setEmailInputBorder("2px solid red");
			setEmailMessage("Fill in Correct email");
		} else {
			setEmailInputBorder("1px solid black");
			setEmailMessage("");
		}
		if (!firstNameChecker(userDetails.firstName)) {
			setFirstNameInputBorder("2px solid red");
			setFirstNameMessage("Wrong firstname");
		} else {
			setFirstNameInputBorder("1px solid black");
			setFirstNameMessage("");
		}

		if (!surNameChecker(userDetails.surName)) {
			setSurNameInputBorder("2px solid red");
			setSurNameMessage("Wrong surname");
		} else {
			setSurNameInputBorder("1px solid black");
			setSurNameMessage("");
		}
		if (inputVal) {
			setPhoneInputBorder("2px solid black");
			setUserDetails({ ...userDetails, phoneNumber: inputVal });
			checkForNumber(inputVal);
			if (!checkForNumber(inputVal)) {
				setPhoneInputBorder("2px solid red");
				setPhoneMessage("Fill in correct number");
			} else {
				setPhoneMessage("");
				setPhoneInputBorder("1px solid black");
			}
		} else {
			setPhoneMessage("fill in correct number");
			setPhoneInputBorder("2px solid red");
		}
	};

	useEffect(() => {
		checkForNumber(userDetails.phoneNumber);
	}, [inputVal, userDetails.phoneNumber]);
	return (
		<div className="form-container">
			<button className="goBack-btn" onClick={() => navigate("/")}>
				Back to Home
			</button>
			<h1>Contact form</h1>

			<form onSubmit={formSubmit}>
				<label>Firstname</label>
				<input
					style={{ border: firstNameInputBorder }}
					value={userDetails.firstName}
					className="firstName-input"
					type="text"
					placeholder="Type firstName"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUserDetails({ ...userDetails, firstName: e.target.value })
					}
				/>
				<p className="warning-message">{firstNameMessage}</p>

				<label>Surname</label>
				<input
					style={{ border: surNameInputBorder }}
					value={userDetails.surName}
					className="surName-input"
					type="text"
					placeholder="Type in Surname"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUserDetails({ ...userDetails, surName: e.target.value })
					}
				/>
				<p className="warning-message">{surNameMessage}</p>

				<label>Phone number</label>
				<input
					style={{ border: phoneInputBorder }}
					className="phone-input"
					type="text"
					value={inputVal}
					name="phone"
					placeholder="phone"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setInputVal(e.target.value)
					}
				/>
				<p className="warning-message">{phoneMessage}</p>

				<label>Email</label>
				<input
					style={{ border: emailInputBorder }}
					value={userDetails.email}
					className="email-input"
					type="text"
					name="email"
					placeholder="Lägg till din epostadress"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUserDetails({ ...userDetails, email: e.target.value })
					}
				/>
				<p className="warning-message">{emailmessage}</p>

				<button className="submit-btn" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};
export default FormPage;
