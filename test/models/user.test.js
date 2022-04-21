/* //Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`.

const User = require("../../app/models/user");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(
      1,
      "carlogilmar",
      "Carlo",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    //Aqui validas los resultados de ese código
    //Esta es la comparación que va a igualar el valor de la izquierda con
    //el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
}) */




//Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.

/* const User = require("../../app/models/user");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(
      1,
      "carlogilmar",
      "Carlo",
      "Bio",
    );

    //Aqui validas los resultados de ese código
    //Esta es la comparación que va a igualar el valor de la izquierda con
    //el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    //Verifica que el valor no sea undefined
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
}) */

//Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 //Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.

/*  const User = require("../../app/models/user");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(
      1,
      "carlogilmar",
      "Carlo",
      "Bio",
    );

    //Aqui validas los resultados de ese código
    //Esta es la comparación que va a igualar el valor de la izquierda con
    //el valor de la derecha (valor esperado)
    expect(user.id).toBe(1)
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.bio).toBe("Bio")
    //Verifica que el valor no sea undefined
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  });

  test('Add getters', () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "Bio",);

    //Aqui validas los resultados de ese código
    //Esta es la comparación que va a igualar el valor de la izquierda con
    //el valor de la derecha (valor esperado)

    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    //Verifica que el valor no sea undefined
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
}) */

//Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 //7Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.

 const User = require("../../app/models/user");

 describe("Unit Tests for User class", () => {
   test("Create an User object", () => {
     //Aqui invocas el código que vas a usar en tu app
     const user = new User(
       1,
       "carlogilmar",
       "Carlo",
       "Bio",
     );
 
     //Aqui validas los resultados de ese código
     //Esta es la comparación que va a igualar el valor de la izquierda con
     //el valor de la derecha (valor esperado)
     expect(user.id).toBe(1)
     expect(user.username).toBe("carlogilmar")
     expect(user.name).toBe("Carlo")
     expect(user.bio).toBe("Bio")
     //Verifica que el valor no sea undefined
     expect(user.dateCreated).not.toBeUndefined()
     expect(user.lastUpdated).not.toBeUndefined()
   });
 
   test('Add getters', () => {
     //Aqui invocas el código que vas a usar en tu app
     const user = new User(1, "carlogilmar", "Carlo", "Bio",);
 
     //Aqui validas los resultados de ese código
     //Esta es la comparación que va a igualar el valor de la izquierda con
     //el valor de la derecha (valor esperado)
 
     expect(user.getUsername).toBe("carlogilmar");
     expect(user.getBio).toBe("Bio");
     //Verifica que el valor no sea undefined
     expect(user.dateCreated).not.toBeUndefined();
     expect(user.lastUpdated).not.toBeUndefined();
   });
   test('Add setters', () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "Bio",);
    user.setUsername = "Gilmar"
    expect(user.username).toBe("Gilmar");
    user.setBio = "New bio"
    expect(user.bio).toBe("New bio");
  });

 })