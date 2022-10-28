
/*
    Par défaut firebase crée un id pour chaque enregistrement,
    mais aussi d'autres champs, comme la date de création, modification etc.
    Pour ne pas les ajouter dans toutes les classes modèles que l'on créera,
    on va les mettre dans une classe parent dont hériteront tous nos classes
    modèles.
*/

export class FirebaseData{
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}