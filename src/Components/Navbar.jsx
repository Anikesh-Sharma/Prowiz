import axios from "axios";
import { useEffect, useState } from "react";
import data from "../../db.json";

const Navbar = () => {

	return (
		<div className="h-16 px-8 flex items-center justify-between bg-white shadow-lg">
			<p className="text-xl font-semibold text-gray-700">KPI Tracker</p>
			<div className="flex items-center gap-3">
				<img
					className="rounded-full w-10 h-10 border-2 border-gray-300"
					src={data?.userData.profilePicture || "https://via.placeholder.com/40"}
					alt="User"
				/>
				<p className="text-lg text-gray-800 font-medium">{data?.userData.name || "User"}</p>
			</div>
		</div>
	);
};

export default Navbar;
