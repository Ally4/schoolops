import express from 'express';

import reportsController from '../controllers/reports';
import reportsValidation from '../validations/reportsValidations'

const reportControllerRouters = express.Router();

reportControllerRouters.post('/api/v1/report-student', reportsValidation.reportValidation, reportsController.reportsService);

// reportControllerRouters.patch('/api/v1/update-report/:report_id', reportsValidation.UpdateReportValidation, reportsController.UpdateReportController);

reportControllerRouters.post('/api/v1/sending-report', reportsController.reportsService);

export default reportControllerRouters;
