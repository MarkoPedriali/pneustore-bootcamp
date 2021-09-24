import styles from './Header.module.css'

export default function Header(){
    return(
        <div className={styles.Header}>
            <div>
            <ul className={styles.sac}>
                <li>
                    SAC 0800 602 2013
                </li>
                <li>
                    ? Perguntas Frequentes
                </li>
                <li>
                    Contato
                </li>
            </ul>
            </div>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="PneuStore.png" />
                </div>
                <div className={styles.input}>
                    <input type= "text" placeholder='  Pesquise por marca e medida. exemplo(175/65)'></input>
                </div>
                <div className={styles.login}>
                    <img src="login.png"/>
                </div>
            </div>
        </div>
    )
}