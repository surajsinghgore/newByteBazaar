import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <p className="text-center text-gray-600">Enter your email address to reset your password.</p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Reset Password
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
