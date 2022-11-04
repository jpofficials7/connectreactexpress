import studentModel from "../models/Student.js";

class StudentController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
