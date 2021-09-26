/**
 * @param phone: string
 * @return {boolean}
 * @example isVnMobilePhone('0912345678') => true
 * @example isVnMobilePhone('0123456789') => false
 * @example isVnMobilePhone('0312345678') => false
 * @example isVnMobilePhone('0322345678') => true
 */
export const isVnMobilePhone = (phone: string) => {
  const regexVnMobilePhone
    = /^(0|\+84)(\s|\.)?((3[2-9])|(5[2689])|(7[06-9])|(8[1-9])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/

  return regexVnMobilePhone.test(phone)
}

/**
 * @param email: string
 * @return {boolean}
 * @example isEmail('abc@xyz.com') => true
 * @example isEmail('abc@') => false
 * @example isEmail('abc@sx@') => false
 * @example isEmail('ab.c@xyz.com.vn') => true
 */
export const isEmail = (email: string) => {
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return regexEmail.test(email)
}
