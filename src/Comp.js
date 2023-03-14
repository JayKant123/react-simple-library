import { Button } from "antd";
import React, { useState } from "react";
import Select from "react-select";
import styles from "./styles.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export default function App(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={styles.container}>
      <Button {...props}>hii jaykant</Button>
    </div>
  );
}
