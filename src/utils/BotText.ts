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
            welcome: `Hola ${name}. ¡Estoy Henry aquí para ayudar! Selecciona una de las opciones de abajo.`,
            typeQ:"O escribe tu propia consulta.",
            btn1: "Estimador de compras",
            btn2: "Comparación de modelos",
            btn3: "Programe una prueba de conducción",
            ansQ: "¿Ha sido útil?",
            noAnsQ: "Lamento escuchar eso. Haga clic en una de estas opciones o escriba su propia consulta",
            feedback: "¡Gracias por utilizar nuestro servicio de chat! ¿Cómo ha sido su experiencia hoy?",
            feedbackMsg: "Escriba más comentarios aquí...",
            serviceUnavailable: "Este servicio no está disponible actualmente",
            introTxt: "Ahora estás chateando con Henry.",
            tcTxt: "Lea nuestra política de privacidad",
            tcLink: "aquí",
            txtBoxNamePlaceholder: "Escribe su nombre ",
            namePlaceholder: "Escribe su nombre aquí...",
            phType: "Escribe aquí...",
            phSpeak: "Habla en alta voz",
            phWait: "Espera un momento",
            hereLink: "Haga clic aquí ",
            hereLinkText: "para obtener más información",
            yes: "Sí",
            no: "No",
            otherQs: "¡Genial! Por favor, siga preguntando cualquier otra cosa que tenga",
            close: "Atención, al cerrar el chat se borrará tu historial de chats. ¿Desea continuar?",    
            redirectQ: "Lamento escuchar eso. ¿Desea volver a preguntar o ser conectado con un agente en vivo?",
            redirect: "Redirigir a un agente en vivo",
            askAgain: "Vuelve a preguntar",
            liveAgentQueue: "Vas a ser redirigido al chat en vivo. Por favor, dale tu número de referencia único: #123456.",
            askAgainMsg: "Haz clic en una de estas opciones o escribe tu propia consulta.",
            altOpts: "¿O quizás te referías a una de las opciones de abajo?",
            selectOpt: "Por favor, seleccione una opción"
        }
        case "FR" :return {
            welcome: `Salut ${name}. Je m'appelle Henry, là pour vous aider! Veuillez sélectioner une des options suivantes.`,
            typeQ: "Ou ecrivez votre question.",
            btn1: "Estimateur d'achat",
            btn2: "Comparaison des modèles",
            btn3: "Réserver un essai routier",
            ansQ: "Cela a-t-il été utile?",
            noAnsQ: "Désolé d'entendre cela. Cliquez sur l'une de ces options ou tapez votre propre requête.",
            feedback : "Merci d'avoir utilisé notre service de chat ! Comment s'est passée votre expérience aujourd'hui ?",
            feedbackMsg : "Ecrivez d'autres commentaires ici...",
            serviceUnavailable: "Ce service est actuellement indisponible",
            introTxt: "Vous êtes en train de chatter avec Henry.",
            tcTxt: "Retrouvez notre politique de confidentialité",
            tcLink: "ici",
            txtBoxNamePlaceholder: "Entrez votre nom ci-dessus",
            namePlaceholder: "Tapez votre nom ici...",
            phType: "Tapez ici...",
            phSpeak: "Parlez à voix haute",
            phWait: "Attendez un moment",
            hereLink: "Cliquez ici",
            hereLinkText: " pour plus d'informations.",
            yes: "Oui",
            no: "Non",
            otherQs: "Super ! Je suis disponible pour toute autres questions.",
            close: "Attention, la fermeture du chat supprimera votre historique de chat. Voulez-vous continuer?",
            redirectQ : "Désolé d'entendre cela. Souhaitez-vous reposer la question ou être mis en relation avec un agent en direct ?",
            redirect : "Redirect to live agent",
            askAgain : "Demandez à nouveau",
            liveAgentQueue : "Vous allez être redirigé vers le chat en direct. Veuillez leur donner votre numéro de référence unique : #123456.",
            askAgainMsg : "Cliquez sur l'une de ces options ou tapez votre propre requête.",
            altOpts : "Ou peut-être vouliez-vous dire l'une des options ci-dessous ?",
            selectOpt : "Veuillez sélectionner une option"
        }
        case "DE" :return {
            welcome: `Hallo ${name}. Ich bin Henry und kann Ihnen helfen! Wählen Sie eine der folgenden Optionen.`,
            typeQ: "oder geben Sie Ihre eigene Anfrage ein.",
            btn1: "Kostenvoranschlag kaufen",
            btn2: "Modellvergleich",
            btn3: "Testfahrt vereinbaren",
            ansQ: "War das hilfreich?",
            noAnsQ: "ut mir leid, das zu hören. Klicken Sie auf eine dieser Optionen oder geben Sie Ihre eigene Frage ein.",
            feedback: "Danke, dass Sie unseren Chat-Service genutzt haben! Wie war Ihre Erfahrung heute?",
            feedbackMsg: "Schreiben Sie hier weitere Kommentare...",
            serviceUnavailable: "Dieser Dienst ist derzeit nicht verfügbar",
            introTxt: "Sie befinden sich jetzt im Chat mit Henry.",
            tcTxt: "Lesen Sie unsere Datenschutzbestimmungen",
            tcLink: "hier",
            txtBoxNamePlaceholder: "Name oben eingeben",
            namePlaceholder: "Geben Sie den Namen hier ein...",
            phType: "Geben Sie hier ein...",
            phSpeak: "Sprechen Sie laut",
            phWait: "Warte einen Moment",
            hereLink: "Klicken Sie hier",
            hereLinkText: "für weitere Informationen.",
            yes: "ja",
            no: "nien",
            otherQs: "Großartig! Bitte stellen Sie auch weiterhin alle anderen Fragen, die Sie haben.",
            close: "Achtung: Wenn Sie den Chat schließen, wird Ihr Chatverlauf gelöscht. Möchten Sie fortfahren?",
            redirectQ: "Tut mir leid, das zu hören. Möchten Sie noch einmal nachfragen oder mit einem Live-Mitarbeiter verbunden werden?",
            redirect: "Weiterleitung zu einem Live-Agenten",
            askAgain: "Fragen Sie noch einmal",
            liveAgentQueue: "Sie werden jetzt zum Live-Chat weitergeleitet. Bitte geben Sie Ihre eindeutige Referenznummer an: #123456.",
            askAgainMsg: "Klicken Sie auf eine dieser Optionen oder geben Sie Ihre eigene Anfrage ein.",
            altOpts: "Oder meinten Sie vielleicht eine der folgenden Optionen?",
            selectOpt: "Bitte wählen Sie eine Option"
        }
        case "IT" :return {
            welcome: `Ciao ${name}. Sono Henry, qui per aiutarti! Seleziona una delle opzioni sottostanti.`,
            typeQ: "O digita la tua domanda.",
            btn1: "Stimatore d'acquisto",
            btn2: "Confronto tra modelli",
            btn3: "Programmare un test drive",
            ansQ: "È stato utile?",
            noAnsQ: "Mi dispiace. Fare clic su una delle opzioni o digitare la propria domanda",
            feedback: "Grazie per aver utilizzato il nostro servizio di chat! Com'è stata la tua esperienza oggi?",
            feedbackMsg: "Scrivi qui ulteriori commenti...",
            serviceUnavailable: "Questo servizio non è attualmente disponibile",
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
            yes: "Sì",
            no: "No",
            otherQs: "Ottimo! Continuate pure a fare tutte le altre domande che volete.",
            close: "Attenzione, la chiusura della chat cancellerà la cronologia della chat. Volete procedere?",
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
  