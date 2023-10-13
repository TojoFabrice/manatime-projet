'use client'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

interface MyData {
    utilisateur: string;
    categorie: string;
    periode: string;
    sa: string;
    sp: string;
    sf: string;
}

const PageModif = () => {
    const options = ['Jean Claude', 'Marie Jane', 'Peter Parker', 'Docteur Strange', 'Thor', 'Black Panther', 'John snow', 'Garry Daniel'];
    const router = useRouter();
    const segments = usePathname().split('/');

    const id = segments[segments.length - 1];

    const [modifiedData, setModifiedData] = useState<MyData>({
        utilisateur: "",
        categorie: "",
        periode: "",
        sa: "",
        sp: "",
        sf: ""
    });


    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (id) {
            fetch(`/api/manatime/${id}`)
                .then((response) => response.json())
                .then((result) => {
                    setModifiedData(result.data);
                })
                .catch((error) => {
                    console.error('Une erreur s\'est produite lors de la récupération des données :', error);
                });
        }
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setModifiedData({ ...modifiedData, [name]: value });
    };


    const handleUpdate = async () => {
        try {
            const response = await fetch(`/api/manatime/${id}`, {
                method: 'PUT',
                body: JSON.stringify(modifiedData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) { console.error('La requête a échoué avec le statut :', response.status); }

            const result = await response.json();
            console.log('Mise à jour réussie :', result);
            return result
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour :', error);
        }
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!modifiedData.utilisateur || !modifiedData.categorie || !modifiedData.periode || !modifiedData.sa || !modifiedData.sp || !modifiedData.sf) {
            toast.error('Les champs ne peuvent pas être vides');
            return;
        }

        if (modifiedData) {
            await handleUpdate()
            toast.success("Mise à jour Successfully");
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
                        value={modifiedData?.utilisateur || value}
                        onChange={(event: any, newValue: string | null) => {
                            if (newValue !== null) {
                                setValue(newValue);
                                setModifiedData({ ...modifiedData, utilisateur: newValue });
                            }
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
                        fullWidth
                        label="Catégorie"
                        name="categorie"
                        id="catégorie"
                        value={modifiedData?.categorie || ''}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        label="Période"
                        name="periode"
                        id="Période"
                        value={modifiedData.periode || ''}
                        onChange={handleInputChange} />
                    <div className='flex space-x-2'>
                        <TextField fullWidth
                            label="Solde actuel"
                            id="sa"
                            name='sa'
                            type="number"
                            value={modifiedData.sa || ''}
                            onChange={handleInputChange} />
                        <TextField
                            fullWidth
                            label="Solde pris"
                            id="sp"
                            name='sp'
                            type="number"
                            value={modifiedData.sp || ''}
                            onChange={handleInputChange} />
                        <TextField fullWidth
                            label="Solde futur"
                            id="sf"
                            name='sf'
                            type="number"
                            value={modifiedData.sf || ''}
                            onChange={handleInputChange} />
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <Button variant="outlined" color="error" onClick={() => router.push('/manatime')}>Annuler</Button>
                        <Button type="submit" variant="outlined">Enregistrer</Button>
                    </div>
                </form>
            </Box>
        </div>
    )
}

export default PageModif