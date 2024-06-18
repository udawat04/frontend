

const Addcart = () => {
 
  return (
    <div className="form-container">
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input type="mobile" id="mobile" name="mobile"  />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  />
        </div>
        
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
     
    </div>
  );
}

export default Addcart