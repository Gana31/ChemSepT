export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center ">
      {/* Logo */}
      <img
        src="/chemlogo1.png"
        alt="Logo"
        className="w-100 h-100  object-contain animate-pulse"
      />

      {/* Heading */}
      <h1 className="mt-6 text-xl md:text-2xl text-center animate-fadeInUp">
        <span className="text-blue-600 font-bold">Welcome to</span> <br />
        <span className="text-black font-bold">
          ChemSept Engineering Pvt. Ltd.
        </span>
      </h1>
    </div>
  );
}
