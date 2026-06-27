import styles from '@/template/DashboardPage.module.css'

function DashboardPage({ createdAt, email }) {


    return (
        <div className={styles.container}>
            <h3>
                سلام <span>{email}</span> عزیز 👋
            </h3>
            <p>
                آگهی های خود را اضافه کنید تا هزاران نفر آن را ببینند .
            </p>
            <div className={styles.createdAt}>
                <p>تاریخ عضویت</p>
                <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
            </div>
        </div>

    )
}

export default DashboardPage