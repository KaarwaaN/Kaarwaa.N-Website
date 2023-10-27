import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import supabase, { supabaseUrl } from '../../supabase';

function TshirtForm({ closeForm }) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.image[0];

    try {
      // Upload the image to Supabase storage
      const { data: imageUploadResponse, error: imageUploadError } = await supabase.storage
        .from('tshirt') // Replace with your actual storage bucket name
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
        .from('TshirtForm')
        .insert([
          {
            email: data.email,
            name: data.name,
            contact: data.contactNo,
            year: data.year,
            branch: data.Branch,
            size: data.size,
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
    <>
    <div className="min-w-[15rem] md:min-w-[30rem]  mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-2">
        <button className="float-right hover:scale-150 text-red-600 hover:text-red-800" onClick={closeForm}>✕</button>
      </div>
      <h2 className="text-xl font-semibold text-center mb-1">Get Your Tshirt Now!</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className='flex gap-1'>
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">Name *</label>
          <input
            type="text"
            {...register('name', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">Contact No *</label>
          <input
            type="text"
            {...register('contactNo', {
              required: 'This field is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number',
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo.message}</p>}
        </div>
        </div>

        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">Email *</label>
          <input
            type="email"
            {...register('email', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

       

        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">College</label>
          <input
            type="text"
            {...register('college', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college.message}</p>}
        </div>
       <div className='flex gap-2'>
       <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">Year</label>
          <input
            type="text"
            {...register('year', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year.message}</p>}
        </div>

        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">Your Branch (Leave if Not applicable)</label>
          <select
            {...register('Branch', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="" disabled>Your Branch</option>
            <option value="AIADS">AIADS</option>
            <option value="CE">CE</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EE">EE</option>
            <option value="IP">IP</option>
            <option value="IT">IT</option>
            <option value="ME">ME</option>
            <option value="MTE">MTE</option>
          </select>
          {errors.Branch && <p className="text-red-500 text-xs mt-1">{errors.Branch.message}</p>}
        </div>
       </div>
        

        <div className="mb-2">
          <label className="block text-gray-600 text-xs font-semibold mb-1">Size for T-shirt</label>
          <select
            {...register('size', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="" disabled>Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large / XL">Large / XL</option>
          </select>
          {errors.size && <p className="text-red-500 text-xs mt-1">{errors.size.message}</p>}
        </div>

        <div className="mb-2">
      
          <label className="block text-gray-600 text-xs font-semibold mb-1">Upload a screenshot of payment</label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"
            {...register('image', { required: 'This field is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
        </div>
        <p className="text-gray-600 text-xs mt-4">
         Credentials for Payment
          <br />
          Name - Amar Singh Garg
          <br />
          Mob - 7987253381
          <br />
          UPI - 7987253381@paytm
        </p>

        <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 mt-2 rounded-md hover:bg-indigo-600">Submit</button>
      </form>
     

    
    </div>

    
    </>
    
  );
}

export default TshirtForm;
