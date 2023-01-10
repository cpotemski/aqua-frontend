import styles from './fleetMarker.module.css';

const FleetMarker = () => {
    return <div className={styles.main}>
        <div className={styles.ring}>
            <div className={styles.dot}></div>
        </div>
    </div>
}

export default FleetMarker;