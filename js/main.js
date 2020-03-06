// line 3- 5 is called iife (immediately invoked function expression)

(async function (){
  let userID = 1
  const jsonPlaceholder = "https://jsonplaceholder.typicode.com/"
  const response = await fetch(`${jsonPlaceholder}posts`)
  const result = await response.json()
  // document.getElementById("response").innerHTML = JSON.stringify(result)
  // always throw up the JSON on the page so do line 7; and it will render on the page using the dom manipulation

  document.getElementById("triggerCall").addEventListener("click", async function() { // the () is the same as function ()
    // setting of our HTML that we are getting back from the API
    let user = await getDataFromJSON("users",userID)
    userID++
    // document.getElementById("response").innerHTML = user // when calling, the () needs to be right after the function name
    document.getElementById("name").innerHTML = user["name"]
    document.getElementById("phone").innerHTML = user["phone"]
    document.getElementById("streetAddress").innerHTML = user["address"]["street"]
    document.getElementById("website").innerHTML = user["website"]
  })

  // this function will call the json placeholder API, it will return specified data from the json api based off the parameter passed in
  async function getDataFromJSON(route, id){
    const apiResponse = await fetch(`${jsonPlaceholder}${route}/${id}`) //passing in parameter, route, bc it holds the data and to keep it dry
    const apiResult = await apiResponse.json()
    return apiResult //return this bc its the json version of the result


  }
}) ()

// create some functionality that allows the user to click a button and when that button is clicked, it shows the data from our API for the route that we choose
