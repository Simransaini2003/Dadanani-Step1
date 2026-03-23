import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Building2 } from "lucide-react";

export default function SchoolRegistrationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    schoolName: "",
    city: "",
    district: "",
    address: "",
    website: "",
    contactPerson: "",
    email: "",
    phone: "",

    principalName: "",
    principalPhone: "",
    principalEmail: "",

    nodalName: "",
    nodalPhone: "",
    nodalEmail: "",

    otpEmail: "",
    otpPhone: "",
  });

  const [isApproved] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">

      {/* Top Nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
        >
          <ChevronLeft /> Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="p-3 sm:p-4 bg-red-100 rounded-2xl">
            <Building2 className="text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              School Registration
            </h1>
            <p className="text-gray-500 text-sm">
              Register your school for participation
            </p>
          </div>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <Section title="School Details">
                <Input label="School Name" name="schoolName" />
                <Input label="District" name="district" />
                <Input label="City / Town / Village" name="city" />
                <Input label="Address" name="address" full />
                <Input label="Website" name="website" />
                <Input label="Contact Person" name="contactPerson" />
                <Input label="Email" name="email" type="email" />
                <Input label="Phone" name="phone" />
              </Section>

              <Section title="Principal Details">
                <Input label="Principal Name" name="principalName" />
                <Input label="Principal Phone" name="principalPhone" />
                <Input label="Principal Email" name="principalEmail" type="email" />
              </Section>

              <Section title="Nodal Teacher Details">
                <Input label="Teacher Name" name="nodalName" />
                <Input label="Teacher Phone" name="nodalPhone" />
                <Input label="Teacher Email" name="nodalEmail" type="email" />
              </Section>

              <Section title="Verification">
                <Input label="OTP Email" name="otpEmail" />
                <Input label="OTP Phone" name="otpPhone" />
              </Section>

              <button className="w-full py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition">
                Submit Registration
              </button>
            </form>
          </motion.div>

          {/* SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100 h-fit lg:sticky lg:top-24"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Registration Status
            </h3>

            <div className="p-4 rounded-xl bg-gray-50 border">
              <p className="text-sm text-gray-600">Approval Status</p>
              <p className="text-lg font-bold mt-1">
                {isApproved ? (
                  <span className="text-green-600">Approved</span>
                ) : (
                  <span className="text-red-600">Pending</span>
                )}
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-500 space-y-2">
              <p>• Fill all required details carefully</p>
              <p>• Ensure email & phone are correct</p>
              <p>• Approval may take some time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  function Input({ label, name, type = "text", full = false }) {
    return (
      <div className={full ? "sm:col-span-2" : ""}>
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