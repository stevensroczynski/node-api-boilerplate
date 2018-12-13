const sequelize = require('../db').sequelize
var db = require('../models/index')

let lookupBuilder = (type) => {
    let tableName
    let sql = null;
    switch (type) {
        case 'classifications':
            tableName = `"FOM"."Tbl_Classification"`
            break;
        case 'controls':
            tableName = `"FOM"."Tbl_Sci_Controls"`
            break;
        case 'fgis':
            tableName = `"FOM"."Tbl_Fgi"`
            break;
        case 'otherControls':
            tableName = `"FOM"."Tbl_Controls"`
            break;
        case 'disseminations':
            tableName = `"FOM"."Tbl_Releasability`
            break;
        case 'commands':
            tableName = `"FOM"."Tbl_Commands`
            break;
        case 'fleets':
            tableName = `"FOM"."Tbl_Fleet`
            break;
        case 'sources':
            tableName = `"FOM"."Tbl_Sources"`
            break;
        case 'activities':
            tableName = `"FOM"."Tbl_Activity"`
            break;
        case 'areas':
            tableName = `"FOM"."Tbl_Oparea"`
            break;
        case 'units':
            tableName = `"FOM"."Tbl_Units"`
            break;
        // hack since tbl_threat does not have a primary key
        case 'threats':
            tableName = `"FOM"."Tbl_Threat"`
            sql = 'SELECT * FROM ' + tableName
            break;
        case 'categories':
            tableName = `"FOM"."Tbl_Cat"`
            break;
        case 'types':
            tableName = `"FOM"."Tbl_Type"`
            break;
        case 'flags':
            tableName = `"FOM"."Tbl_Flag"`
            break;
        case 'ports':
            tableName = `"FOM"."Tbl_Ports"`
            break;
    }
    if (sql == null) {
        sql = "SELECT * FROM " + tableName + ", (SELECT Col.Column_Name as " + type + "_PK FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS Tab, INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE Col " +
            "WHERE Col.Constraint_Name = Tab.Constraint_Name AND Col.Table_Name = Tab.Table_Name AND Constraint_Type = 'PRIMARY KEY' AND Col.Table_Name = '" + tableName + "') as " + type + "_PK";
    }
    return sql;
}

let queryFunc = function (query) {
    return sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT
    })
        .then(results => {
            return results
        })
}

module.exports.lookup = (req, res, next) => {
  
    let query = lookupBuilder(req.query.type)

    queryFunc(query).then(results => { return res.json(results) })
}


