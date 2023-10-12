import fs from 'node:fs/promises';

type DataManaTime = {
    id: string,
    utilisateur: string,
    categorie: string,
    periode: string,
    sa: number,
    sp: number,
    sf: number,
}

const dataFileName = process.cwd() + '/data/database.json'


let dataManaTime: DataManaTime[] = [];

const loadData = async () => {
    try {
      const jsonData = await fs.readFile(dataFileName, 'utf8');
      dataManaTime = JSON.parse(jsonData);
      
    } catch (error) {
      dataManaTime = [];
    }
};

const saveData = () => {
    const jsonData = JSON.stringify(dataManaTime, null, 2);
    fs.writeFile(dataFileName, jsonData, 'utf8');
};

export const getDataList = async () => {
    await loadData();
    return  dataManaTime
};

export const addData = async (datas: DataManaTime) => {
    await loadData();
    dataManaTime.push(datas);
    saveData()
}

export const deleteData = async (id: string) => {
    await loadData();
    dataManaTime = dataManaTime.filter((data) => data.id !== id)
    saveData()
}

export const updateData = async (
    id: string,
    utilisateur: string,
    categorie: string,
    periode: string,
    sa: number,
    sp: number,
    sf: number,
) => {
    await loadData();
    const data = dataManaTime.find((data) => data.id === id);

    if (data) {
        data.utilisateur = utilisateur;
        data.categorie = categorie;
        data.periode = periode;
        data.sa = sa;
        data.sp = sp;
        data.sf = sf;
        saveData();
    } else{
        throw new Error('No data found')
    }
}

export const getById = async (id:string) => {
    await loadData();
    const res = dataManaTime.find((data) => data.id === id)
    return res
}