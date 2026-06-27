import { cities, services } from "@/constants/strings"
import CategoryCard from "@/module/CategoryCard"
import styles from "@/template/HomePage.module.css"
import { FaMountainCity } from "react-icons/fa6"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

function HomePage() {
   
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.desc}>
                    <h1>ملکــــینـو </h1>
                    <h3>سامانه خرید و اجاره ملک</h3>
                    <ul>
                        {services.map((i) => (
                            <li key={i}>
                                <IoMdCheckmarkCircleOutline />
                                <span>{i}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.categories}>
                <CategoryCard title="خانه ویلایی" name="vila" />
                <CategoryCard title="آپارتمان" name="apartman" />
                <CategoryCard title="مغازه" name="store" />
                <CategoryCard title="دفتر" name="office" />

            </div>
            <div className={styles.city}>
                <h3>شهر های پر بازدید</h3>
                <ul>
                    {cities.map((i) => (
                        <li key={i}>
                            <FaMountainCity />
                            <span>{i}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage