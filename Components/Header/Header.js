import styles from './Header.module.scss'

export default function Header(){
    return(
        <div className={styles.Header}>
            <div>
            <ul className={styles.sac}>
                <li>
                    SAC 0800 602 2013
                </li>
                <li>
                    Perguntas Frequentes
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
                <div className={styles.user}>
                    <div className={styles.login}>
                        <img src="login.png" className={styles.icon} alt="login"/>
                    </div>
                    <div className={styles.cart}>
                        <img src="cart.png" className={styles.icon} alt="carrinho de compras"/>
                        <p><strong>2</strong></p>
                    </div>
                </div>
                <div className={styles.search}>
                    <input type= "text" placeholder='  Pesquise por marca e medida. exemplo(175/65)'></input>
                    <div className={styles.searchIcon}>
                        <img src="search.png" className={styles.icon} alt="botao de pesquisa"/>
                    </div>
                </div>
            </div>
        </div>
    )
}