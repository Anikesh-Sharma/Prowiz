import React from "react";

const List = () => {
  const data = [
    { application: "App A", list: "List 1", product: "Product X", reason: "Wrong Coding", quantity: "10", time: "01/02/2025" },
    { application: "App B", list: "List 2", product: "Product Y", reason: "Wrong Price", quantity: "12", time: "01/02/2025" },
    { application: "App C", list: "List 3", product: "Product Z", reason: "Wrong Factory Code", quantity: "2", time: "01/02/2025" },
  ];

  return (
    <div className="p-6 bg-white overflow-x-auto">
      <table className="table-fixed w-full border-collapse ">
      <thead className="bg-white-100">
          <tr className="text-black h-[44px]">
            <th className="p-4 text-left">Application</th>
            <th className="p-4 text-left">List</th>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Reason for Rejection</th>
            <th className="p-4 text-left">Quantity</th>
            <th className="p-4 text-left">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="text-gray-700 odd:bg-gray-100 even:bg-white">
              <td className="py-10 px-4">{row.application}</td>
              <td className="py-10 px-4">{row.list}</td>
              <td className="py-10 px-4">{row.product}</td>
              <td className="py-10 px-4">{row.reason}</td>
              <td className="py-10 px-4">{row.quantity}</td>
              <td className="py-10 px-4">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
