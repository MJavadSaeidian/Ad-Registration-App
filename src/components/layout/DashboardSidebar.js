import { CgProfile } from "react-icons/cg"
import styles from "./DashboardSidebar.module.css"
import Link from "next/link"
import LogoutButton from "@/module/LogoutButton"

async function DashboardSidebar({ children , email , role}) {

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <CgProfile />
                {role === "ADMIN" ? "ادمین" : "کاربر"}
                <p>{email}</p>
                <span></span>
                <Link href="/dashboard" className={styles.link}>حساب کاربری</Link>
                <Link href="/dashboard/my-profiles" className={styles.link}>پروفایل من</Link>
                <Link href="/dashboard/add" className={styles.link}>ثبت آگهی</Link>
                {role === "ADMIN" ? <Link href="/admin" className={styles.link} >در انتظار تایید</Link> : null}
                <LogoutButton />
            </div>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}

export default DashboardSidebar