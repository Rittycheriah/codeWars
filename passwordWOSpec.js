function validate(password) {
  console.log(password);
  return /(^(?!.*[\s`~,.<>;':"/[\]|{}()=_+-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/.test(password);
}
