export type Messages = {
  meta: { title: string; description: string };
  nav: {
    work: string;
    techfides: string;
    levoila: string;
    story: string;
    contact: string;
    getInTouch: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    headline1Pre: string;
    headline1Em: string;
    headline2Pre: string;
    headline2Em: string;
    bodyPre: string;
    bodyTF: string;
    bodyMid: string;
    bodyLV: string;
    bodyPost: string;
    ctaPrimary: string;
    ctaSecondary: string;
    currentlyBuilding: string;
    creds: string[];
  };
  whatIDoNow: {
    eyebrow: string;
    headline: string;
    subhead: string;
    cards: {
      label: string;
      title: string;
      role: string;
      body: string;
      linkLabel: string;
    }[];
  };
  techFides: {
    eyebrow: string;
    headline: string;
    body1: string;
    body2Pre: string;
    body2Em: string;
    body2Post: string;
    cta: string;
    brokenLabel: string;
    brokenItems: string[];
    installLabel: string;
    installItems: string[];
  };
  levoila: {
    eyebrow: string;
    headline1: string;
    headline2Em: string;
    body1: string;
    body2: string;
    ctaSteward: string;
    ctaRead: string;
    phaseOneLabel: string;
    sites: { name: string; note: string }[];
    nextVoteLabel: string;
    countries: string[];
    fineprint: string;
  };
  story: {
    eyebrow: string;
    headline: string;
    pullquote: string;
    para1: string;
    para2: string;
    pivot: string;
    para3: string;
    languagesLabel: string;
    languagesValue: string;
    educationLabel: string;
    educationValue: string;
    credentialsLabel: string;
    credentialsValue: string;
  };
  perspectives: {
    eyebrow: string;
    headline: string;
    subhead: string;
    allWriting: string;
    readLabel: string;
    posts: {
      tag: string;
      title: string;
      blurb: string;
      when: string;
    }[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    intro: string;
    directLabel: string;
    levoilaLabel: string;
    linkedinLabel: string;
    location: string;
    tracks: {
      label: string;
      title: string;
      body: string;
      cta: string;
      external: boolean;
    }[];
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: { q: string; a: string }[];
  };
  footer: {
    rights: string;
  };
};
