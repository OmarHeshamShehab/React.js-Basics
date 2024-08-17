"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Description from "@/components/Description";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const calculateIncome = () => {
    let number = 10;
    for (let index = 0; index < 1000; index++) {
      number = number + index;
    }
    console.log("calculating");
    return number;
  };
  let hideDescription = "null";
  const [counter, setcounter] = useState<number>(0); // <number> is not essential to be added
  const [Success, setSuccess] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [shouldCalculate, setshouldCalculate] = useState(true);
  const income = useMemo(() => calculateIncome(), [shouldCalculate]);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    console.log(inputRef.current?.value);
  };
  const handleclick = () => {
    setcounter(counter + 1);
    //console.log(counter);
    if (counter === 10) {
      setSuccess(true);
      alert("This is an alert message!");
      setshouldCalculate(false);
    }
  };
  useEffect(() => {
    console.log("#Event is Success");
  }, [Success]);
  useEffect(() => {
    console.log("## counter has been incremented");
  }, [counter]);
  return (
    <main
      style={{
        color: "red",
        backgroundColor: "navy",
      }} /*className={styles.main}*/
    >
      <div className={styles.section}>hi there?</div>
      <Header
        text={"Hello From Main Text"}
        //textsub={"Hello From Main Text Sub"}
      />
      {hideDescription && <Description />}
      <Link href="/about" style={{ color: "blue", backgroundColor: "white" }}>
        About Page
      </Link>
      <p>counter: {counter}</p>
      <button onClick={handleclick}>Click to Increment</button>
      <br></br>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Click to focus</button>
      {counter === 10 && <h4>Income: {income}</h4>}
    </main>
    //  {hideDescription ? <Description /> : null} same as line 14
  );
}
