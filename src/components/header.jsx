import Link from 'next/link';
import { Button } from '@/components/ui/button';

import Nav from './nav';
import MobileNav from './mobile-nav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Hemanshu<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <dir className='xl:hidden'>
          <MobileNav />
        </dir>
      </div>
    </header>
  );
};

export default Header;
