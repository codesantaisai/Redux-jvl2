import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slice/customerSlice";
import { useDispatch } from "react-redux";

function CustomerAdd() {
  const [input, setInput] = useState("");
  //   const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();
  const addCustomer = () => {
    if (input) {
      //   setCustomers((previousState) => [...previousState, input]);
      dispatch(addCustomerAction(input));
      setInput("");
    }
  };

  return (
    <div>
      <h3>Add new customer</h3>
      <input
        type="text"
        value={input}
        placeholder="Enter name"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addCustomer}>Add</button>
      {/* <CustomerView customers={customers} /> */}
    </div>
  );
}

export default CustomerAdd;
