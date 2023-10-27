import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import supabase,{ supabaseUrl } from '../../supabase';

function FinancialHelpForm({closeForm}) {
  const { register, reset,handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.image[0];

    try {
      // Upload the image to Supabase storage
      const { data: imageUploadResponse, error: imageUploadError } = await supabase.storage
        .from('images') // Replace with your actual storage bucket name
        .upload(`${imageFile.name}`, imageFile, {
          cacheControl: '3600',
        });

      if (imageUploadError) {
        console.error('Error uploading image:', imageUploadError);
        toast.error('Error uploading image');
        return;
      }

      // Once the image is uploaded, get its URL
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/${imageUploadResponse.Key}`;

      // Now you can submit the rest of the form data including the image URL
      const { data: response, error } = await supabase
        .from('FinancialForm')
        .insert([
          {
            email: data.email,
            name: data.name,
            contact: data.contactNo,
            amount: data.amount,
            Purpose: data.purpose,
            image: imageUrl,
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
      toast.error('An error occurred while submitting the form');
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <button className="float-right hover:scale-150  text-red-600 hover:text-red-800" onClick={(closeForm)}>✕</button>
      </div>
      <div className="text-xl font-semibold text-center mb-4">
        Financial Donation Form
      </div>
      
      <p className="text-gray-600 text-center mb-4 text-[10px]">
        This form is intended to collect information of financial donations. Please do not pay sums exceeding $ X without contacting us. You may choose to remain anonymous, in which case you may skip identification fields. The screenshot of your transaction, however, is compulsory as we may need it to verify and keep track of your transactions.
      </p>
    
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className='flex gap-2'>
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-2">Name</label>
          <input
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-2">Contact No.</label>
          <input
            {...register('contactNo', {
              required: 'This field is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo.message}</p>}
        </div>
        </div>
        
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-2">Email </label>
          <input
            type="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Enter a valid email address',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
       
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-2">Amount you want to donate </label>
          <input
            type="number"
            {...register('amount', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Amount should be at least 1',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold">Your purpose to donate</label>
          <input
            {...register('purpose')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold ">Upload a screenshot of your donation </label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"
            {...register('image', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
        </div>
        <p className="text-gray-600 text-[10px] mt-4">
         Credentials for Payment
          <br />
          Name - Amar Singh Garg
          <br />
          Mob - 7987253381
          <br />
          UPI - 7987253381@paytm
        </p>
        <button type="submit" className="w-full bg-indigo-500 mt-2  text-white font-semibold py-2 rounded-md hover-bg-indigo-600">
          Submit
        </button>
      </form>
     
    </div>
  );
}

export default FinancialHelpForm;
