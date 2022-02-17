import  registrationService  from "../services/studentsRegistration";


class Restration {
  static async registrationController(req, res, next) {
    const data = await registrationService.createStudent(req, res, next);
    return data;
  }

  static async UpdateRegistrationController(req, res, next) {
    const data = await registrationService.editStudent(req, res, next);
    return data;
  }
}

export default Restration;
