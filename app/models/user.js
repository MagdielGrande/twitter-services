/*
Requerimiento 1
 class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }
}

module.exports = User */

//Requerimiento 2
/* class User{
    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
}

module.exports = User */

//Requerimiento 3
class User{
    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    get getUsername(){
        return this.username;
    }
    get getBio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated;
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
    set setUsername(newUsername){
        this.username = newUsername;
    }
    set setBio(newBio){
        this.bio = newBio;
    }
}

module.exports = User


//Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
//Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.