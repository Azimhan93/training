  let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(user, {

        get(target, prop, receiver) {
            if (prop in target) {
                return target[prop];
            } else {
                console.log('Ошибка: такого свойства не существует')
            }
        },

        set(target, prop, value) {
            target[prop] = value;
            return true;
        }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); // John
  console.log(user.age); // Ошибка: такого свойства не существует
