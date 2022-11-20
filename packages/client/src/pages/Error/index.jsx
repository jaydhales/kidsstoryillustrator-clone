import React from 'react';

import propTypes from 'prop-types';

import './Error.scss';

import error1 from './asset/error1.svg';
import error2 from './asset/error2.svg';
import error3 from './asset/error3.svg';

export const Error = (props) => {
	return (
		<div className="Error">
			<div className="error-box">
				<div className="error-story">
					<h1>{props.error}!</h1>
					<div className="oops">Oops! We can’t tell you this story now</div>
					<div className="sorry">
						{props.error === 401 ? (
							<>
								We are sorry, this page is not publicly available, to see this
								story please log in to your account.
							</>
						) : props.error === 404 ? (
							<>
								We are sorry! but let’s create other wonderful and interesting
								story together
							</>
						) : props.error === 403 ? (
							<>
								For some reasons you were denied access to this page, but you
								could create another story in few minutes.{' '}
							</>
						) : (
							<></>
						)}
					</div>
					<div className="error-btn">
						<button className="btn1">
							{props.error === 401 ? (
								<>Create an account</>
							) : props.error === 404 ? (
								<>Create another story</>
							) : props.error === 403 ? (
								<>Create another story</>
							) : (
								<></>
							)}
						</button>

						<button className="btn2">
							{props.error === 401 ? (
								<>Sign in</>
							) : props.error === 404 ? (
								<>Go Home</>
							) : props.error === 403 ? (
								<>Go Home</>
							) : (
								<></>
							)}
						</button>
					</div>
				</div>
				<div>
					{props.error === 401 ? (
						<>
							<img src={error1} alt="errorpic" className="error-img" />
						</>
					) : props.error === 404 ? (
						<>
							<img src={error2} alt="errorpic" className="error-img" />
						</>
					) : props.error === 403 ? (
						<>
							<img src={error3} alt="errorpic" className="error-img" />
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

// These are the types of the props that are passed to the component

Error.propTypes = {
	error: propTypes.number,
};

// These are their default values

Error.defaultProps = {
	error: 401,
};

export default Error;
