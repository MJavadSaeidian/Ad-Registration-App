'use client'
import styles from '@/module/Sidebar.module.css'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { HiFilter } from 'react-icons/hi'
function Sidebar() {
    
    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    return (
        <div className={styles.container}>
            <p>
                <HiFilter />
                دسته بندی
            </p>

            <Link
                href="/buy-residential"
                className={!category ? styles.active : ''}
            >
                همه
            </Link>

            <Link
                href={{ pathname: "/buy-residential", query: { category: "vila" } }}
                className={category === 'vila' ? styles.active : ''}
            >
                ویلا
            </Link>

            <Link
                href={{ pathname: "/buy-residential", query: { category: "apartman" } }}
                className={category === 'apartman' ? styles.active : ''}
            >
                آپارتمان
            </Link>

            <Link
                href={{ pathname: "/buy-residential", query: { category: "office" } }}
                className={category === 'office' ? styles.active : ''}
            >
                دفتر
            </Link>

            <Link
                href={{ pathname: "/buy-residential", query: { category: "store" } }}
                className={category === 'store' ? styles.active : ''}
            >
                مغازه
            </Link>
        </div>
    )
}


export default Sidebar