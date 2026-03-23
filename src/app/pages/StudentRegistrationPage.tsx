import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, User } from "lucide-react";

export default function StudentRegistrationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    fatherName: "",
    class: "",
    school: "",
    city: "",
    district: "",
    parentEmail: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24">

      {/* Top Nav */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
        >
          <ChevronLeft /> Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="p-4 bg-red-100 rounded-2xl">
            <User className="text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Student Registration
            </h1>
            <p className="text-gray-500 text-sm">
              Register as a student participant
            </p>
          </div>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              <Section title="Student Details">
                <Input label="Name" name="name" />
                <Input label="Father's Name" name="fatherName" />
                <Input label="Class" name="class" />
                <Input label="School" name="school" />

                <Input label="Disrict" name="district" />
                <Input label="City / Town / Village" name="city" />
              </Section>

              <Section title="Contact Details">
                <Input label="Parent Email" name="parentEmail" type="email" />
                <Input label="Phone Number" name="phone" />
              </Section>

              <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition">
                Submit Registration
              </button>

              <p className="text-center text-sm text-gray-500">
                All fields are required
              </p>
            </form>
          </motion.div>

          {/* SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 h-fit sticky top-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Instructions
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>• Fill all details carefully</p>
              <p>• Use valid parent email</p>
              <p>• Double-check your phone number</p>
            </div>

            <div className="mt-6 p-4 bg-red-50 rounded-xl text-sm text-red-600 font-medium">
              Make sure all information is correct before submitting.
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );

  function Input({ label, name, type = "text" }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
          required
        />
      </div>
    );
  }

  function Section({ title, children }) {
    return (
      <div>
        <h2 className="text-base font-semibold text-gray-800 mb-4">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    );
  }
}