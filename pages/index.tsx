import Head from "next/head";
import Yolo from "../components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center w-screen">
        <h1 className="m-5 text-xl font-bold">Real-Time Object Detection using AI</h1>
        <meta name="author" content="Surakarapu Shanmukh Srinivas" />
        <Yolo />
        <p className="m-5">
          Created by{" "}
          <a
            className="underline underline-offset-1 hover:translate-y-1"
            href="https://github.com/shanmukhisaway"
          >
            @shanmukh
          </a>{" "}
          &copy; {currentYear}
        </p>
      </main>
    </>
  );
}
