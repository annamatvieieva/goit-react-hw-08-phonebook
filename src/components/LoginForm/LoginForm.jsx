import { FormBox } from "./LoginForm.styled";

export const LoginForm = () => {
	return (
		<FormBox>
			<label>
				Email
				<input
					type="email"
					name="email"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					required
				/>
			</label>
			<label>
				Password
				<input
					type="password"
					name="password"
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
					title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
					required
				/>
			</label>
			<button type="submit">Log In</button>
		</FormBox>
	);
}

