
/*
   Les classes services font l'intermédiaires entre la source de données et notre
   application (interfaces/composants).
   Les données peuvent provenir d'un service web, d'une base de données, où
   comme on va le faire dans un premier temps, d'une simulation de web service (API).
   (C'est ce qu'on appelle un mock-up).
    L'intérêt c'est que nos composants/interfaces savent juste qu'elles utilisent
    "MessageService" avec un certain type de données "Message" ils n'ont pas besoin de
    savoir d'où les données proviennent.
    On peut donc changer par la suite la source de données, sans avoir à modifier
    le code des composants qui les utilisent.
*/

import { delay, Observable, of, repeat } from "rxjs";
import { Message } from "../models/message";

export class MessageService {

    allMessages = new Array<Message>();

    constructor() {
        this.allMessages.push(new Message("1", "pseudo1", "1:00:00", "contenu1"));
        this.allMessages.push(new Message("2", "pseudo2", "2:00:00", "contenu2"));
        this.allMessages.push(new Message("3", "pseudo3", "3:00:00", "contenu3"));
    }

   /*
      C'est dans cette fonction qu'on ira se connecter à firebase
   */
    public getAllMessages(): Observable<Array<Message>> {
       /* On simule ici un observable qui notifie toute les secondes et se répère à l'inifi*/
        return of(this.allMessages).pipe(delay(1000)).pipe(repeat());;
    }

   /* Idem ici pour le moment on simule, ensuite on postera le message sur firebase */
    public addMessage(msg: Message) {
        this.allMessages.push(msg);
    }

}
