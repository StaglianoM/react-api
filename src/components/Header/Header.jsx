import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.nav_container}>
                <nav>
                    <ul className={style.menu}>
                        <a href="#">Logo</a>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}