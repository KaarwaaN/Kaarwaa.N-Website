import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function FinancialHelpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here, including file upload
    // You can use the data object to access form values and data.image for the uploaded file

    // Example of how to display a success message
    toast.success('Donation submitted successfully');

    // Reset the form if needed
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Email *</label>
        <input
          type="email"
          {...register('email', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Name</label>
        <input
          {...register('name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Contact No.</label>
        <input
          {...register('contactNo')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Amount you want to donate *</label>
        <input
          type="number"
          {...register('amount', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Your purpose to donate</label>
        <input
          {...register('purpose')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Upload a screenshot of your donation *</label>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .pdf"
          {...register('image', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600">Submit</button>
    </form>
  );
}

export default  FinancialHelpForm;
