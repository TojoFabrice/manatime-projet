'use client'

import Table from "@/app/components/table/table";
import { useEffect, useState } from "react";

export default function Manatime() {

    const [datas, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`api/manatime`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result.dataManaTime)
        }
    
        fetchData().catch((e) => {
            console.error('An error occurred while fetching the data: ', e)
        })
    }, [])

    return (

        <div className='w-full h-auto overflow-y-auto'>
            <div>
                <Table datas={datas}/>
            </div>
        </div>

    )
}