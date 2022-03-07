import  {reportsService}  from "../services/index";


class ReportController {
  static async reportsService(req, res, next) {
    const data = await reportsService(req, res, next);
    return data;
  }
  
}

export default ReportController;
