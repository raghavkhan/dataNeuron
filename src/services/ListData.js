const ListData = async () => {
  try {
    const response = await fetch("/api/data/list");
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
