const Trip = require("../models/trip");

exports.getTrips = async (req, res) => {
    Trip.gettrips(function(err, trip) {
        if (err) {
            return res.status(403).send(err);
        }
        res.json(trip);
    } );
};

exports.displayTrip = async (req, res) => {
    Trip.displaytrip(req.params.machuyen, function(err, trip) {
        if (err) {
            return res.status(403).send(err);
        }
        res.json(trip);
    } );
};

exports.updateTrip = async (req, res) => {
    const id = req.params.machuyen;
    Trip.update(id,req.body.matrangthai, req.body.mataixe, function (err, trip) {
      if (err) {
        return res.status(403).send(err);
      }
      res.json(trip);
    });
  };
