// import { addData, getDataList } from "";
import { addData, getDataList } from "@/app/data/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    
    try {
        const dataManaTime = await getDataList()

        return NextResponse.json({message:'ok', dataManaTime}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message:'Error', error}, {
            status: 500
        })
    }
}

export const POST = async (req: Request, res: Response) => {
    const {
        utilisateur,
        categorie,
        periode,
        sa,
        sp,
        sf
    } = await req.json()

    try {
        const data = {utilisateur, categorie, periode, sa, sp, sf, id: Date.now().toString()};
        await addData(data)
        return NextResponse.json({message:'ok', data}, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({message:'Error', error}, {
            status: 500
        })
    }
    
}
