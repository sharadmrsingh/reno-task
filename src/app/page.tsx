'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { addSchool } from '@/lib/db';
import { useState } from 'react';

type SchoolForm = {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: FileList;
};

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, trigger, } = useForm<SchoolForm>();
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: SchoolForm) => {
    const file = data.image[0];
    const imageUrl = URL.createObjectURL(file);

    const school = {
      name: data.name.trim(),
      address: data.address.trim(),
      city: data.city.trim(),
      state: data.state.trim(),
      contact: data.contact.trim(),
      email_id: data.email_id.trim(),
      image: imageUrl,
    };

    await addSchool(school);
    alert('✅ School added successfully!');
    router.push('/show-schools');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-2xl bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Add School</h1>
          <button
            onClick={() => router.push('/show-schools')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            View All Schools
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">School Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter school name"
              className={`w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              {...register('address', { required: 'Address is required' })}
              placeholder="Enter address"
              className={`w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>

          {/* City + State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">City</label>
              <input
                {...register('city', { required: 'City is required' })}
                placeholder="Enter city"
                className={`w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 ${errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">State</label>
              <input
                {...register('state', { required: 'State is required' })}
                placeholder="Enter state"
                className={`w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 ${errors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              {...register('contact', {
                required: 'Contact number is required',
                pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number' },
              })}
              placeholder="e.g. 9876543210"
              className={`w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 ${errors.contact ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              {...register('email_id', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
              })}
              placeholder="example@school.com"
              className={`w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 ${errors.email_id ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.email_id && (
              <p className="text-red-500 text-sm mt-1">{errors.email_id.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-1">School Image</label>
            <input
              type="file"
              accept="image/*"
              {...register('image', { required: 'Image is required' })}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file))
                  await trigger('image'); // ✅ this removes the error instantly
                };
              }}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg mt-3 border"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold mt-4"
          >
            Add School
          </button>
        </form>
      </div>
    </div>
  );
}
