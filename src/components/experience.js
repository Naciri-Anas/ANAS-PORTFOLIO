import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, location, duree, sujet, technologie }) => {
    return (
        <Card title={title}  footer={location} className="md:w-25rem">
            <div>
                <div><b>Sujet : </b> {sujet}</div>
                <div><b>Technologie : </b>{technologie}</div>
                <div><b>Duree : </b>{duree}</div>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Stage d\'annee derniere',
            duree: '2 mois',
            location: 'ORMVAO (Office Régional de Mise en Valeur Agricole de Ouarzazate)',
            technologie: 'reacts js, mongodb',
            sujet: 'gestion d\'insciption des employes d\'office',
        },
        {
            title: 'creation des jeux video',
            duree: 'temps libre',
            location: 'Discord',
            technologie: 'c#',
            sujet: 'jeux 2d',
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    duree={experience.duree}
                    location={experience.location}
                    sujet={experience.sujet}
                    technologie={experience.technologie}
                />
            ))}
        </section>
    );
};

export default Experiences;
