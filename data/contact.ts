export interface ContactLink {
  label: string;
  href: string;
}

export interface Contact {
  description: string;
  email: ContactLink;
}

export const contact: Contact = {
  description:
    "Always open to connecting with fellow builders, problem solvers, and anyone interested in tech.",
  email: {
    label: "Email Me",
    href: "mailto:muhammadahmad.chak203@gmail.com",
  },
};
