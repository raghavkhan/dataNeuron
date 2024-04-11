import React, { useState, useEffect } from "react";
import ListData from "../services/ListData";
// import UpdateData from "../services/UpdateData";
import Modal from "./Modal";

const Component3 = ({isRefetch, setRefetch}) => {
  const [showModal, setShowModal] = useState(false);
  const [listData, setListData] = useState([]);
  const [updaterId, setUpdaterId] = useState(null);

  const getData = async () => {
    const data = await ListData();
    console.log(data);
    setListData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const updateHandler = (id) => {
    setShowModal(true);
    setUpdaterId(id);
    setRefetch(prev=> !prev);
    // await UpdateData();
  };

  return (
    <div className='container3'>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        {listData
          ? listData?.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
                <td>
                  <button
                    onClick={() => {
                      updateHandler(obj.id);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          : null}
      </table>
      {showModal && <Modal closeModal={closeModal} updaterId={updaterId} />}
    </div>
  );
};

export default Component3;
