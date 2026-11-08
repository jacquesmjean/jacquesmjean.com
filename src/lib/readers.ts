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

const ht: Ui = {
  home: "Akèy",
  perspectives: "Pèspektiv",
  followUpBadge: "Swit",
  continues: "Atik sa a se swit",
  followUpTitle: "Swit la",
  passItOn: "Pataje l",
  passItOnBody: "Si atik sa a fè w reflechi, voye l bay yon moun k ap jwenn menm benefis la.",
  sources: "Sous",
  questions: "Kesyon atik sa a reponn",
  keepReading: "Kontinye li",
  allPerspectives: "Tout pèspektiv yo",
  read: "Li",
  speaking: "Konferans",
  followLinkedIn: "Swiv sou LinkedIn",
  bio: "Fondatè ak teknològ ameriken ki fèt an Ayiti. 25 ane teknoloji antrepriz nan Honeywell, Invensys ak Schneider Electric, ak pwojè nan 15 peyi.",
  photo: "Foto",
  alsoIn: "Tou an",
  subEyebrow: "Nouvo atik pa imèl",
  subTitle: "Resevwa pwochen atik la an premye.",
  subBody: "Yon imèl chak fwa mwen pibliye. Nòt sou IA, Afrik, Ayiti, ak biznis san fwontyè. Pa gen spam, ou ka kite nenpòt lè.",
  subPlaceholder: "Imèl ou",
  subButton: "Abòne",
  subSending: "Ap enskri\u2026",
  subDone: "Ou sou lis la. Mèsi.",
  subAlready: "Ou deja sou lis la. Mèsi.",
  subError: "Yon pwoblèm rive. Eseye ankò, oswa ekri engage@jacquesmjean.com.",
  subPrivacy: "Imèl ou sèvi sèlman pou voye nouvo atik. Reponn nenpòt imèl pou dezabòne.",
  resEyebrow: "Patisipe nan konvèsasyon an",
  resTitle: "Kisa ou panse?",
  resIntro: "Mwen li chak repons. Ak pèmisyon ou, mwen pibliye sa yo ki fè konvèsasyon an avanse.",
  resName: "Non",
  resRole: "Fonksyon ak òganizasyon",
  resRolePlaceholder: "egz. Direktè, Ministè Ekonomi",
  resEmail: "Imèl",
  resEmailHint: "Opsyonèl, pa janm parèt. Sèlman si ou vle yon repons.",
  resMessage: "Repons ou",
  resConsent: "Ou ka pibliye repons mwen ak non mwen ak fonksyon mwen.",
  resSubmit: "Voye",
  resSending: "Ap voye\u2026",
  resDone: "Mèsi. Mwen resevwa repons ou, epi mwen li yo tout.",
  resError: "Yon pwoblèm rive. Eseye ankò, oswa ekri engage@jacquesmjean.com.",
  resPublished: "Repons lektè yo",
  resTooShort: "Tanpri ekri yon ti kras plis (omwen 10 karaktè).",
};

const es: Ui = {
  home: "Inicio",
  perspectives: "Perspectivas",
  followUpBadge: "Continuación",
  continues: "Este artículo continúa",
  followUpTitle: "La continuación",
  passItOn: "Compártelo",
  passItOnBody: "Si este artículo te hizo pensar, envíaselo a alguien que se beneficie igual.",
  sources: "Fuentes",
  questions: "Preguntas que responde este artículo",
  keepReading: "Seguir leyendo",
  allPerspectives: "Todas las perspectivas",
  read: "Leer",
  speaking: "Conferencias",
  followLinkedIn: "Seguir en LinkedIn",
  bio: "Fundador y tecnólogo estadounidense nacido en Haití. 25 años de tecnología empresarial en Honeywell, Invensys y Schneider Electric, con proyectos en 15 países.",
  photo: "Foto",
  alsoIn: "También en",
  subEyebrow: "Nuevos artículos por correo",
  subTitle: "Recibe el próximo artículo primero.",
  subBody: "Un correo cada vez que publico. Notas de campo sobre IA, África, Haití y hacer negocios sin fronteras. Sin spam, y puedes irte cuando quieras.",
  subPlaceholder: "Tu correo",
  subButton: "Suscribirme",
  subSending: "Suscribiendo\u2026",
  subDone: "Ya estás en la lista. Gracias.",
  subAlready: "Ya estabas en la lista. Gracias.",
  subError: "Algo salió mal. Inténtalo de nuevo o escribe a engage@jacquesmjean.com.",
  subPrivacy: "Tu correo solo se usa para enviar nuevos artículos. Responde a cualquier correo para darte de baja.",
  resEyebrow: "Únete a la conversación",
  resTitle: "¿Qué opinas?",
  resIntro: "Leo cada respuesta. Con tu permiso, publico las que hacen avanzar la conversación.",
  resName: "Nombre",
  resRole: "Cargo y organización",
  resRolePlaceholder: "p. ej. Director, Ministerio de Economía",
  resEmail: "Correo",
  resEmailHint: "Opcional, nunca se muestra. Solo si quieres una respuesta.",
  resMessage: "Tu respuesta",
  resConsent: "Pueden publicar mi respuesta con mi nombre y cargo.",
  resSubmit: "Enviar",
  resSending: "Enviando\u2026",
  resDone: "Gracias. Tu respuesta me llegó, y las leo todas.",
  resError: "Algo salió mal. Inténtalo de nuevo o escribe a engage@jacquesmjean.com.",
  resPublished: "Respuestas de lectores",
  resTooShort: "Escribe un poco más (al menos 10 caracteres).",
};

const pt: Ui = {
  home: "Início",
  perspectives: "Perspectivas",
  followUpBadge: "Continuação",
  continues: "Este artigo dá continuidade a",
  followUpTitle: "A continuação",
  passItOn: "Compartilhe",
  passItOnBody: "Se este artigo fez você pensar, envie a alguém que vai se beneficiar da mesma forma.",
  sources: "Fontes",
  questions: "Perguntas que este artigo responde",
  keepReading: "Continue lendo",
  allPerspectives: "Todas as perspectivas",
  read: "Ler",
  speaking: "Palestras",
  followLinkedIn: "Seguir no LinkedIn",
  bio: "Fundador e tecnólogo americano nascido no Haiti. 25 anos de tecnologia corporativa na Honeywell, Invensys e Schneider Electric, com projetos em 15 países.",
  photo: "Foto",
  alsoIn: "Também em",
  subEyebrow: "Novos artigos por e-mail",
  subTitle: "Receba o próximo artigo primeiro.",
  subBody: "Um e-mail a cada publicação. Notas de campo sobre IA, África, Haiti e negócios sem fronteiras. Sem spam, e você pode sair quando quiser.",
  subPlaceholder: "Seu e-mail",
  subButton: "Assinar",
  subSending: "Assinando\u2026",
  subDone: "Você está na lista. Obrigado.",
  subAlready: "Você já estava na lista. Obrigado.",
  subError: "Algo deu errado. Tente de novo ou escreva para engage@jacquesmjean.com.",
  subPrivacy: "Seu e-mail é usado só para enviar novos artigos. Responda a qualquer e-mail para cancelar.",
  resEyebrow: "Participe da conversa",
  resTitle: "O que você acha?",
  resIntro: "Leio cada resposta. Com a sua permissão, publico as que fazem a conversa avançar.",
  resName: "Nome",
  resRole: "Cargo e organização",
  resRolePlaceholder: "ex. Diretor, Ministério da Economia",
  resEmail: "E-mail",
  resEmailHint: "Opcional, nunca exibido. Só se quiser uma resposta.",
  resMessage: "Sua resposta",
  resConsent: "Podem publicar minha resposta com meu nome e cargo.",
  resSubmit: "Enviar",
  resSending: "Enviando\u2026",
  resDone: "Obrigado. Sua resposta chegou, e eu leio todas.",
  resError: "Algo deu errado. Tente de novo ou escreva para engage@jacquesmjean.com.",
  resPublished: "Respostas de leitores",
  resTooShort: "Escreva um pouco mais (pelo menos 10 caracteres).",
};

const all: Record<Locale, Ui> = { en, fr, ht, es, pt };

export function readerUi(locale: Locale): Ui {
  return all[locale] ?? en;
}
