import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, User } from "lucide-react";

/* ================= COMPONENT ================= */

export default function StudentRegistrationPage() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BACKEND_URL || "";

  const [formData, setFormData] = React.useState({
    name: "",
    fatherName: "",
    class: "",
    schoolId: "",
    city: "",
    district: "",
    parentEmail: "",
    phone: "",
    email: "",
    password: "",
    otpEmail: "",
    otpPhone: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [emailVerified, setEmailVerified] = React.useState(false);
  const [phoneVerified, setPhoneVerified] = React.useState(false);
  const [schools, setSchools] = React.useState([]);

  React.useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch(`${API}/school/getVerifiedSchoolList`);
        const data = await res.json();
        setSchools(data.schools || []);
      } catch (err) {
        console.error("Failed to fetch schools");
      }
    };

    if (API) fetchSchools();
  }, [API]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= REGISTER =================
  const sendOtp = async () => {
    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        fathersName: formData.fatherName,
        class: formData.class,
        schoolId: formData.schoolId,
        cityDistrict: `${formData.city}, ${formData.district}`,
        parentEmail: formData.parentEmail,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      };

      const res = await fetch(`${API}/student/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setOtpSent(true);
      setMessage("✅ OTP sent");
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmailOtp = async () => {
    try {
      const res = await fetch(`${API}/student/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otpEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setEmailVerified(true);
      setMessage("✅ Email verified");
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  const verifyPhoneOtp = async () => {
    try {
      const res = await fetch(`${API}/student/verify-phone`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otpPhone,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setPhoneVerified(true);
      setMessage("✅ Phone verified");
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailVerified || !phoneVerified) {
      setMessage("❌ Verify both first");
      return;
    }

    setMessage("✅ Registration completed");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button onClick={() => navigate(-1)} className="flex gap-2">
          <ChevronLeft /> Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {message && (
          <div className="mb-4 text-center text-sm font-medium">{message}</div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-8">
              <Section title="Student Details">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  label="Father's Name"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
                <Input
                  label="Class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-sm mb-1">School</label>
                  <select
                    name="schoolId"
                    value={formData.schoolId || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl"
                    required
                  >
                    <option value="">Select School</option>
                    {schools.map((school) => (
                      <option key={school._id} value={school._id}>
                        {school.schoolName} ({school.city})
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  label="District"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Section>

              <Section title="Contact Details">
                <Input
                  label="Parent Email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                />
                <Input
                  label="Student Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Section>

              {!otpSent && (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl"
                >
                  {loading ? "Sending..." : "Register & Send OTP"}
                </button>
              )}

              {otpSent && (
                <>
                  <Section title="Verification">
                    <div>
                      <Input
                        label="Email OTP"
                        name="otpEmail"
                        value={formData.otpEmail}
                        onChange={handleChange}
                      />
                      <button type="button" onClick={verifyEmailOtp}>
                        Verify Email
                      </button>
                    </div>

                    <div>
                      <Input
                        label="Phone OTP"
                        name="otpPhone"
                        value={formData.otpPhone}
                        onChange={handleChange}
                      />
                      <button type="button" onClick={verifyPhoneOtp}>
                        Verify Phone
                      </button>
                    </div>
                  </Section>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS (OUTSIDE) ================= */

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        className="w-full px-4 py-3 border rounded-xl"
        required
      />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
