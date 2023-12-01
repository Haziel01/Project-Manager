const ability = require("../defineAbility");

console.log("can read Post", ability.can("read", "Post"));
console.log("can read User", ability.can("read", "User"));
console.log("can update User", ability.can("update", "User"));
console.log("can delete User", ability.can("delete", "User"));
console.log("cannot delete User", ability.cannot("delete", "User"));
