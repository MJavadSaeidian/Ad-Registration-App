import BuyResidentialPage from '@/template/BuyResidentialPage'
import React from 'react'

async function BuyResidential({ searchParams }) {
    const params = await searchParams;

    const res = await fetch("http://localhost:3000/api/profile", {
        cache: "no-store"
    });

    const data = await res.json();

    if (data.error) return <h3>مشکلی پیش آمده است</h3>;

    // فیلتر کردن بر اساس دسته بندی
    let finalData = data.data;

    if (params.category) {
        finalData = finalData.filter(
            (i) => i.category === params.category
        );
    }

    return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;