import { useRouter } from 'next/router';
import styles from './Header.module.css'
import { Navigation } from '../Navigation';

import { menuItems } from './menuItems';

export const Header = () => {
    const router = useRouter()
    const currentPage = router.asPath;

    return (
        <div className={styles.header}>
            <div className={`${styles.header__position} ${styles['header__position-brand']}`}>
                <h1 className={styles.brandname}>BrandName</h1>
            </div>
            <div className={`${styles.header__position} ${styles['header__position-nav']}`}>
                <Navigation>
                    {menuItems.map(item => {
                        const isHighlight = item.href === currentPage;

                        return (
                            <Navigation.Item key={item.href} href={item.href} highlight={isHighlight}>
                                {item.label}
                            </Navigation.Item>
                        );
                    })}
                </Navigation>
            </div>
            <div className={`${styles.header__position} ${styles[`header__position-authorization`]}`}>
                <div className={styles.authorization}>
                    <div className={styles['authorization__position']}>
                        <button className={styles.login}>Login</button>
                    </div>
                    <div className={styles['authoriztion__position']}>
                        <button className={styles.join}>JOIN US</button>
                    </div>
                </div>
            </div>
        </div>
    )
}