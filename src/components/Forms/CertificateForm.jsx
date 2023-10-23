import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import supabase from '../../supabase';

function CertificateForm({closeForm}) {
  const { register,reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: response, error } = await supabase
        .from('CertificateForm')
        .insert([
          {
            name: data.name,
            batch: data.batch,
            post: data.post,
          
           
           
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
    
   
    <p className="text-gray-600 text-center mb-4">Certificate Validation</p>
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-[30rem] mx-auto p-4 bg-white shadow-md rounded-lg">

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Name</label>
        <input
          type="text"
          {...register('name', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Batch</label>
        <input
          type="text"
          {...register('batch', { required: 'This field is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.batch && <p className="text-red-500 text-sm mt-1">{errors.batch.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2"></label>Post
        <input
          type="text"
          {...register('post', { required: 'This field is required',
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
        {errors.post && <p className="text-red-500 text-sm mt-1">{errors.post.message}</p>}
      </div>
   
      <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600">Get Certified</button>
    </form>
    </div>

  );
}

export default CertificateForm;
