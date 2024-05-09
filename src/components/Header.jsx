import { IconCart,IconUser } from "../icons";

function Header() {
   return (
      <header className="flex justify-between items-center py-8 px-10 border-b border-[#EAEAEA]">
         <div className="flex items-center gap-4">
            <img src="/img/logo.png" width={40} height={40} alt="" />
            <div>
               <h3 className="font-bold text-xl uppercase">React Sneakers</h3>
               <p className="text-sm text-gray_primary">Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="headerRight flex gap-8">
            <li className="flex items-center gap-2.5">
               <IconCart />
               <span>1205 руб.</span>
            </li>
            <li className="flex items-center gap-2">
               <IconUser />
               <span>Профиль</span>
            </li>
         </ul>
      </header>
   );
}


export default Header;