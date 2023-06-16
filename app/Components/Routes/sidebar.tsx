import Link from 'next/link';
import Container from '../Container';


const Sidebar = () => {
  return (

    <div className='fixed w-100 bg-white z-10 shadow-lg'>
      <div className='
      py-[100%] 
      border-b-[2px]
      '>
        <Container>
          anything
        </Container>

      </div>
      {/* <nav>
        <ul>
          <li>
            <Link href="/Dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/Page2">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link href="/customers">
              Customers
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Sidebar;