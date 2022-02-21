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
    <header className="
        flex flex-col justify-between m-5 h-auto
        sm:flex-row
    ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
          
      </div>
      <Image
        alt="just a logo"
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
