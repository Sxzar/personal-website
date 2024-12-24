// async function fetchData() {
// 	try {
// 		const response = await fetch('http://ip-api.com/json/');
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}
// 		const data = await response.json();
// 		window.sxzarUserCountryCode = data.countryCode;
// 		window.sxzarUserCountry = data.country;
// 		return data;
// 	} catch (error) {
// 		console.error("An error occurred:", error);
// 		throw error;
// 	}
// }

// // Call fetchData immediately when this script loads
// fetchData();
