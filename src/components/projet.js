import React from 'react';
import { Card } from 'primereact/card';

const ProjetsCard = ({ title, location, projets }) => {
    return (
        <div>
            <Card title={title} subTitle={location}>
                <div>
                    <h5>Projets:</h5>
                    <ul>
                        {projets.map((projet, index) => (
                            <li key={index}>
                                <div>{projet.titre}</div>
                                <b>Technologie :</b> {projet.technologie}

                                <br></br>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
            <br />
        </div>
    );
};

const Projets = () => {
    const experienceData = [
        {
            title: 'PFA',
           
            location: 'ISTA',
            projets: [
                {
                    titre:
                        "Application de Gestion de location de voiture",
                    technologie: 'javascript',
                },
            ],
        },
        {
            title: 'EMSI-Proj',
           
            location: 'Emsi',
            projets: [
                {
                    titre:
                        "Application de Gestion de location de voiture",
                    technologie: 'Python',
                },
                {
                    titre:
                        "Applicagtion De gestion cabinet medical",
                    technologie: 'Java',
                },
            ],
        },
        {
            title: "Stage-Emsi",
           
            location: 'EMSI',
            projets: [
                {
                    titre: 'Application de gestion d\'inscription des employes de \'office',
                    technologie: 'Reactjs, Mongodb',
                },
               
            
            ],
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ProjetsCard
                    key={index}
                    title={experience.title}
                    location={experience.location}
                 
                    projets={experience.projets}
                />
            ))}
        </section>
    );
};

export default Projets;
