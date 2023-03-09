import Table from 'react-bootstrap/Table';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-solid-svg-icons'
function ManageStudent() {
  return (
    <>
    <div className='select-name'>
           <h4 className='std-board'>Manage student</h4>
           <p className='date-time'>25/10/2023 22:23</p>
        </div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th> Name</th>
          <th>Class</th>
          <th>Rollno</th>
          <th>view/Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>suraj</td>
          <td>class-2</td>
          <td>12</td>
          <td><i className="fa-solid fa-eye icon-view"></i><i class="fa-solid fa-pen-to-square icon-view"></i><i class="fa-solid fa-trash icon-view"></i></td>
          
        </tr>
        <tr>
          <td>mangesh</td>
          <td>class-9</td>
          <td>20</td>
          <td><i className="fa-solid fa-eye icon-view"></i><i class="fa-solid fa-pen-to-square icon-view"></i><i class="fa-solid fa-trash icon-view"></i></td>
        </tr>
        <tr>
          <td>prabhu</td>
          <td>class-7</td>
          <td>12</td>
          <td><i className="fa-solid fa-eye icon-view"></i><i class="fa-solid fa-pen-to-square icon-view"></i><i class="fa-solid fa-trash icon-view"></i></td>
        </tr>
        <tr>
          <td>sanjay</td>
          <td>class-6</td>
          <td>17</td>
          <td><i className="fa-solid fa-eye icon-view"></i><i class="fa-solid fa-pen-to-square icon-view"></i><i class="fa-solid fa-trash icon-view"></i></td>
        </tr>
        <tr>
          <td>uttham</td>
          <td>class-10</td>
          <td>15</td>
          <td><i className="fa-solid fa-eye icon-view"></i><i class="fa-solid fa-pen-to-square icon-view"></i><i class="fa-solid fa-trash icon-view"></i></td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}
export default ManageStudent;