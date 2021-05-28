//
// Made By Jordan Hoosman
//

function OTHER_PAGE_LOAD() {
    //console.log("Unloading other page");

	pageContent.innerHTML = `
		<h1 id="NothingOther">Nothing here yet. ¯\\_(ツ)_/¯ </h1>
	`;
}
function OTHER_PAGE_UNLOAD() {
    //console.log("Unloading other page");

    pageUnloadTimer = 1500;
}