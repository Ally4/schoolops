import Student from "../model/registration"
import Report from "../model/report";
import dotenv from 'dotenv';

import { successfullResponse, failureResponse, serverErrorResponse } from '../utils/responses.utils.js';

dotenv.config();


class Registration {
  static async createStudent(req, res) {
    try {
      const {firstName, lastName, classe, adult_contact, dateOfBirth} = req.body;
      const inReport =  await Report.create({firstName, lastName, classe, adult_contact});
        const newStudent = await Student.create(req?.body);
        return successfullResponse(res, 200, "The student has been registered successfully!.", newStudent )
    } catch (err) {
        return serverErrorResponse(res, 500, err)
    }
  }


  static async editStudent(req, res) {
    try {

        const student = await Student.findOne({
            where: { registered_id: req.params.registered_id }
        });

        if (!student) {
            return failureResponse(res, 404, `There is no student registered on ${student_id} id in the system!.`)
        }
        const studentUpdated = Student.update(req?.body, {
          where: { registered_id: req.params.registered_id }
        })
        return successfullResponse(res, 200, "The student has been updated successfully!.", studentUpdated ) 
        }
catch (err) {
        return serverErrorResponse(res, 500, err)
    }
  }
}

export default Registration;
