import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-100">
      
      {/* Icon */}
      <div className="text-4xl mb-4 text-blue-600">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      {/* Button */}
      <Link
        to={`/services/${slug}`}
        className="inline-block text-blue-600 font-semibold hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
};

export default ServiceCard;