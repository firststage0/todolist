export const fetcher = async (URL: string) => {
		await fetch(URL)
		.then(res => {
			if(!res.ok){
				throw new Error("Response is`nt ok")
			}
			return res.json()
		})
		.then((data: any) => {
			return data;
		})
		.catch(err => {
			console.log(`Error: ${err}`);
			
		})
}