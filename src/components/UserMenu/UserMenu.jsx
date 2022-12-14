import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";

export const UserMenu = () => {
	const user = useSelector(selectUser);
	const userName = user.name;
	
	return (
		<div>
			<p>Hello, {userName}!</p>
			<button>LogOut</button>
		</div>
	)
}