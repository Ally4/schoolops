import Report from "../model/report";

import { successfullResponse, failureResponse, serverErrorResponse } from '../utils/responses.utils.js';

  const createReport= async (req, res, next ) => {
  try {
    const report = await Report.create(req.body);
    return successfullResponse(res, 201, "The report was successfull submitted", report)
 } catch (error) {
   return serverErrorResponse(res, 500, `The is the error from the server ${error}`)
 }
 }

 export default createReport;
