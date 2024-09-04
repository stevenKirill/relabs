export const requiredRulesEmail = {
  required: 'Поле обязательно для заполнения',
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email не валиден',
  },
};

export const requiredRulesPassword = {
  required: 'Поле обязательно для заполнения',
  minLength: {
    value: 9,
    message: 'Пароль должен содержать хотя бы одну заглавную букву',
  },
};
