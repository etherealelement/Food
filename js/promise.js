"use strict"

const persone = { 
    name: "Alex",
    tel: "+7547577",
    parents: {
        mom: "Olga",
        dad: "Mike"
    }
}

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = "Ann";
