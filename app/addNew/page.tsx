
'use client'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";


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
  sf: string;
}) => {
  try {
    const response = await fetch(`api/manatime`, {
      method: "POST",
      body: JSON.stringify({ utilisateur, categorie, periode, sa, sp, sf }),
      headers: {
        "Content-Type": "application/json"
      }
    });


    if (response.ok) {
      const data = await response.json();
      return data;
    }

    const errorMessage = `L'ajout a échoué avec le statut : ${response.status}`;
    throw new Error(errorMessage);
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
    throw error;
  }
};



export default function AddNew() {
  const options = ['Jean Claude', 'Marie Jane', 'Peter Parker', 'Docteur Strange', 'Thor', 'Black Panther', 'John snow', 'Garry Daniel'];

  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [errorAnnee, setErrorAnnee] = useState(false);

  const categoryRef = useRef<HTMLInputElement | null>(null);
  const periodeRef = useRef<HTMLInputElement | null>(null);
  const saRef = useRef<HTMLInputElement | null>(null);
  const spRef = useRef<HTMLInputElement | null>(null);
  const sfRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();



  const isYearValid = (year: any) => {
    return /^\d{4}$/.test(year);
  };

  const [errors, setErrors] = useState({
    categorie: false,
    periode: false,
    sa: false,
    sp: false,
    sf: false,
  });

  const validateFields = () => {
    let isValid = true;

    const refs = [categoryRef, periodeRef, saRef, spRef, sfRef];

    for (const ref of refs) {
      if (!ref.current || !ref.current.value.trim()) {
        isValid = false;
      }
    }

    setErrors({
      categorie: !categoryRef.current || !categoryRef.current.value.trim(),
      periode: !periodeRef.current || !periodeRef.current.value.trim(),
      sa: !saRef.current || !saRef.current.value.trim(),
      sp: !spRef.current || !spRef.current.value.trim(),
      sf: !sfRef.current || !sfRef.current.value.trim(),
    });

    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isValidYear = isYearValid(periodeRef.current?.value);
    if (!isValidYear) {
      setErrorAnnee(true);
      return
    } else {
      setErrorAnnee(false);
    }

    if (validateFields()) {
      console.log('Form data:', {
        utilisateur: value || '',
        categorie: categoryRef.current ? categoryRef.current.value : '',
        periode: periodeRef.current ? periodeRef.current.value : '',
        sa: saRef.current ? saRef.current.value : '',
        sp: spRef.current ? spRef.current.value : '',
        sf: sfRef.current ? sfRef.current.value : '',
      });
      if (value && categoryRef.current && periodeRef.current && saRef.current && spRef.current && sfRef.current) {
        await addData({
          utilisateur: value,
          categorie: categoryRef.current?.value,
          periode: periodeRef.current?.value,
          sa: saRef.current?.value,
          sp: spRef.current?.value,
          sf: sfRef.current?.value,
        });
        toast.success("Enregistrement Successfully");
        router.push("/manatime");
      }
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
            error={errors.categorie}
            helperText={errors.categorie ? 'Catégorie is required' : ''}
          />
          <TextField
            fullWidth
            inputRef={periodeRef}
            label="Période"
            id="Période"
            error={errors.periode || errorAnnee}
            helperText={(errors.periode || errorAnnee) ? 'Période is required or year invalid' : ''} />
          <div className='flex space-x-2'>
            <TextField
              fullWidth
              inputRef={saRef}
              label="Solde actuel"
              id="sa"
              type="number"
              error={errors.sa}
              helperText={errors.sa ? 'Solde actuel is required' : ''} />
            <TextField
              fullWidth
              inputRef={spRef}
              label="Solde pris"
              id="sp"
              type="number"
              error={errors.sp}
              helperText={errors.sp ? 'Solde pris is required' : ''} />
            <TextField
              fullWidth
              inputRef={sfRef}
              label="Solde futur"
              id="sf"
              type="number"
              error={errors.sf}
              helperText={errors.sf ? 'Solde futur is required' : ''} />
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
