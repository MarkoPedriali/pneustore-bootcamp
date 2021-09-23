import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '.Components/Header/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seu Carrinho | PneuStore </title>
        <meta name="description" content="PneuStore -O pneu ideal para o seu Veículo e moto" />
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <Header/>


    </div>
  )
}
