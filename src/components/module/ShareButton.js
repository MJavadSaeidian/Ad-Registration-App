"use client"

import styles from "@/module/ShareButton.module.css"
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import toast, { Toaster } from "react-hot-toast"
import { LuShare2 } from "react-icons/lu"

function ShareButton() {
    const [url, setUrl] = useState("")

    useEffect(() => {
        setUrl(window.location.href)
    }, [])

    return (

            <CopyToClipboard text={url} onCopy={() => toast.success("لینک کپی شد")} >
                <div className={styles.container}>
                    <LuShare2 />
                    <button>اشتراک گذاری</button>
                </div>
            </CopyToClipboard>

    )
}

export default ShareButton