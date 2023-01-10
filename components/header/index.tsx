import PlayerInfo from "@components/header/playerInfo";
import styles from './index.module.css';

const Header = () => {
    return <div className={styles.header}>
        <PlayerInfo />
    </div>
}

export default Header;