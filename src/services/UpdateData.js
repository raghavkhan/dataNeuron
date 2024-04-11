const UpdateData = async (updatedData) => {
  const body = updatedData;
  const {id} = body;
  try {
    const response = await fetch(
      `https://dataneuron-2-undh.onrender.com/api/data/user/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default UpdateData;
