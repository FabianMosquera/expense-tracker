import React from "react";
import { DashContainer, DashText } from "./StyledDashboard";
import styles from "../generalStyles.module.css";

function Dashboard({ history, setHistory }: any) {
  const add = (a: number, b: any) => a + parseFloat(b.value);

  return (
    <>
      <h1 className={`${styles.title} ${styles.isLine}`}>Expense Tracker</h1>
      <h1 className={`${styles.title} ${styles.subTitle} ${styles.isLine}`}>Your Balance</h1>
      <h1 className={`${styles.title} ${styles.subTitle} ${styles.isLine}`}>
        ${history.reduce(add, 0)}
      </h1>

      <DashContainer>
        <div>
          <DashText>INCOME</DashText>
          <DashText color="green">
            {history.filter((item: any) => item.value > 0).reduce(add, 0)}
          </DashText>
        </div>
        <div>
          <DashText>EXPENSE</DashText>
          <DashText color="red">
            {history.filter((item: any) => item.value < 0).reduce(add, 0) * -1}
          </DashText>
        </div>
      </DashContainer>
    </>
  );
}

export default Dashboard;
