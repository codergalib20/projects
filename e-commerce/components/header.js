import Link from "next/link";

export default function Header() {
  return (
    <nav className="shadow">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        <Link href={"/"} legacyBehavior>
          <a className="text-xl font-bold">Home</a>
        </Link>
        <div className="flex items-center gap-5">
          <Link href={"/cart"} legacyBehavior>
            <a className="text-base font-medium">Cart</a>
          </Link>
          <Link href={"/login"} legacyBehavior>
            <a className="text-base font-medium">Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
