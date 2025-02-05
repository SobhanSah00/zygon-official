import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import styles
import { Link } from "react-router-dom";

export const AdminZygonControl = () => {
  const [form, setForm] = useState({
    EventName: "",
    Year: "",
    WinnersName: "",
    Position: "",
    PonintSequre: "", // ✅ Matches backend typo
  });
  const [error, setError] = useState("");

  const predefinedEvents = ["Event 1", "Event 2", "Event 3", "Event 4"];
  const years = [2021, 2022, 2023, 2024];
  const positions = [1, 2, 3];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (Object.values(form).some((value) => value.trim() === "")) {
      setError("All fields are required.");
      toast.error("All fields are required!"); // ✅ Show error toast
      return;
    }

    try {
      await axios.post(
        "https://backen-zygon.onrender.com/api/v1/zygonInfo/PostZygonTable",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Zygon Table Information added successfully!", { autoClose: 3000 }); // ✅ Success toast
      setForm({
        EventName: "",
        Year: "",
        WinnersName: "",
        Position: "",
        PonintSequre: "",
      });
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Something went wrong";
      setError(errorMsg);
      toast.error(errorMsg); // ✅ Error toast
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Admin: Add Zygon Entry
      </h2>

      <ToastContainer /> {/* ✅ Ensures toasts are displayed */}

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Name Dropdown */}
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <select
            name="EventName"
            value={form.EventName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Event</option>
            {predefinedEvents.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>

        {/* Year Dropdown */}
        <div>
          <label className="block text-sm font-medium">Year</label>
          <select
            name="Year"
            value={form.Year}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Winner's Name Input */}
        <div>
          <label className="block text-sm font-medium">Winner's Name</label>
          <input
            type="text"
            name="WinnersName"
            value={form.WinnersName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Winner's Name"
            required
          />
        </div>

        {/* Position Dropdown */}
        <div>
          <label className="block text-sm font-medium">Position</label>
          <select
            name="Position"
            value={form.Position}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Position</option>
            {positions.map((position, index) => (
              <option key={index} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        {/* Point Score Input (using PonintSequre as per backend) */}
        <div>
          <label className="block text-sm font-medium">Ponint Sequre</label>
          <input
            type="number"
            name="PonintSequre" // ✅ Match backend typo
            value={form.PonintSequre}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Score"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
        >
          Submit
        </button>
      </form>

      {/* Link to Update Page */}
      <div className="mt-4 text-center">
        <p className="text-sm">
          Already have an entry?{" "}
          <Link to="/update" className="text-blue-500 underline">
            Update Zygon Entry
          </Link>
        </p>
      </div>
    </div>
  );
};
