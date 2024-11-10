import { useNavigate } from "react-router-dom";
import {
  useDeleteStudentMutation,
  useGetStudentsDataQuery,
} from "../../store/api/studentsApi";
import "./index.scss";

const Students = () => {
  const { data, isLoading } = useGetStudentsDataQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  const studentsList = data || [];

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`create-form/${id}`);
  };
  const handleDelete = (id) => {
    deleteStudent(id);
  };
  return (
    <div className="students__list">
      {isLoading ? (
        <p>Loading...</p>
      ) : studentsList.length > 0 ? (
        studentsList.map((student) => (
          <div key={student.id} className="card">
            <p>Student Id:{student.id}</p>
            <p>
              Name:{student.firstName} {student.lastName}
            </p>
            <p>Email:{student.email}</p>
            <p>Phone Number:{student.phoneNumber}</p>
            <div className="buttons">
              <button className="edit" onClick={() => handleEdit(student?.id)}>
                edit
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(student?.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-students">No students found.</p>
      )}
    </div>
  );
};

export default Students;
