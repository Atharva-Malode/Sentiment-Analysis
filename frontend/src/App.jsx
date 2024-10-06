import React from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = React.useState('');
  const [sentimentResult, setSentimentResult] = React.useState(null);

  const handleClear = () => {
    setInputText('');
    setSentimentResult(null);
  };

  const handleSubmit = async () => {
    if (!inputText) {
      alert('Please enter some text');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/sentiment', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (response.ok) {
        const result = await response.json();
        setSentimentResult(result); // Assuming the result contains "label" and "score"
      } else {
        alert('Failed to fetch sentiment analysis');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while fetching sentiment analysis');
    }
  };

  return (
    <>
      <div className="bg-[#424242] min-h-screen flex flex-col justify-between">
        {/* Navigation */}
        <nav className="w-full flex justify-between items-center p-4 bg-[#229799] sticky top-0">
          <div className="logo text-2xl flex gap-4 items-center font-semibold ml-10">
            <img src={'../public/technology.png'} alt="logo" height={50} width={60} />
            <span className="text-[#F5F5F5]">AMSTECH</span>
          </div>
          <ul className="flex gap-8 mr-10">
            <a href="/" className="hover:text-[#f5f5f5]">
              <li className="font-semibold text-lg text-[#F5F5F5]">Home</li>
            </a>
            <a href="/" className="hover:text-[#f5f5f5]">
              <li className="font-semibold text-lg text-[#F5F5F5]">About</li>
            </a>
            <a href="/" className="hover:text-[#f5f5f5]">
              <li className="font-semibold text-lg text-[#F5F5F5]">Docs</li>
            </a>
            <a href="/" className="hover:text-[#f5f5f5]">
              <li className="font-semibold text-lg text-[#F5F5F5]">Contact</li>
            </a>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col justify-center items-center grow mt-8 px-4 w-full">
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-6 text-center">
            Welcome to Our Application
          </h1>
          <div className="mb-4 w-full max-w-lg">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-[#48CFCB] hover:bg-[#229799] text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          {sentimentResult && (
            <div className="mt-4 p-4 bg-white text-black rounded shadow-md">
              <p><strong>Sentiment:</strong> {sentimentResult.label}</p>
              <p><strong>Score:</strong> {sentimentResult.score.toFixed(2)}</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="w-full bg-[#229799] text-white py-10">
          <div className="container mx-auto flex justify-between items-center px-10">
            <div className="text-sm">© 2024 Your Company. All rights reserved.</div>
            <div className="text-2xl font-semibold">AMSTECH</div>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;


// import React from 'react';
// import './App.css';

// const App = () => {
//   const [inputText, setInputText] = React.useState('');

//   const handleClear = () => {
//     setInputText('');
//   };

//   return (
//     <>
//       <div className="bg-[#424242] min-h-screen flex flex-col justify-between">
//         {/* Navigation */}
//         <nav className="w-full flex justify-between items-center p-4 bg-[#229799] sticky top-0">
//           <div className="logo text-2xl flex gap-4 items-center font-semibold ml-10">
//             <img src={'../public/technology.png'} alt="logo" height={50} width={60} />
//             <span className="text-[#F5F5F5]">AMSTECH</span>
//           </div>
//           <ul className="flex gap-8 mr-10">
//             <a href="/" className="hover:text-[#f5f5f5]">
//               <li className="font-semibold text-lg text-[#F5F5F5]">Home</li>
//             </a>
//             <a href="/" className="hover:text-[#f5f5f5]">
//               <li className="font-semibold text-lg text-[#F5F5F5]">About</li>
//             </a>
//             <a href="/" className="hover:text-[#f5f5f5]">
//               <li className="font-semibold text-lg text-[#F5F5F5]">Docs</li>
//             </a>
//             <a href="/" className="hover:text-[#f5f5f5]">
//               <li className="font-semibold text-lg text-[#F5F5F5]">Contact</li>
//             </a>
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <main className="flex flex-col justify-center items-center grow mt-8 px-4 w-full">
//           <h1 className="text-3xl font-bold text-[#F5F5F5] mb-6 text-center">
//             Welcome to Our Application
//           </h1>
//           <div className="mb-4 w-full max-w-lg">
//             <textarea
//               className="w-full p-2 border border-gray-300 rounded-md"
//               rows="4"
//               placeholder="Enter your text here..."
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="flex gap-4">
//             <button type="submit" className="bg-[#48CFCB] hover:bg-[#229799] text-white font-bold py-2 px-4 rounded">
//               Submit
//             </button>
//             <button
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//               onClick={handleClear}
//             >
//               Clear
//             </button>
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="w-full bg-[#229799] text-white py-10">
//           <div className="container mx-auto flex justify-between items-center px-10">
//             <div className="text-sm">© 2024 Your Company. All rights reserved.</div>
//             <div className="text-2xl font-semibold">AMSTECH</div>
//             <ul className="flex gap-4">
//               <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//               <li><a href="#" className="hover:underline">Terms of Service</a></li>
//               <li><a href="#" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default App;
