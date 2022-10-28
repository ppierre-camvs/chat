import { FirebaseData } from "./firebase-data";


/*
    Comme on connait la structure des données qui proviendront du WebService (API),
    On crée un modèle de données sous la forme d'une classe pour typer nos données.
*/

export class Message extends FirebaseData{
    pseudo: string;
    heure: string;
    contenu: string;

    constructor(id: string, pseudo: string, heure: string, contenu: string) {
        super(id);
        this.pseudo = pseudo;
        this.heure = heure;
        this.contenu = contenu;
    }

}