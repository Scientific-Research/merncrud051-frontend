import { useContext, useRef } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageLogin = () => {
	const {
		appTitle,
		loginForm,
		changeLoginFormField,
		submitLoginForm,
		// loginAsAdmin,
		// password,
		// setPassword,
		// adminIsLoggedIn,
		// logoutAsAdmin,
	} = useContext(AppContext);

	// const passwordRef = useRef() as React.RefObject<HTMLIFrameElement>;
	const passwordRef = useRef() as any;

	const onBadLogin = () => {
		// console.log('bad login');
		if (passwordRef.current !== null) {
			passwordRef.current.focus();
		}
	};

	const submitLoginFormWrapper = () => {
		submitLoginForm(onBadLogin);
	};
	// const navigate = useNavigate();
	// const passwordRef = useRef() as React.RefObject<HTMLInputElement>;

	// const loginAndReact = () => {
	// 	loginAsAdmin(
	// 		() => {
	// 			navigate('/');
	// 		},
	// 		() => {
	// 			if (passwordRef.current !== null) {
	// 				passwordRef.current.focus();
	// 			}
	// 		}  
	// 	);
	// };

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			submitLoginForm(onBadLogin);
		}
	};

	return (
		<div className="page pageLogin">
			<Helmet>
				<title>{appTitle} - Login</title>
			</Helmet>
			{/* {adminIsLoggedIn ? (
				<p>
					<button className="logout" onClick={logoutAsAdmin}>
						Logout
					</button>
				</p>
			) : (
				<>
					<p>
						Identify as admin:{' '}
						<input
							type="password"
							ref={passwordRef}
							autoFocus
							value={password}
							onKeyDown={handleKeyDown}
							onChange={(e) => setPassword(e.target.value)}
						/>{' '}
						<button
							disabled={password.trim() === ''}
							onClick={loginAndReact}
							type="button"
						>
							Login
						</button>
					</p> */}

			<form>
				<fieldset>
					<legend>Please provide your credentials</legend>
					<div className="row">
						<label>Username</label>
						<div>
							<input
								onKeyDown={handleKeyDown}
								onChange={(e) =>
									changeLoginFormField(
										'username',
										e.target.value
									)
								}
								value={loginForm.fields.username}
								autoFocus
								type="text"
							/>
						</div>
					</div>

					<div className="row">
						<label>Password</label>
						<div>
							<input
								ref={passwordRef}
								onKeyDown={handleKeyDown}
								onChange={(e) =>
									changeLoginFormField(
										'password',
										e.target.value
									)
								}
								value={loginForm.fields.password}
								type="password"
							/>
						</div>
					</div>

					<div className="buttonArea">
						{/* <div className="message">This is a test message.</div> */}
						<div className="message">{loginForm.message}</div>
						<button
							type="button"
							onClick={() => submitLoginFormWrapper()}
						>
							Submit
						</button>
					</div>
				</fieldset>
			</form>
			{/* </>
			)} */}
		</div>
	);
};
