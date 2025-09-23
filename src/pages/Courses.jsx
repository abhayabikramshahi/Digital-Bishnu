import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Affiliate Marketing 101',
    description: 'Learn the basics of affiliate marketing, how it works, and how to start your first campaign in Nepal.',
  },
  {
    id: 2,
    title: 'SEO for Affiliate Marketing',
    description: 'Master SEO strategies to increase traffic to your affiliate websites and improve conversion rates.',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: 'Use social media platforms effectively to promote affiliate products and reach your audience.',
  },
  {
    id: 4,
    title: 'Email Marketing Campaigns',
    description: 'Learn how to build an email list, create engaging campaigns, and increase affiliate sales.',
  },
  {
    id: 5,
    title: 'Content Creation & Blogging',
    description: 'Create high-quality content that attracts readers and converts them into buyers.',
  },
];

function Courses() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
            Explore our carefully curated affiliate marketing courses designed for learners in Nepal.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-red-600">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  {course.description}
                </p>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-red-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Courses;
