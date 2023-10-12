"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import solder from '../../../public/icons/Solder.svg'
import ajuster from '../../../public/icons/Ajuster.svg'
import transferer from '../../../public/icons/Transferer.svg'
import { Roboto } from 'next/font/google'

import { Toaster, toast } from "react-hot-toast";
import ModalConfirmDelete from '../modal/ModalConfirmDelete'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})





const Table = ({ datas }: any) => {
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState<string>('')
    const [tableData, setTableData] = useState([]);
    const server = process.env.SERVER;
    
    useEffect(() => {
        setTableData(datas)
    },[datas])

    const deleteData = async (id: string) => {
        const res = fetch(`api/manatime/${id}`, {
          method: "DELETE",
          //@ts-ignore
          "Content-Type": "application/json",
        });
        setTableData((prev) => prev.filter((item:any) => item.id !== id))
        return (await res).json();
    };


    const handleClickOpen = (id: string) => {
        setIdToDelete(id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async (id: string) => {
        await deleteData(id);
        toast.success("Data Deleted");
        handleClose()
    };

    return (
        <div className="p-[30px] h-auto">
            <Toaster />
            <div className="overflow-auto rounded-lg shadow block">
                <table className={`${roboto.className} font-roboto w-full`}>
                    <thead className="bg-white border border-borderTable text-menu">
                        <tr className='divide-x divide-borderTable h-[38px]'>
                            <th className="w-[450px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Utilisateurs</th>
                            <th className="w-[450px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Catégorie</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Période</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Solde actuel</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Solde pris</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Solde futur</th>
                            <th className="w-[270px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-borderTable font-normal">
                        {
                            tableData && tableData.map((item: any, key: number) => {
                                return (
                                    <tr className={`${key % 2 == 0 ? "bg-[#F2F2F2]" : "bg-white"} divide-x divide-borderTable text-menu h-[39px]`} key={key}>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">
                                            <a href="#" className=" text-shadow hover:underline">{item.utilisateur}</a>
                                        </td>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">
                                            <div className='flex items-center'>
                                                <span className={`${key % 2 == 0 ? "bg-[#FF8851]" : "bg-[#A851FF]"} w-3 h-3 block rounded-full mr-[15px]`}></span>
                                                {item.categorie}
                                            </div>
                                        </td>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">{item.periode}</td>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">{item.sa}</td>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">{item.sp}</td>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">{item.sf}</td>
                                        <td className="px-15px text-base text-shadow whitespace-nowrap">
                                            <div className='flex justify-around'>
                                                <button>
                                                    <Image src={ajuster} alt="solder" width={32} height={32} />
                                                </button>
                                                <button>
                                                    <Image src={transferer} alt="solder" width={32} height={32} />
                                                </button>
                                                <button onClick={() => handleClickOpen(item.id)}>
                                                    <Image src={solder} alt="solder" width={32} height={32} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

            <ModalConfirmDelete open={open} handleClose={handleClose} handleDelete={handleDelete} id={idToDelete}/>
        </div>
    )
}

export default Table