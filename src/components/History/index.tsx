import React, { useState } from "react";
import { Scroll, Item } from "./StyledHistory";
import styles from "../generalStyles.module.css";

function History({ history, setHistory }: any) {
  return (
    <>
      <h2 className={styles.title}>History</h2>
      <Scroll>
        {history.map((item: any, index: number) => {
          if (index == 0) return;
          return (
            <Item key={index} value={item.value}>
              <div>{item.item}</div>
              <div>${item.value}</div>
            </Item>
          );
        })}
      </Scroll>
    </>
  );
}

export default History;
