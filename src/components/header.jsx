import Link from 'next/link';
import { Button } from '@/components/ui/button';

import Nav from './nav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Hemanshu<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <dir className='xl:hidden pl-0 mt-0'>mobile nav</dir>
      </div>
    </header>
  );
};

export default Header;
