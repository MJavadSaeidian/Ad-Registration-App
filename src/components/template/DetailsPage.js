import { icons } from "@/constants/icons"
import { categories } from "@/constants/strings"
import ItemList from "@/module/ItemList"
import ShareButton from "@/module/ShareButton"
import styles from "@/template/DetailsPage.module.css"
import { e2p, sp } from "@/utils/replaceNumber"
import { AiOutlinePhone } from "react-icons/ai"
import { BiCalendarCheck } from "react-icons/bi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { SiHomebridge } from "react-icons/si"

function DetailsPage({ data: {
    title,
    location,
    description,
    amenities,
    rules,
    phone,
    price,
    realState,
    constructionDate,
    category
} }) {



    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>{title}</h1>
                <span>
                    <HiOutlineLocationMarker />
                    {location}
                </span>
                <h3 className={styles.title}>توضیحات</h3>
                <p>{description}</p>
                <h3 className={styles.title}>امکانات</h3>
                <ItemList data={amenities} />
                <h3 className={styles.title}>قوانین</h3>
                <ItemList data={rules} />

            </div>
            <div className={styles.sidebar}>
                <div className={styles.realState}>
                    <SiHomebridge />
                    <p>مشاورین املاک <br />{realState}</p>
                    <span>
                        <AiOutlinePhone />
                        {e2p(phone)}
                    </span>
                </div>
                <div className={styles.price}>
                    <p>
                        {icons[category]}
                        {categories[category]}
                    </p>
                    <p>
                        {sp(price)} تومان
                    </p>
                    <p>
                        <BiCalendarCheck />
                        {new Date(constructionDate).toLocaleDateString("fa-IR")}
                    </p>
                </div>
                <ShareButton />
            </div>
        </div>
    )
}

export default DetailsPage