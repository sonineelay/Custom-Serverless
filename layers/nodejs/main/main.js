const { db_connection } = require('./shared/sequelize');
const { logger } = require('./shared/utils/helper_functions');
const MoodleUser = require('./shared/models/user');

module.exports = {
    db_connection,
    sampleValue: 'This is from layers',
    helper_functions: { logger },
    moodle_models: { User: MoodleUser },
};
