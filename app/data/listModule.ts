
import absence from '../../public/icons/Module_Absences.svg'
import competence from '../../public/icons/Module_Compétences.svg'
import entretien from '../../public/icons/Module_Entretiens.svg'
import heures from '../../public/icons/Module_Heures.svg'
import materiels from '../../public/icons/Module_Matériels.svg'
import noteDeFrais from '../../public/icons/Module_NotedeFrais.svg'
import planning from '../../public/icons/Module_Planning.svg'
import presence from '../../public/icons/Module_Présence.svg'
import rh from '../../public/icons/Module_RH.svg'
import salaireEtPaie from '../../public/icons/Module_SalaireetPAie.svg'
import document from '../../public/icons/Mdule_Documents.svg'

interface Module {
    title: string,
    altTitle: string,
    image: string
}


export const listModule: Module[] = [
    {
        title: "Planning",
        altTitle: "Planning",
        image: planning
    },
    {
        title: "Absense",
        altTitle: "Absense",
        image: absence
    },
    {
        title: "Heures",
        altTitle: "Heures",
        image: heures
    },
    {
        title: "Note de frais",
        altTitle: "Note de frais",
        image: noteDeFrais
    },
    {
        title: "Présence",
        altTitle: "Présence",
        image: presence
    },
    {
        title: "Compétences",
        altTitle: "Compétences",
        image: competence
    },
    {
        title: "Salaire et paie",
        altTitle: "Salaire et paie",
        image: salaireEtPaie
    },
    {
        title: "Entretiens",
        altTitle: "Entretiens",
        image: entretien
    },
    {
        title: "Materiels",
        altTitle: "Materiels",
        image: materiels
    },
    {
        title: "Documents",
        altTitle: "Documents",
        image: document
    },
    {
        title: "RH",
        altTitle: "RH",
        image: rh
    },
]