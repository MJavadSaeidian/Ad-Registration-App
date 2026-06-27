import AdminCard from "@/module/AdminCard"
import Card from "@/module/Card"
import styles from "@/template/AdminPage.module.css"

function AdminPage({ profiles }) {
    return (
        <div className={styles.container}>
            {
                profiles?.length ? null : (
                    <p className={styles.text}>هیچ آگهی تایید نشده ای نداریم !</p>
                )}
            {profiles?.map((i) => (
                <div key={i._id} className={styles.main}>
                    <Card data={JSON.parse(JSON.stringify(i))}/>
                    <AdminCard data={JSON.parse(JSON.stringify(i))} />
                    
                </div>
            ))}

        </div>
    )
}

export default AdminPage