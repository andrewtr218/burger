const connection = require("../config/connection");

module.exports = function selectAll(){
    connection.query("Select * from, burgers", function(err, res){
        if (err) throw err
        res.render("index", { burgers: data })
    })
};

module.exports = function insertOne(){
    connection.query("INSERT INTO burgers (burgers) VALUES ?", [req.body.burgers], function(err, result){
        if (err) throw err;

    result.redirect("/");
    })  
};
module.exports = function updateOne(){
    connection.query("UPDATE burgers SET TRUE WHERE ?", [req.body.burgers], function(err, result){
        if (err) throw err;

    result.redirect("/");
    })
};

