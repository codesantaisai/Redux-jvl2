import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slice/customerSlice";

function CustomerView() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const deleteHandler = (i)=>{
    dispatch(deleteCustomer(i))
  }
  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((customer,i) => (
          <li key={i}>
            {customer} <button onClick={()=>deleteHandler(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerView;
