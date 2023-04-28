const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()=";

const pwdGenerator = (length) => {
  if (length < 16) throw new Error("Length cannot be less than 16");
  let pwd = "";
  for (let i = 0; i < length; i++) {
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    pwd += randomChar;
  }
  return pwd;
};

module.exports = pwdGenerator;
