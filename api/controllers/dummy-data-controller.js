const sequelize = require('../db').sequelize
const User = require('../models').User

module.exports.getGridData = (req, res, next) => {

    const mockData = [
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'COI', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'COI', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'COI', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'COI', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' },
        { Fleet: 'NSF', Class: 'TEST', Type: 'UNIT', Pennant: '1', Threat: 'HOS', HomePort: 'Unknown', Category: 'SUB', ShipType: 'TEST TRACK', Flag: 'CH', Active: '1', SCONUM: 'A12345', MIDBID: 'UNK12345678' }
      ]

    return res.send(mockData)
}

