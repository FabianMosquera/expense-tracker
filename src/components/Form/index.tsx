import React, { useState } from "react";
import { FormContent, Input, Label, Button } from "./StyledForm";
import styles from "../generalStyles.module.css";

function Form({ history, setHistory }: any) {
  const [data, setData] = useState({
    payment: "",
    amount: 0,
  });

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
    setHistory([...history, { item: data.payment, value: data.amount }]);
  };

  return (
    <>
      <h2 className={styles.title}>Add new transaction</h2>
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
