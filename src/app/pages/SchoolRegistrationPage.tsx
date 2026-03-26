import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Building2, Mail, Phone, CheckCircle2, Clock } from "lucide-react";

function Input({ label, name, value, onChange, type = "text", full = false, disabled = false }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg transition-all ${
          disabled 
            ? "bg-gray-50 border-gray-200 text-gray-500" 
            : "border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        }`}
        required={!disabled}
      />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-semibold mb-3">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function StatusBadge({ registered, emailVerified, phoneVerified }) {
  if (emailVerified && phoneVerified) {
    return (
      <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl">
        <CheckCircle2 className="w-4 h-4" />
        <span>✅ Both Verified</span>
      </div>
    );
  }
  if (registered) {
    return (
      <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-xl">
        <Clock className="w-4 h-4" />
        <span>⏳ Awaiting Verification</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl">
      <span>📝 Fill Form</span>
    </div>
  );
}

export default function SchoolRegistrationPage() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BACKEND_URL || "";

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
    password: "",
    otpEmail: "",
    otpPhone: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [registered, setRegistered] = React.useState(false);
  const [emailVerified, setEmailVerified] = React.useState(false);
  const [phoneVerified, setPhoneVerified] = React.useState(false);

  const [isApproved] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["phone", "principalPhone", "nodalPhone", "otpPhone"].includes(name)) {
      if (!/^\d{0,10}$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API) {
      setMessage("❌ Backend URL not configured");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        schoolName: formData.schoolName,
        city: formData.city,
        district: formData.district,
        address: formData.address,
        website: formData.website,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        principalName: formData.principalName,
        principalPhone: formData.principalPhone,
        principalEmail: formData.principalEmail,
        nodalTeacherName: formData.nodalName,
        nodalTeacherPhone: formData.nodalPhone,
        nodalTeacherEmail: formData.nodalEmail,
        password: formData.password,
      };

      const res = await fetch(`${API}/school/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setRegistered(true);
      setMessage("✅ Registration successful! Check your email and phone for OTPs.");
    } catch (err) {
      setMessage("❌ " + (err?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  const verifyEmailOtp = async () => {
    if (!registered) {
      setMessage("❌ First submit registration");
      return;
    }

    if (!formData.otpEmail) {
      setMessage("❌ Enter email OTP");
      return;
    }

    try {
      const res = await fetch(`${API}/school/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otpEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Email verification failed");

      setEmailVerified(true);
      setMessage("✅ Email verified successfully!");
    } catch (err) {
      setMessage("❌ " + (err?.message || "Email verification failed"));
    }
  };

  const verifyPhoneOtp = async () => {
    if (!registered) {
      setMessage("❌ First submit registration");
      return;
    }

    if (!formData.otpPhone) {
      setMessage("❌ Enter phone OTP");
      return;
    }

    try {
      const res = await fetch(`${API}/school/verify-phone`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otpPhone,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Phone verification failed");

      setPhoneVerified(true);
      setMessage("✅ Phone verified successfully!");
    } catch (err) {
      setMessage("❌ " + (err?.message || "Phone verification failed"));
    }
  };

  // const sendForApproval = () => {
  //   if (!emailVerified || !phoneVerified) {
  //     setMessage("❌ Verify both email and phone first");
  //     return;
  //   }

  //   setMessage("✅ School ready for approval! You can now login after admin approval.");
  // };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
        >
          <ChevronLeft /> Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
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
            <StatusBadge registered={registered} emailVerified={emailVerified} phoneVerified={phoneVerified} />
          </div>
        </motion.div>

        {message && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center text-sm font-medium"
          >
            {message}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: School Details - Disabled after registration */}
              <Section title="School Details">
                <Input 
                  label="School Name" 
                  name="schoolName" 
                  value={formData.schoolName} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="District" 
                  name="district" 
                  value={formData.district} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="City / Town / Village" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange}
                  full 
                  disabled={registered}
                />
                <Input 
                  label="Website" 
                  name="website" 
                  value={formData.website} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Contact Person" 
                  name="contactPerson" 
                  value={formData.contactPerson} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Password" 
                  name="password" 
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange}
                  disabled={registered}
                />
              </Section>

              <Section title="Principal Details">
                <Input 
                  label="Principal Name" 
                  name="principalName" 
                  value={formData.principalName} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Principal Phone" 
                  name="principalPhone" 
                  value={formData.principalPhone} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Principal Email" 
                  name="principalEmail" 
                  type="email" 
                  value={formData.principalEmail} 
                  onChange={handleChange}
                  disabled={registered}
                />
              </Section>

              <Section title="Nodal Teacher Details">
                <Input 
                  label="Teacher Name" 
                  name="nodalName" 
                  value={formData.nodalName} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Teacher Phone" 
                  name="nodalPhone" 
                  value={formData.nodalPhone} 
                  onChange={handleChange}
                  disabled={registered}
                />
                <Input 
                  label="Teacher Email" 
                  name="nodalEmail" 
                  type="email" 
                  value={formData.nodalEmail} 
                  onChange={handleChange}
                  disabled={registered}
                />
              </Section>

              {/* Step 2: OTP Verification - Only visible after registration */}
              {registered && (
                <Section title="📧 OTP Verification (Check Email & Phone)">
                  <div className="sm:col-span-2 flex items-end gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-200">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Input 
                        label="Email OTP" 
                        name="otpEmail" 
                        value={formData.otpEmail} 
                        onChange={handleChange}
                      />
                    </div>
                    <button 
                      type="button" 
                      onClick={verifyEmailOtp} 
                      disabled={!formData.otpEmail}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0 whitespace-nowrap"
                    >
                      {emailVerified ? "✅ Verified" : "Verify Email"}
                    </button>
                  </div>

                  <div className="sm:col-span-2 flex items-end gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-dashed border-green-200">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Input 
                        label="Phone OTP" 
                        name="otpPhone" 
                        value={formData.otpPhone} 
                        onChange={handleChange}
                      />
                    </div>
                    <button 
                      type="button" 
                      onClick={verifyPhoneOtp} 
                      disabled={!formData.otpPhone}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0 whitespace-nowrap"
                    >
                      {phoneVerified ? "✅ Verified" : "Verify Phone"}
                    </button>
                  </div>
                </Section>
              )}

              {/* Step 3: Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  type="submit"
                  disabled={loading || registered}
                  className="w-full py-4 bg-red-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : registered ? "✅ Registered" : "Submit Registration"}
                </button>

                {/* <button
                  type="button"
                  onClick={sendForApproval}
                  disabled={!registered || !emailVerified || !phoneVerified}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  🚀 Send for Approval
                </button> */}
              </div>
            </form>
          </motion.div>

          <motion.div className="bg-white rounded-2xl p-6 shadow-md border">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Registration Status</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                registered ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  registered ? 'bg-green-500' : 'bg-gray-300'
                }`} />
                <span>School Registration {registered ? '✅' : '⏳'}</span>
              </div>
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                emailVerified ? 'bg-green-50 border border-green-200' : registered ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  emailVerified ? 'bg-green-500' : registered ? 'bg-yellow-500' : 'bg-gray-300'
                }`} />
                <span>Email Verification {emailVerified ? '✅' : registered ? '📧' : '⏳'}</span>
              </div>
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                phoneVerified ? 'bg-green-50 border border-green-200' : registered ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  phoneVerified ? 'bg-green-500' : registered ? 'bg-yellow-500' : 'bg-gray-300'
                }`} />
                <span>Phone Verification {phoneVerified ? '✅' : registered ? '📱' : '⏳'}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              After approval, you can login with your credentials
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
