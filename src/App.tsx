import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center h-screen App bg-slate-900">
      <div className="p-20 rounded-lg info-box bg-slate-300 ">
        <h1 className="mb-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world!
        </h1>
        <p>
          My name is <span className="italic font-bold">Jessica</span>, and
          welcome to my world! 🌍
        </p>
        <p>
          Currently, I am learning web dev and this web home is a work in
          progress.
        </p>
        <p>Keep checking this page out for the latest updates!</p>
        <p className="mt-1 italic font-bold">- Disciplined Monkey</p>
      </div>
    </div>
  );
}

export default App;
