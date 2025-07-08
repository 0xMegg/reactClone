import React from "react";
import { Link } from "react-router-dom";
import "./Global.css";

function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          테스트 페이지
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Tailwind CSS가 성공적으로 적용되었습니다!
        </p>
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">Tailwind CSS 예시:</p>
            <div className="mt-2 space-y-2">
              <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                bg-blue-500
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                bg-green-500
              </div>
              <div className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                bg-red-500
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200"
          >
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Test;
