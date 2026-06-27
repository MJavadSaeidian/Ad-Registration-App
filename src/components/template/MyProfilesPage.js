import DashboardCard from "@/module/DashboardCard"
import styles from "@/template/MyProfilesPage.module.css"

function MyProfilesPage({ profiles }) {
    return (
        <div className={styles.container}>
            {profiles.length ? null : (
                <h3 className={styles.text} > هیچ آگهی ثبت نشده است</h3>
            )
            }
            {profiles.map(i => <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />)}
        </div>
    )
}

export default MyProfilesPage