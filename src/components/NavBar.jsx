export default function NavBar(){
    return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">Da'One</div>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Services</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
);
}