import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
    try {

        //اتصال به دیتابیس
        await connectDB();

        //دریافت اطلاعات
        const { email, password } = await req.json();
        console.log(email, password)

        if (!email || !password) {
            return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 422 })
        }

        //بررسی وجود نام کاربری از قبل
        const existingUser = await User.findOne({ email: email })
        console.log(existingUser)

        if (existingUser) {
            return NextResponse.json(
                { error: "این حساب کاربری وجود دارد" },
                { status: 422 }
            )
        }

        // ایجاد پسورد هش شده
        const hashedPassword = await hashPassword(password)

        // ایجاد کاربر جدید
        const newUser = await User.create({
            email: email,
            password: hashedPassword ,
        })
        console.log(newUser);

        return NextResponse.json({ message: "حساب کاربری ایجاد شد" }, {status:201})
    }

    // هندل کردن ارورها
    catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            { status: 500 }
        )
    }
}