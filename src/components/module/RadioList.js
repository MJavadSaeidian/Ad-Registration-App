import styles from "@/module/RadioList.module.css"

function RadioList({ profileData, setProfileData }) {

    const { category } = profileData

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value })
    }

    return (
        <div className={styles.container}>
            <p>دسته بندی</p>
            <div className={styles.main}>
                <div>
                    <label>ویلا</label>
                    <input type="radio" id="villa" name="category" value="vila" checked={category === "vila"} onChange={changeHandler} />
                </div>
                <div>
                    <label>آپارتمان</label>
                    <input type="radio" id="apartman" name="category" value="apartman" checked={category === "apartman"} onChange={changeHandler} />
                </div>
                <div>
                    <label>مغازه</label>
                    <input type="radio" id="store" name="category" value="store" checked={category === "store"} onChange={changeHandler} />
                </div>
                <div>
                    <label>دفتر</label>
                    <input type="radio" id="office" name="category" value="office" checked={category === "office"} onChange={changeHandler} />
                </div>
            </div>
        </div>
    )
}

export default RadioList