"use strict";
//Enun
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
//Se utiliza los enumerables para las cadenas de texto, se puede modificar añadiendole = a la variable
//console.log(Roles.Admin);
//Objects
const roles = {
    User: 0,
    Amind: 1,
    SuperAdmin: 2
};
console.log(roles.SuperAdmin);
