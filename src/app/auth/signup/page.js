import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <p className="text-center text-gray-600">Please fill in the details to create an account.</p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input id="first_name" name="first_name" type="text" autoComplete="given-name" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input id="last_name" name="last_name" type="text" autoComplete="family-name" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
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
            <input id="password" name="password" type="password" autoComplete="new-password" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
