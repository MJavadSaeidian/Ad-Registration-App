"use client"
import styles from "@/module/AdminCard.module.css"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"

function AdminCard({data}) {

    const router = useRouter()

    const publishHandler = async () => {
        const res = await fetch(`/api/profile/publish/${data._id}`, { method: "PATCH" })
        const result = await res.json()
        if (result.message) {
            toast.success(result.message)
            router.refresh();
        }
    }

    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/delete/${data._id}`, { method: "DELETE" })
        const result = await res.json()
        if (result.message) {
            toast.success(result.message)
            router.refresh();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <button onClick={publishHandler}>انتشار</button>
                <button onClick={deleteHandler}>حذف</button>
            </div>
            <Toaster />
        </div>
    )
}

export default AdminCard