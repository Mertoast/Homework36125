import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = ({ children }) => {
    return (
        <nav className={styles.navigation}>
            {children}
        </nav>
    );
}

Navigation.Item = ({ children, highlight, href }) => {

    const className = [
        styles.navigation__item
    ];

    if (highlight) className.push(styles['navigation__item-active'])

    return (
        <Link href={href} className={className.join(' ')}>{children}</Link>
    )
}

export { Navigation }