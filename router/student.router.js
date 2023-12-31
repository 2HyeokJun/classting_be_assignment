const express = require('express');
const studentController = require('../controller/student.controller');
const studentMiddleware = require('../middleware/student.middleware');

const studentRouter = express.Router();

studentRouter.post('/token/:student_id?', studentController.publish_token);
studentRouter.use(studentMiddleware.check_token);
studentRouter.get('/subscription_list', studentController.get_subscription_list);
studentRouter.get('/news/:school_id?', studentMiddleware.check_get_school_news_list, studentController.get_school_news_list);
studentRouter.get('/newsfeed', studentController.get_newsfeed_list)
studentRouter.post('/subscribe/:school_id?', studentMiddleware.check_subscription_history, studentController.subscribe_school);
studentRouter.put('/subscribe/:school_id?', studentMiddleware.check_subscription_history, studentController.subscribe_school);


module.exports = studentRouter;