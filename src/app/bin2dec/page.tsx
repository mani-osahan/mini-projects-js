"use client";
import { FormEvent, useState } from "react";
export default function BinToDec() {
  const [binary, setBinary] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const convert = (binaryTotal: String[]) => {
    return binaryTotal.reduce((accumulator: any, currentValue: any) => {
      return (
        accumulator + Number(currentValue) * Math.pow(2, binaryTotal.length - 1)
      );
    }, 0);
  };

  let handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const binaryTotal = binary.split("");
    const decimal = convert(binaryTotal);
    setResult(decimal);
    console.log(decimal);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e: any) => setBinary(e.target.value)}
          type="text"
          value={binary}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
