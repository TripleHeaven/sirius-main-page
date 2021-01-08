import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "../components/MainPage";
import { Global, css } from "@emotion/react";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;500&display=swap");

          body {
            margin: 0;
            padding: 0;
            background: #f1f4f8;
          }
        `}
      />
      <MainPage></MainPage>
    </div>
  );
}
