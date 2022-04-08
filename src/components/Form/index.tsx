import React, { useState } from "react";
import { FormContent, Input, Label, Button } from "./StyledForm";

function Form({history, setHistory}: any) {
  const [data, setData] = useState({
    payment: "",
    amount: 0,
  });

  let a:any = [];
  // const [history, setHIstory] = useState([
  //   {item:"", value:0}
  // ]);

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
    //return console.log(`${data[0].payment}`);
    //setHIstory(history.concat(data.payment))
    setHistory([...history,{item:data.payment, value:data.amount}])
  };

  return (
    <>
      <h2>Add new transaction</h2>
      <hr />
      <FormContent onSubmit={handleSubmit}>
        <Label htmlFor="payment">Text</Label>
        <Input
          onChange={handleChange}
          id="payment"
          name="payment"
          type={"text"}
          placeholder="Payment"
          autoComplete="off"
          required
        />
        <Label htmlFor="payment">
          Amount
          <br />
          (negative - expense, positive - income)
        </Label>
        <Input
          onChange={handleChange}
          id="payment"
          name="amount"
          type={"number"}
          autoComplete="off"
          required
          placeholder="Amount"
        />
        <Button id="addList" type={"submit"} value="Add transaction" />
      </FormContent>
    </>
  );
}

export default Form;
