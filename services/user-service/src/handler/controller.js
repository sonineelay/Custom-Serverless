// Validations for user service
// const main = require(process.env.INDEX_PATH);
const main = require('node-layers');
// const MoodleUser = main.moodle_models.User;
const logger = main.helper_functions.logger;

const getUserList = async (req, res) => {
    try {
        logger('This is calling from layers');
        // logger(typeof MoodleUser);
        // console.log('NODE_PATH=', process.env.NODE_PATH);
        // console.log('INDEX_PATH=', process.env.INDEX_PATH);
        // console.log('TMPDIR=', process.env.TMPDIR);
        // console.log('TEMP=', process.env.TEMP);
        // console.log('TMP=', process.env.TMP);


        // const result = {
        //     usersList: await MoodleUser.findAll()
        // };
        const result = {
            message: "User endpoint is working this is in dev stage v3",
            layersRespose: main.sampleValue
        };
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = { getUserList };