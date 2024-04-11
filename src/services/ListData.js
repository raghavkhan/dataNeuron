const ListData = async () => {
  try {
    const response = await fetch("https://dataneuron-2-undh.onrender.com/api/data/user");
    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default ListData;
