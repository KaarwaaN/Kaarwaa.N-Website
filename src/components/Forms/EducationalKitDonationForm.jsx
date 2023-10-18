import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import supabase from '../../supabase';

function EducationalKitDonationForm({closeForm}) {
  const { register,reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: response, error } = await supabase
        .from('EducationalForm')
        .insert([
          {
            Name: data.name,
            contact: data.contactNo,
            email: data.email,
            Type: data.studyMaterial,
           
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
    <h2 className="text-2xl font-semibold text-center mb-4">Educational Kit Donation</h2>
    
   
    <p className="text-gray-600 text-center mb-4">Donate Saraswati to needy kids and build a future</p>
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
        <label className="block text-gray-600 text-sm font-semibold mb-2">Email *</label>
        <input
          type="email"
          {...register('email', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Contact No *</label>
        <input
          type="text"
          {...register('contactNo', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Describe What Study Material You Want to Donate</label>
        <textarea
          {...register('studyMaterial')}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600">Donate</button>
    </form>
      <p className="text-gray-600 mt-4 text-xs">
        For any queries, feel free to contact us:<br />
        Amar Singh Garg - 7987253381<br />
        Akshat Rahangdale - 6266958866<br />
        Aditya Pati Tripathi - 9580595332
      </p>
    </div>

  );
}

export default EducationalKitDonationForm;
