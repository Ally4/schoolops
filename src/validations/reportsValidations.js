import joi from "joi";

import { failureResponse, serverErrorResponse } from "../utils/responses.utils.js";


class ReportsValidation {

static reportValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      classe: joi.string().required(),
      mathematics: joi.number().required(),
      physics: joi.number().required(),
      history: joi.number().required(),
      geography: joi.number().required(),
      kinyarwanda: joi.number().required(),
      term: joi.number().required(),
      contact: joi.string().required(),
    });

    const { error } = validationSchema.validate(req.body);
    if (error)
      return failureResponse( res, 400, `This is the validation error: ${error.details[0].message.replace(/"/g,"")}!.`
      );
    return next();
  } catch (error) {
    return serverErrorResponse( res, 500, `This is the server error: ${error.details[0].message.replace(/"/g,"")}!.`
    );
  }
};

static UpdateReportValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      firstName: joi.string(),
      lastName: joi.string(),
      classe: joi.string(),
      mathematics: joi.number(),
      physics: joi.number(),
      history: joi.number(),
      geography: joi.number(),
      kinyarwanda: joi.number(),
      term: joi.number(),
      contact: joi.string(),
    });

    const { error } = validationSchema.validate(req.body);
    if (error)
      return failureResponse( res, 400, `This is the validation error: ${error.details[0].message.replace(/"/g,"")}!.`
      );
    return next();
  } catch (error) {
    return serverErrorResponse( res, 500, `This is the server error: ${error.details[0].message.replace(/"/g,"")}!.`
    );
  }
};
}

export default ReportsValidation;
