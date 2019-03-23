import fr from "../locales/fr.json";

export const requiredRule = [v => !!v || fr.validation.required];

export const passwordRules = [
  v => !!v || fr.validation.requiredPassword,
  v => (v != null && v.length >= 6) || fr.validation.invalidPassword
];

export const emailRules = [
  v => !!v || fr.validation.requiredEmail,
  v => isValidEmail(v) || fr.validation.invalidEmail
];

export const isValidEmail = v => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
};
