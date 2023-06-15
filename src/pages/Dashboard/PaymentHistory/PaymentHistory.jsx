import { useQuery } from "@tanstack/react-query";
import React from "react";

const PaymentHistory = () => {
  const { data: paymentHistory = [], refetch } = useQuery(
    ["paymentHistory"],
    async () => {
      const res = await fetch("http://localhost:5000/payments");
      return res.json();
    }
  );

  return (
    <div>
      <h2 className="text-5xl text-center font-semibold pt-10 uppercase underline text-[#168aad] italic">
       Payment History
      </h2>
      <div className="   px-36 py-20 ">
        <div className="overflow-x-auto shadow-xl bg-base-100">
          <table className="table w-full ">
            {/* head */}
            <thead className=" bg-[#168aad]  text-white text-lg">
              <tr>
        
                <th>Email</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {paymentHistory.map((history, index) => (
                <tr className="text-lg">
                 
                  <td>
                   {history.email}
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{history.className}</div>
                      </div>
                    </div>
                  </td>
                  <td>{history.price}</td>
                  <td>{history.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
