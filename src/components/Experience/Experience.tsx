
import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Erfahrungen</h2>
            
            <div className={styles.content}>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={`${styles.historyItem} ${styles.glassEffect} `}>
                                    {/* <div className={styles.companyImgContainer}>
                                        <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} className={styles.historyImg} />
                                    </div> */}
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <h2>{`${historyItem.job}`}</h2>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul >
                                            {
                                                historyItem.experience.map((experience, id) => {
                                                    return <li key={id} className={styles.experience}>{experience}</li>
                                                })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }</ul>
            </div>

        </section>
    );
};
