import React, { useState } from "react";

const App = () => {
  const [flag, setFlag] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const modalOpen = () => {
    setFlag(true);
  };

  const modalClose = () => {
    setFlag(false);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      isValid = false;
    }

    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      isValid = false;
    }

    const selectedDob = new Date(dob);
    const currentDate = new Date();
    if (selectedDob > currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      isValid = false;
    }

    if (isValid) {
      setUsername("");
      setEmail("");
      setPhone("");
      setDob("");
      console.log({
        Username: username,
        Email: email,
        Phone: phone,
        DOB: dob,
      });
    }
  };

  return (
    <div className="main">
      <h1>User Details Modal</h1>
      <button onClick={modalOpen}>Open Form</button>

      {flag && (
        <div className="modal-overlay" onClick={modalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={formSubmit}>
              <h2>Fill Details</h2>
              <div>
                <label>Username:</label>
                <br />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label>Email Address:</label>
                <br />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <br />
                <input
                  type="number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label>Date of Birth:</label>
                <br />
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <input type="submit" className="submit-button" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
