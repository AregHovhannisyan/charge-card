import Head from 'next/head';
import { css } from '@emotion/css';
import ChargeCard from "../components/ChargeCard/ChargeCard";
import chargeData from "../data/charge.json";

const Index = () => {
  const bgColor = '#f5f5f5';
  return (
    <div className={css`
          display: flex;
          justify-content: center;
          padding-top: 50px;
          height: 100vh;
          background: ${bgColor}
        `}>
      <Head>
        <title>Charge card app</title>
      </Head>
      <main>
         <ChargeCard charge={chargeData}></ChargeCard>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Index;

