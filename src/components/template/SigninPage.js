"use client"
import { useState } from "react"
import styles from "@/template/SignupPage.module.css"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import Loader from "@/module/Loader"




function SigninPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    const signinHandler = async (e) => {

        e.preventDefault();

        setLoading(true);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false)
        if (res.error) {
            toast.error(res.error)
        } else {
            toast.success("خوش آمدید 👋 ورود شما موفقیت‌آمیز بود")

            setTimeout(() => {
                router.push("/")
            }, 2000)
        }

    }

    return (
        <div className={styles.form}>
            <h4>
                فرم ورود
            </h4>
            <form>
                <label>ایمیل یا نام کاربری</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <label>رمز عبور</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                {loading ? (<Loader/>) :
                    (<button type="submit" onClick={signinHandler}>ورود</button>)}


            </form>
            <p>تا حالا ثبت نام نکرده اید ؟ <Link href="/signup">ثبت نام</Link></p>
            <Toaster />
        </div>
    )
}

export default SigninPage