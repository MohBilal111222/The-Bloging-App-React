// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { signOutUser } from '../config/firebase/firebasemethods'

// const Navbar = () => {

//   // useNavigate
//   const navigate = useNavigate()

//   const logoutUser = async () => {
//     const user = await signOutUser();
//     setIsUser(false)
//     console.log(user);
//     navigate('login')
//   }
//   return (
//     <>
//       <div className='d-flex justify-content-center gap-5 m-5'>
//         <h5><Link to=''>Home</Link></h5>
//         <h5><Link to='dashboard'>Dashboard</Link></h5>
//         <h5><Link to='profile'>profile</Link></h5>
//         <h5><Link to='login'>Login</Link></h5>
//         <h5><Link to='register'>Register</Link></h5>
//         <h5 className='cursor-pointer' onClick={logoutUser}>Logout</h5>
//       </div>
//     </>
//   )
// }

// export default Navbar


































import React from 'react'; // Fixing the import statement
import { Link, useNavigate } from 'react-router-dom'; // React Router DOM imports
import { signOutUser } from '../config/firebase/firebasemethods'; // Assuming this function handles sign out

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // On successful sign-out, navigate to the login or home page
        navigate('/login'); // Change this route to wherever you want users to go after sign-out
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={handleSignOut}>Sign Out</button>
    </nav>
  );
};

export default Navbar;
