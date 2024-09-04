export function isValidEmail(email: string) {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const lower = String(email).toLowerCase();
  return regExp.test(lower);
}

export function validatePassword(password: string) {
  if (password.length < 8) {
    return false;
  }
  password = password.replace(/ /g, '');
  const hasUppercaseLetter = /[A-Z]/.test(password);
  if (!hasUppercaseLetter) {
    return false;
  }
  return true;
}

export function formatTime(millisecondsSinceUnixEpoch: number) {
  const date = new Date(millisecondsSinceUnixEpoch);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
