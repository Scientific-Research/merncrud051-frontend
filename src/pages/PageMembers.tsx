import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const PageMembers = () => {
	const [pageInfo, setPageInfo] = useState({ message: '' });
	const { currentUserIsInAccessGroup } = useContext(AppContext);

	useEffect(() => {
		if (currentUserIsInAccessGroup('unapprovedMembers')) {
			(async () => {
				setPageInfo(
					(
						await axios.get(
							`${backendUrl}/get-unapproved-member-info`,
							{
								withCredentials: true,
							}
						)
					).data
				);
			})();
		}
		if (currentUserIsInAccessGroup('members')) {
			(async () => {
				setPageInfo(
					(
						await axios.get(`${backendUrl}/get-member-info`, {
							withCredentials: true,
						})
					).data
				);
			})();
		}
	}, []);

	return (
		<div className="page pageMembers">
			{/* <p>This is the Members page.</p>
			<p>Here is some secret information for members only!</p> */}
			<p>{pageInfo.message}</p>
		</div>
	);
};
