import express from 'express';

import registrationController from '../controllers/registration';
import registrationValidation from '../validations/registrationValidations'

const registrationControllerRouters = express.Router();

registrationControllerRouters.post('/api/v1/register-student', registrationValidation.registrationValidation, registrationController.registrationController);

registrationControllerRouters.patch('/api/v1/update-student/:registered_id', registrationValidation.updateRegistrationValidation, registrationController.UpdateRegistrationController);

export default registrationControllerRouters;
