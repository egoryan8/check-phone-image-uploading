import './App.css';
import {useState} from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Обработчик события выбора файла
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
    </div>
  );
}

export default App;
