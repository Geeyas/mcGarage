var dbCon = require("../database");

var connection = dbCon.getconnection();

connection.connect();

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM bookappointment", (err, records, fields) => {
        if (err) {
            console.error("Error while retrieve the movie data");
        } else {
            res.send(records);
        }
    })
})

//insert data
router.post("/", (req, resp) => {
    var id = req.body.appointmentID;
    var name = req.body.fullName;
    var number = req.body.contactNum;
    var email = req.body.email;
    var appointment = req.body.appointment;
    var date = req.body.onDate;
    var time = req.body.onTime;

    connection.query("INSERT INTO bookappointment VALUES ('" + id + "','" + name + "','" + number + "','" + email + "','" + appointment + "','" + date + "','" + time + "')", (err, records, fields) => {
        if (err) {
            console.log(err);
            console.log("Error while insertting the data");
        }
        else {
            resp.send({ insert: "insert success" });
        }
    })
})

// update
router.put("/", (req, res) => {
    var showtime_ID = req.body.showtime_ID;
    var time = req.body.time;
    var location = req.body.location;
    // there is 4 data in the showtime table and out of which only two data 'time' and 'location' can be edited/updated
    connection.query("UPDATE showtime SET time='" + time + "', location='" + location + "' where showtime_ID=" + showtime_ID,
        (err, result) => {
            if (err) {
                console.error("Error while Updating the data" + err);
            } else {
                res.send({ update: "Update success" });
            }
        })
})

//delete
router.delete("/:id", (req, res) => {
    connection.query("delete from bookappointment where appointmentID=" + req.params.id, (err, records, fields) => {
        if (err) {
            console.error("Error while deleting the data");
        } else {
            res.send({ delete: "Delete Success" });
        }
    })
})


module.exports = router;