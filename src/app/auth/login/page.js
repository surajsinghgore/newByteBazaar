import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p className="text-center text-gray-600">Please login using account detail below.</p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember_me" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="/auth/forget-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
