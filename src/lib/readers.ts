import type { Locale } from "@/i18n/locales";

/**
 * Public connection to the site's reader database (Supabase project "jacquesmjean").
 * The publishable key is designed to be public: database rules only let visitors
 * add a signup or a response, and read approved responses. Nobody can read emails.
 */
export const READERS_API = "https://fuhpnwlootiuxvrwnfch.supabase.co/rest/v1";
export const READERS_KEY = "sb_publishable_Kd_R7xDo99d5JvfmV_n8aA_uJvgIydz";

export const readersHeaders = {
  apikey: READERS_KEY,
  "Content-Type": "application/json",
};

type Ui = {
  // article chrome
  home: string;
  perspectives: string;
  followUpBadge: string;
  continues: string;
  followUpTitle: string;
  passItOn: string;
  passItOnBody: string;
  sources: string;
  questions: string;
  keepReading: string;
  allPerspectives: string;
  read: string;
  speaking: string;
  followLinkedIn: string;
  bio: string;
  photo: string;
  alsoIn: string;
  // subscribe
  subEyebrow: string;
  subTitle: string;
  subBody: string;
  subPlaceholder: string;
  subButton: string;
  subSending: string;
  subDone: string;
  subAlready: string;
  subError: string;
  subPrivacy: string;
  // responses
  resEyebrow: string;
  resTitle: string;
  resIntro: string;
  resName: string;
  resRole: string;
  resRolePlaceholder: string;
  resEmail: string;
  resEmailHint: string;
  resMessage: string;
  resConsent: string;
  resSubmit: string;
  resSending: string;
  resDone: string;
  resError: string;
  resPublished: string;
  resTooShort: string;
};

const en: Ui = {
  home: "Home",
  perspectives: "Perspectives",
  followUpBadge: "Follow up",
  continues: "This piece continues",
  followUpTitle: "The follow up",
  passItOn: "Pass it on",
  passItOnBody:
    "If this piece sharpened a thought for you, send it to someone who’d benefit from the same sharpening.",
  sources: "Sources",
  questions: "Questions this piece answers",
  keepReading: "Keep reading",
  allPerspectives: "All perspectives",
  read: "Read",
  speaking: "Speaking",
  followLinkedIn: "Follow on LinkedIn",
  bio: "Haitian-born American founder and technologist. 25 years of enterprise technology at Honeywell, Invensys, and Schneider Electric, with projects delivered in 15 countries.",
  photo: "Photo",
  alsoIn: "Also in",
  subEyebrow: "New writing by email",
  subTitle: "Get the next piece first.",
  subBody:
    "One email when I publish. Field notes on AI, Africa, Haiti, and running a business across borders. No spam, and you can leave anytime.",
  subPlaceholder: "Your email",
  subButton: "Subscribe",
  subSending: "Subscribing…",
  subDone: "You’re on the list. Thank you.",
  subAlready: "You’re already on the list. Thank you.",
  subError: "Something went wrong. Please try again, or write to engage@jacquesmjean.com.",
  subPrivacy: "Your email is only used to send new writing. Reply to any email to unsubscribe.",
  resEyebrow: "Join the conversation",
  resTitle: "What do you think?",
  resIntro:
    "I read every response. With your permission, I publish the ones that move the conversation forward.",
  resName: "Name",
  resRole: "Role and organization",
  resRolePlaceholder: "e.g. Director, Ministry of Economy",
  resEmail: "Email",
  resEmailHint: "Optional, never shown. Only if you’d like a reply.",
  resMessage: "Your response",
  resConsent: "You may publish my response with my name and role.",
  resSubmit: "Send response",
  resSending: "Sending…",
  resDone: "Thank you. Your response reached me, and I read every one.",
  resError: "Something went wrong. Please try again, or write to engage@jacquesmjean.com.",
  resPublished: "Responses from readers",
  resTooShort: "Please write a little more (at least 10 characters).",
};

const fr: Ui = {
  home: "Accueil",
  perspectives: "Perspectives",
  followUpBadge: "Suite",
  continues: "Cet article fait suite à",
  followUpTitle: "La suite",
  passItOn: "Faites-le circuler",
  passItOnBody:
    "Si cet article vous a fait réfléchir, envoyez-le à quelqu’un qui en tirera le même profit.",
  sources: "Sources",
  questions: "Les questions auxquelles cet article répond",
  keepReading: "À lire aussi",
  allPerspectives: "Toutes les perspectives",
  read: "Lire",
  speaking: "Conférences",
  followLinkedIn: "Suivre sur LinkedIn",
  bio: "Fondateur et technologue américain né en Haïti. 25 ans de technologie d’entreprise chez Honeywell, Invensys et Schneider Electric, avec des projets menés dans 15 pays.",
  photo: "Photo",
  alsoIn: "Aussi en",
  subEyebrow: "Nouveaux articles par e-mail",
  subTitle: "Recevez le prochain article en premier.",
  subBody:
    "Un e-mail à chaque publication. Des notes de terrain sur l’IA, l’Afrique, Haïti et l’entreprise sans frontières. Pas de spam, désinscription à tout moment.",
  subPlaceholder: "Votre e-mail",
  subButton: "S’abonner",
  subSending: "Inscription…",
  subDone: "Vous êtes inscrit. Merci.",
  subAlready: "Vous êtes déjà inscrit. Merci.",
  subError: "Une erreur est survenue. Réessayez, ou écrivez à engage@jacquesmjean.com.",
  subPrivacy: "Votre e-mail sert uniquement à envoyer les nouveaux articles. Répondez à n’importe quel e-mail pour vous désinscrire.",
  resEyebrow: "Participez à la conversation",
  resTitle: "Qu’en pensez-vous ?",
  resIntro:
    "Je lis chaque réponse. Avec votre accord, je publie celles qui font avancer la discussion.",
  resName: "Nom",
  resRole: "Fonction et organisation",
  resRolePlaceholder: "ex. Directeur, Ministère de l’Économie",
  resEmail: "E-mail",
  resEmailHint: "Facultatif, jamais affiché. Seulement si vous souhaitez une réponse.",
  resMessage: "Votre réponse",
  resConsent: "Vous pouvez publier ma réponse avec mon nom et ma fonction.",
  resSubmit: "Envoyer",
  resSending: "Envoi…",
  resDone: "Merci. Votre réponse m’est bien parvenue, et je les lis toutes.",
  resError: "Une erreur est survenue. Réessayez, ou écrivez à engage@jacquesmjean.com.",
  resPublished: "Réponses des lecteurs",
  resTooShort: "Merci d’en écrire un peu plus (au moins 10 caractères).",
};

export function readerUi(locale: Locale): Ui {
  return locale === "fr" ? fr : en;
}
