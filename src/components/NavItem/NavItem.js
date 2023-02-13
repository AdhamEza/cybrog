import './NavItem.css'

// Since im going to use the same Navbar in more than section, i made a component so it will be more easier to use.

const NavItem = (props) => {
  return (
    <li className='nav-item'>
      {props.children}
    </li>
  )
}

const NavItemDropDown = (props) => {
    return (
      <li className='nav-item dropdown'>
        {props.children}
      </li>
    )
  }

export default NavItem
export {NavItemDropDown}
