export const fetcher = async (URL) => {
  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Response is`nt ok");
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};
