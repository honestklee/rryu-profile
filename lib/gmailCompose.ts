export const CONTACT_EMAIL = 'rizkyryuap@gmail.com';

/** Opens Gmail compose in the browser instead of the OS default mail app (e.g. Outlook). */
export function gmailComposeTo(to: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
}
