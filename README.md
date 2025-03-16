# CC223_APIDev

An API (Application Programming Interface) allows different software systems to communicate with each other. It acts as an intermediary that processes requests and returns responses, enabling applications to share data and functions without requiring knowledge of each other’s internal workings.

A common example of API usage is when logging into a website using Google or Facebook. In this case, an API securely sends login credentials and retrieves the necessary user data. APIs are widely used in web development, mobile applications, and smart devices like voice assistants.

There are various types of APIs, but one of the most commonly used in web development is a REST API. It operates using HTTP methods such as:

GET – Retrieves data (e.g., fetching user details)
POST – Sends new data (e.g., creating an account)
PUT – Updates existing data
DELETE – Removes data
APIs typically return data in JSON (JavaScript Object Notation) format, which is lightweight and easy to read. Below is an example of a JSON response from an API:

json
Copy
Edit
{
  "message": "Hello, testuser! Welcome to the protected route."
}
For this activity, I am working with a protected API route, meaning it requires an Authorization token (JWT token) before access is granted. This security measure ensures that only authenticated users can interact with the API.

Overall, APIs play a crucial role in software development by improving efficiency and flexibility. Instead of building everything from scratch, developers can integrate APIs for services like payment processing, maps, or social media authentication. APIs have become essential in modern applications, allowing different systems to connect, exchange information, and function seamlessly.
