import React, { useState } from 'react';

function PreviewWindow() {
  const [url, setUrl] = useState('https://www.example.com');

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <iframe src={url} width="100%" height="500px" />
    </div>
  );
}

export default PreviewWindow;

// import React, { useState } from 'react';

// function PreviewWindow() {
//   const [url, setUrl] = useState('https://www.example.com');
//   const [isValidUrl, setIsValidUrl] = useState(true);

//   const handleChange = (e) => {
//     const inputUrl = e.target.value;
//     setUrl(inputUrl);
//     setIsValidUrl(validateUrl(inputUrl));
//   };

//   const validateUrl = (string) => {
//     try {
//       new URL(string);
//       return true;
//     } catch (_) {
//       return false;
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={url}
//         onChange={handleChange}
//         style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
//         placeholder="Enter URL"
//       />
//       {!isValidUrl && <div style={{ color: 'red' }}>Invalid URL</div>}
//       {isValidUrl && <iframe src={url} width="100%" height="500px" title="Preview" />}
//     </div>
//   );
// }

// export default PreviewWindow;


