import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logosf.png'

const navItems = [
  { name: 'Home', path: '/'},
  { name: 'Sobre', path: '/About'},
  { name: 'Solução', path: '/Solution'},
  { name: 'Contato', path: '/Contact'},
  { name: 'FAQ', path: '/Faq'},
  { name: 'Dicas', path: '/Recomendation'},
]

const Header = () => {
  return (
    <header className="bg-blue-500  p-1">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        <div className="flex-shrink-0">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-25 w-auto" />
          </Link>
        </div>

        <nav className="flex-grow flex justify-center space-x-8">
          {navItems.map(({name, path}) => (
            <NavLink key={name}
            to={path}
            className="text-white hover:font-medium text-lg transition-colors duration-300"
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="flex-shrink-0">
          <Link to="/Platform" className="bg-white border-solid border-2 border-indigo px-6 py-2 rounded-full font-bold hover:bg- transition-colors duration-300">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;