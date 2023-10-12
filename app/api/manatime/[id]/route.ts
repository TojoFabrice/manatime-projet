import { deleteData, getById, updateData } from "@/app/data/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   try {
        const id = req.url.split('manatime/')[1];
        const data = await getById(id)
        if(!data){
            return NextResponse.json({message:'Aucun données correspondant'}, {
                status: 404
            })
        }
        return NextResponse.json({message:'Success', data}, {
            status: 200
        })
   } catch (error) {
        return NextResponse.json({message:'Error', error}, {
            status: 500
        })
   }
    
}

export const POST = async (req: Request) => {
    console.log(POST);
    
}

export const PUT = async (req: Request) => {
    try {
        const {
            utilisateur,
            categorie,
            periode,
            sa,
            sp,
            sf
        } = await req.json()
        const id = req.url.split('manatime/')[1];
        await updateData(id, utilisateur, categorie, periode, sa, sp,sf)
        return NextResponse.json({message:'Success'}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message:'Error', error}, {
            status: 500
        })
    }
}

export const DELETE = async (req: Request) => {
    try {
        const id = req.url.split('manatime/')[1];
        await deleteData(id)
        return NextResponse.json({message:'Success'}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message:'Error', error}, {
            status: 500
        })
    }    
}