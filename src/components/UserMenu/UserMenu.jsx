import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";

export const UserMenu = () => {
	const user = useSelector(selectUser);
	const userName = user.name;
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOut());
	};
	
	return (
		<div>
			<p>Hello, {userName}!</p>
			<button onClick = {handleLogOut}>LogOut</button>
		</div>
	)
}