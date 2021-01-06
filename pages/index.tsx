import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage></MainPage>
    </div>
  );
}
