import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import supabase from '../../supabase';

function JoinUsForm({closeForm}) {
  const { register,reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: response, error } = await supabase
        .from('JoinUsSection')
        .insert([
          {
            name: data.name,
            contact: data.contactNo,
            email: data.email,
            branch:data.Branch,
            semester:data.semester,
            interest:data.InterestedField
           
           
          }
        ])
        .single();

      if (error) {
        console.error('Error submitting Form:', error);
        
        toast.error('Error submitting Form');
      } else {
        console.log('Form submitted successfully', response);
        reset();
        toast.success('Form submitted successfully');

        
     
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., display an error message
      toast.error('An error occurred while submitting the form');
    }
  }

  return (
    <div className="min-w-md md:min-w-[25rem] mx-auto p-4 bg-white shadow-md rounded-lg">
    <div className="mb-4">
      <button className="float-right hover:scale-150  text-red-600 hover:text-red-800" onClick={(closeForm)}>✕</button>
    </div>
    <h2 className="text-2xl font-semibold text-center mb-4"></h2>
    
   
    <p className="text-gray-600 text-center mb-4">Join Kaarwaa.N as a Volunteer</p>
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-[30rem] mx-auto p-4 bg-white shadow-md rounded-lg">

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
          {...register('contactNo', { required: 'This field is required',
          pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number',
              }, })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Semester</label>
        <input
          type="number"
          {...register('semester', { required: 'This field is required' ,
         })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.semester && <p className="text-red-500 text-sm mt-1">{errors.semester.message}</p>}
      </div>
      <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Your Branch</label>
          <select
            {...register('Branch', { required: 'This field is required' })}
            className="input-field"
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
          {errors.Branch && <p className="text-red-500 text-sm mt-1">{errors.Branch.message}</p>}
        </div>
      <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Interested Field</label>
          <select
            {...register('InterestedField', { required: 'This field is required' })}
            className="input-field"
          >
            <option value="" disabled>Your Intrested Field</option>
            <option value="Teaching">Teaching</option>
            <option value="Orphanage Workshop">Orphanage Workshop</option>
            <option value="Tech Team">Tech Team</option>
            <option value="Media Team">Media Team</option>
            <option value="Content Team">Content Team</option>
           
          </select>
          {errors.InterestedField && <p className="text-red-500 text-sm mt-1">{errors.InterestedField.message}</p>}
        </div>
      <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600">Join Us</button>
    </form>
    </div>

  );
}

export default JoinUsForm;
