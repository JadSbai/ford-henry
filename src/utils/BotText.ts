import { Lan } from "@mui/icons-material";
import { Language } from "../types/types";
import { TranslatedText } from "../types/types";

export default function BotText(language:string, name: string):TranslatedText{
    switch(language){
        case "GB" :return {
            welcome: `Hi ${name}. I'm Henry, here to help! Select one of the options below.`,
            typeQ:"Or type your own query.",
            btn1: "Purchase estimator",
            btn2: "Model comparison",
            btn3: "Schedule a test drive",
            ansQ: "Was that helpful?",
            noAnsQ: "Sorry to hear that. Click one of these options or type your own query.",
            feedback: "Thanks for using our chat service! How was your experience today?",
            feedbackMsg: "Write further comments here...",
            serviceUnavailable: "This service is currently unavaliable",
            introTxt: "You are now chatting with Henry.",
            tcTxt: "Read our privacy policy",
            tcLink: "here",
            txtBoxNamePlaceholder: "Enter name above",
            namePlaceholder: "Type name here...",
            phType: "Type here...",
            phSpeak: "Speak out loud",
            phWait: "Wait a moment",
            hereLink: "Click here",
            hereLinkText: " for further information.",
            yes: "Yes",
            no: "No",
            otherQs: "Great! Please continue to ask any other questions you may have.",
            close: "Warning, closing the chat will delete your chat history. Do you want to proceed?",
            redirectQ: "Sorry to hear that. Would you like to ask again or be connected to a live agent?",
            redirect: "Redirect to live agent",
            askAgain: "Ask again",
            liveAgentQueue: "You are going to be redirected to the live chat. Please give them your unique reference number: #123456.",
            askAgainMsg: "Click one of these options or type your own query.",
            altOpts: "Or maybe you meant one of the options below?",
            selectOpt: "Please select an option"
        }
        case "ES" :return {
            welcome: `Hola ${name}. ??Estoy Henry aqu?? para ayudar! Selecciona una de las opciones de abajo.`,
            typeQ:"O escribe tu propia consulta.",
            btn1: "Estimador de compras",
            btn2: "Comparaci??n de modelos",
            btn3: "Programe una prueba de conducci??n",
            ansQ: "??Ha sido ??til?",
            noAnsQ: "Lamento escuchar eso. Haga clic en una de estas opciones o escriba su propia consulta",
            feedback: "??Gracias por utilizar nuestro servicio de chat! ??C??mo ha sido su experiencia hoy?",
            feedbackMsg: "Escriba m??s comentarios aqu??...",
            serviceUnavailable: "Este servicio no est?? disponible actualmente",
            introTxt: "Ahora est??s chateando con Henry.",
            tcTxt: "Lea nuestra pol??tica de privacidad",
            tcLink: "aqu??",
            txtBoxNamePlaceholder: "Escribe su nombre ",
            namePlaceholder: "Escribe su nombre aqu??...",
            phType: "Escribe aqu??...",
            phSpeak: "Habla en alta voz",
            phWait: "Espera un momento",
            hereLink: "Haga clic aqu?? ",
            hereLinkText: "para obtener m??s informaci??n",
            yes: "S??",
            no: "No",
            otherQs: "??Genial! Por favor, siga preguntando cualquier otra cosa que tenga",
            close: "Atenci??n, al cerrar el chat se borrar?? tu historial de chats. ??Desea continuar?",    
            redirectQ: "Lamento escuchar eso. ??Desea volver a preguntar o ser conectado con un agente en vivo?",
            redirect: "Redirigir a un agente en vivo",
            askAgain: "Vuelve a preguntar",
            liveAgentQueue: "Vas a ser redirigido al chat en vivo. Por favor, dale tu n??mero de referencia ??nico: #123456.",
            askAgainMsg: "Haz clic en una de estas opciones o escribe tu propia consulta.",
            altOpts: "??O quiz??s te refer??as a una de las opciones de abajo?",
            selectOpt: "Por favor, seleccione una opci??n"
        }
        case "FR" :return {
            welcome: `Salut ${name}. Je m'appelle Henry, l?? pour vous aider! Veuillez s??lectioner une des options suivantes.`,
            typeQ: "Ou ecrivez votre question.",
            btn1: "Estimateur d'achat",
            btn2: "Comparaison des mod??les",
            btn3: "R??server un essai routier",
            ansQ: "Cela a-t-il ??t?? utile?",
            noAnsQ: "D??sol?? d'entendre cela. Cliquez sur l'une de ces options ou tapez votre propre requ??te.",
            feedback : "Merci d'avoir utilis?? notre service de chat ! Comment s'est pass??e votre exp??rience aujourd'hui ?",
            feedbackMsg : "Ecrivez d'autres commentaires ici...",
            serviceUnavailable: "Ce service est actuellement indisponible",
            introTxt: "Vous ??tes en train de chatter avec Henry.",
            tcTxt: "Retrouvez notre politique de confidentialit??",
            tcLink: "ici",
            txtBoxNamePlaceholder: "Entrez votre nom ci-dessus",
            namePlaceholder: "Tapez votre nom ici...",
            phType: "Tapez ici...",
            phSpeak: "Parlez ?? voix haute",
            phWait: "Attendez un moment",
            hereLink: "Cliquez ici",
            hereLinkText: " pour plus d'informations.",
            yes: "Oui",
            no: "Non",
            otherQs: "Super ! Je suis disponible pour toute autres questions.",
            close: "Attention, la fermeture du chat supprimera votre historique de chat. Voulez-vous continuer?",
            redirectQ : "D??sol?? d'entendre cela. Souhaitez-vous reposer la question ou ??tre mis en relation avec un agent en direct ?",
            redirect : "Redirect to live agent",
            askAgain : "Demandez ?? nouveau",
            liveAgentQueue : "Vous allez ??tre redirig?? vers le chat en direct. Veuillez leur donner votre num??ro de r??f??rence unique : #123456.",
            askAgainMsg : "Cliquez sur l'une de ces options ou tapez votre propre requ??te.",
            altOpts : "Ou peut-??tre vouliez-vous dire l'une des options ci-dessous ?",
            selectOpt : "Veuillez s??lectionner une option"
        }
        case "DE" :return {
            welcome: `Hallo ${name}. Ich bin Henry und kann Ihnen helfen! W??hlen Sie eine der folgenden Optionen.`,
            typeQ: "oder geben Sie Ihre eigene Anfrage ein.",
            btn1: "Kostenvoranschlag kaufen",
            btn2: "Modellvergleich",
            btn3: "Testfahrt vereinbaren",
            ansQ: "War das hilfreich?",
            noAnsQ: "ut mir leid, das zu h??ren. Klicken Sie auf eine dieser Optionen oder geben Sie Ihre eigene Frage ein.",
            feedback: "Danke, dass Sie unseren Chat-Service genutzt haben! Wie war Ihre Erfahrung heute?",
            feedbackMsg: "Schreiben Sie hier weitere Kommentare...",
            serviceUnavailable: "Dieser Dienst ist derzeit nicht verf??gbar",
            introTxt: "Sie befinden sich jetzt im Chat mit Henry.",
            tcTxt: "Lesen Sie unsere Datenschutzbestimmungen",
            tcLink: "hier",
            txtBoxNamePlaceholder: "Name oben eingeben",
            namePlaceholder: "Geben Sie den Namen hier ein...",
            phType: "Geben Sie hier ein...",
            phSpeak: "Sprechen Sie laut",
            phWait: "Warte einen Moment",
            hereLink: "Klicken Sie hier",
            hereLinkText: "f??r weitere Informationen.",
            yes: "ja",
            no: "nien",
            otherQs: "Gro??artig! Bitte stellen Sie auch weiterhin alle anderen Fragen, die Sie haben.",
            close: "Achtung: Wenn Sie den Chat schlie??en, wird Ihr Chatverlauf gel??scht. M??chten Sie fortfahren?",
            redirectQ: "Tut mir leid, das zu h??ren. M??chten Sie noch einmal nachfragen oder mit einem Live-Mitarbeiter verbunden werden?",
            redirect: "Weiterleitung zu einem Live-Agenten",
            askAgain: "Fragen Sie noch einmal",
            liveAgentQueue: "Sie werden jetzt zum Live-Chat weitergeleitet. Bitte geben Sie Ihre eindeutige Referenznummer an: #123456.",
            askAgainMsg: "Klicken Sie auf eine dieser Optionen oder geben Sie Ihre eigene Anfrage ein.",
            altOpts: "Oder meinten Sie vielleicht eine der folgenden Optionen?",
            selectOpt: "Bitte w??hlen Sie eine Option"
        }
        case "IT" :return {
            welcome: `Ciao ${name}. Sono Henry, qui per aiutarti! Seleziona una delle opzioni sottostanti.`,
            typeQ: "O digita la tua domanda.",
            btn1: "Stimatore d'acquisto",
            btn2: "Confronto tra modelli",
            btn3: "Programmare un test drive",
            ansQ: "?? stato utile?",
            noAnsQ: "Mi dispiace. Fare clic su una delle opzioni o digitare la propria domanda",
            feedback: "Grazie per aver utilizzato il nostro servizio di chat! Com'?? stata la tua esperienza oggi?",
            feedbackMsg: "Scrivi qui ulteriori commenti...",
            serviceUnavailable: "Questo servizio non ?? attualmente disponibile",
            introTxt: "Ora stai chattando con Henry",
            tcTxt: "Leggi la nostra politica sulla privacy",
            tcLink: "qui",
            txtBoxNamePlaceholder: "Inserire il nome sopra",
            namePlaceholder: "Digitare il nome qui...",
            phType: "Digitare qui...",
            phSpeak: "Parla ad alta voce",
            phWait: "Aspetta un momento",
            hereLink: "Clicca qui",
            hereLinkText: " per ulteriori informazioni.",
            yes: "S??",
            no: "No",
            otherQs: "Ottimo! Continuate pure a fare tutte le altre domande che volete.",
            close: "Attenzione, la chiusura della chat canceller?? la cronologia della chat. Volete procedere?",
            redirectQ: "Mi spiace sentirlo. Desidera chiedere di nuovo o essere collegato a un agente in carne e ossa?",
            redirect: "Reindirizzamento a un agente in carne e ossa",
            askAgain: "Chiedi di nuovo",
            liveAgentQueue: "Sarai reindirizzato alla live chat. Si prega di fornire il proprio numero di riferimento univoco: #123456.",
            askAgainMsg: "Fare clic su una di queste opzioni o digitare la propria domanda.",
            altOpts: "O forse intendevi una delle opzioni sottostanti?",
            selectOpt: "Selezionare un'opzione"
        }
        default: return {
            welcome: `Hi ${name}. I'm Henry, here to help! Select one of the options below.`,
            typeQ:"Or type your own query.",
            btn1: "Purchase estimator",
            btn2: "Model comparison",
            btn3: "Schedule a test drive",
            ansQ: "Was that helpful?",
            noAnsQ: "Sorry to hear that. Click one of these options or type your own query.",
            feedback: "Thanks for using our chat service! How was your experience today?",
            feedbackMsg: "Write further comments here...",
            serviceUnavailable: "This service is currently unavaliable",
            introTxt: "You are now chatting with Henry.",
            tcTxt: "Read our privacy policy",
            tcLink: "here",
            txtBoxNamePlaceholder: "Enter name above",
            namePlaceholder: "Type name here...",
            phType: "Type here...",
            phSpeak: "Speak out loud",
            phWait: "Wait a moment",
            hereLink: "Click here",
            hereLinkText: " for further information.",
            yes: "Yes",
            no: "No",
            otherQs: "Great! Please continue to ask any other questions you may have.",
            close: "Warning, closing the chat will delete your chat history. Do you want to proceed?",
            redirectQ: "Sorry to hear that. Would you like to ask again or be connected to a live agent?",
            redirect: "Redirect to live agent",
            askAgain: "Ask again",
            liveAgentQueue: "You are going to be redirected to the  live chat. Please give them your unique reference number: #123456.",
            askAgainMsg: "Click one of these options or type your own query.",
            altOpts: "Or maybe you meant one of the options below?",
            selectOpt: "Please select an option"
        }
    }
}

function languageToCode(language: Language){
    switch(language){
        case Language.ENGLISH:
            return "GB";
        case Language.FRENCH:
            return "FR";
        case Language.GERMAN:
            return "DE";
        case Language.ITALIAN:
            return "IT";
        case Language.SPANISH:
            return "ES";
        default:
            return "GB";
    }
}

export {languageToCode, }
  