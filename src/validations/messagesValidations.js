import joi from "joi";

import { failureResponse, serverErrorResponse } from "../utils/responses.utils.js";


class MessagesValidation {

static messagesValidation = (req, res, next) => {
  try {
    const validationSchema = joi.object({
      theResults: joi
        .array()
        .items(
          joi.object({
            title: joi.string(),
            firstName: joi.string(),
            lastName: joi.string(),
          })
        )
        .required(),
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

export default MessagesValidation;
