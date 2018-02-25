import React from 'react';

const AdminLogin = () => {
  return (
    <div id="adminLogin">
      <form>
        USERNAME: <input
          type="text"
          placeholder="username"
        />
        PASSWORD: <input
          type="text"
          placeholder="password"
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
        
    </div>
  )
}

// user authentication
// logout functionality
// generate footer
// generate header

export default AdminLogin;
