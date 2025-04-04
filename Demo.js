// Function that simulates fetching user data from an API
function fetchUserData() {
    console.log(111)
    return new Promise((resolve) => {
        console.log(1111111)
        setTimeout(() => {
            resolve({ name: "John Doe", age: 30 });
        }, 5000); // Simulates a 5-second delay
    });
}

// Using async/await to fetch and display user data
 async function displayUserData() {
    console.log("Fetching user data...");

    // Wait for fetchUserData() to complete
    const user = await fetchUserData();
    console.log("moorthy")
    console.log("User Data:", user);
}

// Call the function
displayUserData();

console.log("This message is printed while waiting for user data.");
