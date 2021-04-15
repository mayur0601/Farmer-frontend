import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {Logout} from '../actions/auth';

const Navbar = ({farmer}) => {

  const dispatch = useDispatch();
  console.log("farmerrrrr",farmer.isLoggedin);

  const handleLogout = (e) =>{
    dispatch(Logout());
  }
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>


          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        
        {!farmer.isLoggedin ? (
          <>
             <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/sign-up'>Sign up</NavBtnLink>
            </NavBtn>
          </>
      ) : (
        <>
          <NavBtn>
      <NavBtnLink to='#'>{farmer.user?.username}</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="#" onClick={handleLogout}>Logout</NavBtnLink>
        </NavBtn>
        </>
      
      )}
      
      </Nav>  
    </>
  );
};

function mapStateToProps(state) {
  console.log("sttate in Navbar",state.auth);
  return {
     farmer : state.auth
  };
}

export default connect(mapStateToProps)(Navbar);



// !addNewChat ? (
//   <Link to={`/rooms/${id}`}>
//     <div className="sidebarChat">
//       <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
//       <div className="sidebarChat_info">
//         <h2>{name}</h2>
//         <p>{messages[0]?.message}</p>
//       </div>
//     </div>
//   </Link>
// ) : (
//   <div className="sidebarChat" onClick={createChat}>
//     <h2>Add new chat</h2>
//   </div>
// );