import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "BAC Science Physique",
            ecole: " Lycée Sidi Douad",
            annees: "2019-2020",
        },
        {
            diplome: "technicien spécialisé En Développement Informatique",
            ecole: "Institut Spécialisé de Technologie Appliquée Ouarzazate - ISTA",
            annees: "2020 - 2021",
        },
        {
            diplome: "Ingénierie Informatique et Réseaux",
            ecole: "Ecole Marocaine des Sciences de l'Ingénieur EMSI",
            annees: "2021 - jusqu'a maintenant",
        }
       
       
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.ecole}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
