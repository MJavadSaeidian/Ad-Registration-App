import styles from "@/layout/Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>

                <div className={styles.footer_box}>
                    <h3>ملکینو</h3>
                    <p>
                        سامانه ثبت و جستجوی آگهی‌های خرید، فروش و اجاره ملک.
                        بهترین خانه‌ها را سریع‌تر پیدا کنید.
                    </p>
                </div>

                <div className={styles.footer_box}>
                    <h4>دسترسی سریع</h4>
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">ثبت آگهی</a></li>
                        <li><a href="#">املاک جدید</a></li>
                        <li><a href="#">تماس با ما</a></li>
                    </ul>
                </div>

                <div className={styles.footer_box}>
                    <h4>خدمات</h4>
                    <ul>
                        <li><a href="#">خرید ملک</a></li>
                        <li><a href="#">اجاره آپارتمان</a></li>
                        <li><a href="#">فروش ملک</a></li>
                        <li><a href="#">مشاورین املاک</a></li>
                    </ul>
                </div>

                <div className={styles.footer_box}>
                    <h4>ارتباط با ما</h4>
                    <p>📍 تهران، خیابان ولیعصر</p>
                    <p>📞 021-12345678</p>
                    <p>✉ info@example.com</p>

                    <div className={styles.social}>
                        <a href="#">Instagram</a>
                        <a href="#">Telegram</a>
                    </div>
                </div>

            </div>

            <div className={styles.footer_bottom}>
                © 2026 تمامی حقوق برای ملکینو محفوظ است.
            </div>
        </footer>
    )
}

export default Footer