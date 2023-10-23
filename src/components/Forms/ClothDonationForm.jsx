import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import supabase from '../../supabase';

function ClothDonationForm({closeForm}) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const { data: response, error } = await supabase
        .from('Cloth Donation')
        .insert([
          {
            Name: data.name,
            Contact: data.mobileNumber,
            City: data.city,
            Address: data.address,
            ClothesAmount: data.clothesAmount,
         
          }
        ])
        .single();

      if (error) {
        console.error('Error submitting donation:', error);
       
        toast.error('Error submitting donation');
      } else {
        console.log('Donation submitted successfully', response);
        reset();
        toast.success('Donation submitted successfully');

        
       
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., display an error message
      toast.error('An error occurred while submitting the form');
    }
  }

 return (
  <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <div className="mb-4">
      <button className="float-right hover:scale-150  text-red-600 hover:text-red-800" onClick={(closeForm)}>✕</button>
    </div>
    <div className="text-2xl font-semibold text-center mb-1">
      Cloth Donation Form
    </div>
    
    <p className="text-gray-600 text-center mb-4 text-xs">
      This form is intended to collect information of Cloth donations.Donate saraswati to the kids
    </p>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
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
          {...register('mobileNumber', { required: 'This field is required',
          pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number',
              }, })}
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
   
    <p className="text-gray-600 mt-2 text-xs">
    for any query feel free to contact us -
    Amar Singh Garg - 7987253381 
    Akshat Rahangdale - 6266958866
    Richa Gupta - 7987856329
    </p>
  </div>
);
    }

export default ClothDonationForm;
