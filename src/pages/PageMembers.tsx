import axios from 'axios';
import { useEffect, useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const PageMembers = () => {
	const [memberInfo, setMemberInfo] = useState({ message: '' });
	useEffect(() => {
		(async () => {
			setMemberInfo(
				(await axios.get(`${backendUrl}/get-member-info`)).data
			);
		})();
	}, []);

	return (
		<div className="page pageMembers">
			{/* <p>This is the Members page.</p>
			<p>Here is some secret information for members only!</p> */}
			<p>{memberInfo.message}</p>
		</div>
	);
};
