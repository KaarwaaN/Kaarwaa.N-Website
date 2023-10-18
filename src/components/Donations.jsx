import { useState } from 'react';
import { IoShirt, IoBook, IoWallet } from 'react-icons/io5';
import ClothDonationForm from './Forms/ClothDonationForm'; // Import your donation forms
import EducationalKitDonationForm from './Forms/EducationalKitDonationForm';
import FinancialHelpForm from './Forms/FinancialHelpForm';

function DonationSection() {
  const [showClothDonationForm, setShowClothDonationForm] = useState(false);
  const [showEducationalKitDonationForm, setShowEducationalKitDonationForm] = useState(false);
  const [showFinancialHelpForm, setShowFinancialHelpForm] = useState(false);
 
  function closeForm(){
    setShowClothDonationForm(false);
    setShowEducationalKitDonationForm(false);
    setShowFinancialHelpForm(false);
  }

  return (
    <section className="bg-indigo-100 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Make a Donation</h2>
        <p className="text-gray-600 mb-8">Choose how you'd like to contribute</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          className="bg-indigo-500 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-indigo-600"
          onClick={() => setShowClothDonationForm(true)}
        >
          <IoShirt className="text-xl mr-2" />
          Cloth Donation
        </button>
        <button
          className="bg-indigo-500 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-indigo-600"
          onClick={() => setShowEducationalKitDonationForm(true)}
        >
          <IoBook className="text-xl mr-2" />
          Educational Donation
        </button>
        <button
          className="bg-indigo-500 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-indigo-600"
          onClick={() => setShowFinancialHelpForm(true)}
        >
          <IoWallet className="text-xl mr-2" />
          Help Financially
        </button>
      </div>
      {showClothDonationForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <ClothDonationForm closeForm={closeForm} />
        </div>
      )}
      {showEducationalKitDonationForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <EducationalKitDonationForm closeForm={closeForm} />
        </div>
      )}
      {showFinancialHelpForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
  
       
       
          <FinancialHelpForm closeForm={closeForm} />
        </div>
      )}
    </section>
  );
}

export default DonationSection;
