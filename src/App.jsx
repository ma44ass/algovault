import {useState} from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#FBF9F1] text-[#2C302E] font-sans flex">
      <Sidebar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage} />

      <main className='flex-1 flex flex-col min-w-0'>
        <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
        />

        <div className='p-8 overflow-y-auto'>

        </div>


      </main>
    </div>
  )
}
 