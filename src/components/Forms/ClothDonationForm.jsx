import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function ClothDonationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyCwn_-SEURbtWE7hqA1vIBJBr-46UOvUvXCKPaCuUQikZsZHe3a-WDN18g1lN1jda2/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'cors', // Add this line to enable CORS
      });

      if (response.ok) {
        console.log('Donation submitted successfully');
        // Reset your form if needed
        // reset();
      } else {
        console.error('Error submitting donation');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Cloth Donation</h2>
      <p className="text-gray-600 text-center mb-4">Details for cloth donation</p>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Name *</label>
        <input
          type="text"
          {...register('name', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Mobile Number *</label>
        <input
          type="text"
          {...register('mobileNumber', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">City</label>
        <input
          type="text"
          {...register('city')}
          value="Jabalpur"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Address</label>
        <textarea
          {...register('address')}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Estimated amount of clothes</label>
        <input
          type="text"
          {...register('clothesAmount')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600">Donate</button>
    </form>
  );
}

export default ClothDonationForm;
