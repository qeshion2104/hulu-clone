import Image from "next/image";
import PropTypes from 'prop-types'
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"


function Header() {
  return (
    <header className="">
      <h1>This is Header</h1>
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
          
      </div>
      <Image
        className="object-contain"
        src="https://www.w3schools.com/html/img_chania.jpg" // I need some hulu logo by myself
        width={200}
        height={100}
      />
    </header>
  );
}

Header.propTypes = {}

export default Header;
