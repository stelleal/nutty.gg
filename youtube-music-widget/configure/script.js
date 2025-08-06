const appId = "nuttys-ytmdesktop-widget";
const appName = "nuttys YouTube Music Widget";
const appVersion = "1.0.0";
const baseURL = window.location.origin + window.location.pathname.replace('/configure/', '').replace('/configure', '');

let browserSourceURL = ""

// Request a four digit authentication code
async function RequestCode() {
	const response = await fetch("http://localhost:9863/api/v1/auth/requestcode", {
		method: "POST",
		body: JSON.stringify({
			"appId": appId,
			"appName": appName,
			"appVersion": appVersion
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	
	const responseData = await response.json();
	console.debug(responseData);
	if (responseData.hasOwnProperty("statusCode"))
	{
		document.getElementById("errorCode").innerText = responseData.statusCode;
		document.getElementById("errorMessage").innerText = responseData.message;
		document.getElementById("errorBox").style.display = 'inline';
	}
	else
		return await responseData;
}

// Wait for the user to accept the code and return them an access token
async function RequestToken() {
	const requestCode = await RequestCode();
	const authCode = requestCode.code;
	console.debug(`Auth Code: ${authCode}`);
	document.getElementById("authorizationCode").innerText = authCode;

	// Show the authorize popup
	document.getElementById("authorizationBox").style.display = 'inline';

	const response = await fetch("http://localhost:9863/api/v1/auth/request", {
		method: "POST",
		body: JSON.stringify({
			"appId": appId,
			"code": authCode
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})

	const responseData = await response.json();
	if (responseData.hasOwnProperty("statusCode"))
	{
		document.getElementById("errorCode").innerText = responseData.statusCode;
		document.getElementById("errorMessage").innerText = responseData.message;
		document.getElementById("errorBox").style.display = 'inline';
		
		// Hide the authorize popup
		document.getElementById("authorizationBox").style.display = 'none';
	}
	else
	{
		const token = responseData.token;
		console.debug(`Token: ${token}`);
		console.debug(`Base URL: ${baseURL}`);
		browserSourceURL = `${baseURL}?token=${token}`;
		console.debug(`Browser Source URL: ${browserSourceURL}`);

		// Enable the Copy URL Button
		const copyButton = document.getElementById("copyURLButton");
		copyButton.disabled = false;
		copyButton.innerText = "Click to copy URL";
		copyButton.style.backgroundColor = "#ffffff";
		copyButton.style.color = "#181818";
		copyButton.style.opacity = "1";
		copyButton.style.cursor = "pointer";

		// Show the donation button
		document.getElementById("authorizationCode").style.display = 'none';

		// Show the donation button and confirmation text
		document.getElementById("donateButton").style.display = 'block';
		document.getElementById("authorizationComplete").style.display = 'block';
	}

	return await responseData; 
}

function CopyToURL() {
	console.debug(`Copying to clipboard: ${browserSourceURL}`);
	
	if (!browserSourceURL || browserSourceURL === "") {
		console.error("Browser source URL is empty!");
		document.getElementById("copyURLButton").innerText = "Error - URL empty";
		document.getElementById("copyURLButton").style.backgroundColor = "#ff0000";
		return;
	}
	
	navigator.clipboard.writeText(browserSourceURL).then(() => {
		console.debug("URL copied successfully");
		document.getElementById("copyURLButton").innerText = "Copied to clipboard";
		document.getElementById("copyURLButton").style.backgroundColor = "#00dd63"
		document.getElementById("copyURLButton").style.color = "#ffffff";

		setTimeout(() => {
			document.getElementById("copyURLButton").innerText = "Click to copy URL";
			document.getElementById("copyURLButton").style.backgroundColor = "#ffffff";
			document.getElementById("copyURLButton").style.color = "#181818";
		}, 3000);
	}).catch(err => {
		console.error('Failed to copy URL: ', err);
		document.getElementById("copyURLButton").innerText = "Copy failed";
		document.getElementById("copyURLButton").style.backgroundColor = "#ff0000";
	});
}

function OpenInstructions() {
    window.open("https://www.notion.so/nuttylmao/YouTube-Music-Widget-18d19969b23780e2bb56d25eed4d154e", '_blank').focus();
}

function OpenDonationPage() {
    window.open("http://nutty.gg/pages/donate", '_blank').focus();
}

function CloseErrorBox() {
	document.getElementById("errorBox").style.display = 'none';
}