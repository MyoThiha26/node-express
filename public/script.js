const fetchData = async () => {
  const apiUrl = localStorage.getItem("apiUrl");
  console.log(apiUrl);
  if (apiUrl) {
    const response = await fetch(`/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};
fetchData();
