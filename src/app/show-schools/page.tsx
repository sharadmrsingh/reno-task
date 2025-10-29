'use client';

import { useEffect, useState } from 'react';
import { getSchools } from '@/lib/db';
import { useRouter } from 'next/navigation';

type School = {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string;
};

export default function ShowSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const router = useRouter();

  useEffect(() => {
    getSchools().then(setSchools);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700">
          Schools Directory
        </h1>
        <button
          onClick={() => router.back()}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
        >
          + Add New School
        </button>
      </div>

      {/* Schools Grid */}
      <div className="max-w-6xl mx-auto">
        {schools.length === 0 ? (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-lg">No schools added yet.</p>
            <p className="text-sm">Click “Add New School” to get started.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg text-gray-800 mb-1 truncate">
                    {s.name}
                  </h2>
                  <p className="text-sm text-gray-700">{s.address}</p>
                  <p className="text-sm text-gray-600">{s.city}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
