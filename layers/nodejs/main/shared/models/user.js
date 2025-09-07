const { DataTypes } = require("sequelize");
const { db_connection } = require("../sequelize"); // ✅ use db_connection directly

const MoodleUser = db_connection.define("MoodleUser", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    auth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    policyagreed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    suspended: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    mnethostid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastaccess: DataTypes.INTEGER,
    lastlogin: DataTypes.INTEGER,
    currentlogin: DataTypes.INTEGER,
    lastip: DataTypes.STRING,
    timecreated: DataTypes.INTEGER,
    timemodified: DataTypes.INTEGER,
}, {
    tableName: "mdl_user",
    timestamps: false,
});

module.exports = MoodleUser;
