<html>
  <head>
    <meta charset="UTF-8" />
    <title>Registration Form</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <style>
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .form-container {
        max-width: 700px;
        margin: auto;
      }
      .form-container label {
        display: inline-block;
        width: 120px;
      }
      .user-table {
        width: 100%;
        border-collapse: collapse;
      }
      .user-table th,
      .user-table td {
        border: 1px solid #f2f2f2;
        padding: 8px;
        text-align: left;
      }
      .user-table th {
        background-color: #f2f2f2;
      }
      .input-field {
        border: 1px solid #ddd;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body class="bg-grey-100">
    <div class="center">
      <div class="form-container bg-white p-6 rounded-md shadow-md">
        <h2 class="text-2xl font-bold mb-4">Registration Form</h2>
        <form id="registrationForm">
          <div class="mb-4">
            <label for="name" class="inline-block w-24">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full rounded-md p-2 mb-2 input-field"
              required=""
            />
          </div>
          <div class="mb-4">
            <label for="email" class="inline-block w-24">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full rounded-md p-2 mb-2 input-field"
              required=""
            />
          </div>
          <div class="mb-4">
            <label for="password" class="inline-block w-24">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full rounded-md p-2 mb-2 input-field"
              required=""
            />
          </div>
          <div class="mb-4">
            <label for="dob" class="inline-block w-24">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              class="w-full rounded-md p-2 mb-2 input-field"
              required=""
              max="2005-11-21"
              min="1968-11-21"
            />
            <span id="dobError" class="error-msg"></span>
          </div>
          <div class="mb-4">
            <label for="terms" class="inline-block w-24"
              >Accept Terms &amp; Conditions:</label
            >
            <input
              type="checkbox"
              id="terms"
              name="terms"
              class="mr-2 leading-tight"
              required=""
            />
          </div>
          <button
            type="submit"
            class="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <div class="max-w-3xl mx-auto mt-7">
      <h2 class="text-2xl font-bold mb-3">Entries</h2>
      <table id="userTable" class="user-table">
        <tbody>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Password</th>
            <th class="px-4 py-2">Dob</th>
            <th class="px-4 py-2">Accepted terms?</th>
          </tr>
        </tbody>
        <tbody id="userTableBody"></tbody>
      </table>
    </div>
    <script src="index.js"></script>
  </body>
</html>
