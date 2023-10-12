
'use client'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

// const addData = async ({
//     utilisateur,
//     categorie,
//     periode,
//     sa,
//     sp,
//     sf
//   }: {
//     utilisateur: string | null;
//     categorie: string;
//     periode: string;
//     sa: string;
//     sp: string;
//     sf: string
//   }) => {
//     const res = fetch(`api/manatime`, {
//       method: "POST",
//       body: JSON.stringify({ utilisateur, categorie, periode, sa, sp, sf }),
//       //@ts-ignore
//       "Content-Type": "application/json",
//     });
//     return (await res).json();
//   };

const addData = async ({
    utilisateur,
    categorie,
    periode,
    sa,
    sp,
    sf
  }: {
    utilisateur: string | null;
    categorie: string;
    periode: string;
    sa: string;
    sp: string;
    sf: string
  }) => {
    try {
      const res = await fetch(`api/manatime`, {
        method: "POST",
        body: JSON.stringify({ utilisateur, categorie, periode, sa, sp, sf })
      });
  
      if (res.status === 200) {
        const response = await res.json();
        return response
      } else {
        console.error('L\'ajout a échoué avec le statut :', res.status);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };
  


  
export default function AddNew() {
    const options = ['Jean Claude', 'Marie Jane', 'Peter Parker', 'Docteur Strange', 'Thor', 'Black Panther', 'John snow', 'Garry Daniel'];

    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

   
    // const userRef = useRef<HTMLInputElement | null>(null);
    const categoryRef = useRef<HTMLInputElement | null>(null);
    const periodeRef = useRef<HTMLInputElement | null>(null);
    const saRef = useRef<HTMLInputElement | null>(null);
    const spRef = useRef<HTMLInputElement | null>(null);
    const sfRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (value && categoryRef.current && periodeRef.current && saRef.current && spRef.current && sfRef.current) {
          await addData({
            utilisateur: value ,
            categorie: categoryRef.current?.value,
            periode: periodeRef.current?.value,
            sa: saRef.current?.value,
            sp: spRef.current?.value,
            sf: sfRef.current?.value,
          });
          toast.success("Enregistrement Successfully");
          router.push("/manatime");
        }
        
      };
    

    return (
        <div className='flex justify-center mt-20 bg-white w-3/4 m-auto p-7'>
            <Toaster />
            <Box
                sx={{
                    width: 1000,
                    maxWidth: '100%',
                }}
                
            >
                <form onSubmit={handleSubmit} className="space-y-3">

                    <Autocomplete
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="Utilisateur"
                        options={options}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} label="Utilisateur" />}
                    />

                    <TextField 
                        inputRef={categoryRef}
                        fullWidth 
                        label="Catégorie" 
                        id="catégorie" 
                        
                    />
                    <TextField fullWidth inputRef={periodeRef} label="Période" id="Période" />
                    <div className='flex space-x-2'>
                        <TextField fullWidth inputRef={saRef} label="Solde actuel" id="sa" type="number" />
                        <TextField fullWidth inputRef={spRef} label="Solde pris" id="sp" type="number" />
                        <TextField fullWidth inputRef={sfRef} label="Solde futur" id="sf" type="number" />
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <Button variant="outlined" color="error">Annuler</Button>
                        <Button type="submit" variant="outlined">Enregistrer</Button>
                    </div>
                </form>
            </Box>
        </div>

    )
}
