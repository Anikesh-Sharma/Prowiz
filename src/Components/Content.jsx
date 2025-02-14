import axios from "axios"
import { useEffect, useState } from "react"
import data from "../../db.json";

const States = () => {

	return (
		<div className="flex w-[1144px] h-[167px] gap-[24px] w-full">
			{data?.states?.map((e, index) => (
				<div key={index} className="bg-white rounded-lg shadow-md p-4 w-64 w-full">
					<img src={e.icons} alt="icons" className="w-10 h-10 mb-10" />
					<p className="text-gray-500">{e.name}</p>
					<p className="text-2xl font-semibold">{e.number}</p>
				</div>
			))}
		</div>
	)
}

export default States
