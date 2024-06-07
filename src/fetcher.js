export const fetcher = async (URL) => {
  await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Response is`nt ok");
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};
