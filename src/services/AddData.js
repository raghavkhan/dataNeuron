const AddData = async (formData) => {
  const body = formData;
  try {
    const response = await fetch("/api/data/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default AddData;
