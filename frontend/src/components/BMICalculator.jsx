import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="bmi-wrapper">
      {/* Left side form */}
      <div className="bmi-calculator">
        <h2>Check Your BMI</h2>
        <p>Maintain a healthy balance of weight and nutrition</p>
        <div className="bmi-inputs">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate BMI</button>
        </div>
      </div>

      {/* Right side result */}
      <div className="bmi-result-box">
        {bmi ? (
          <div className="bmi-result">
            <h3>Your BMI: {bmi}</h3>
            <p>Category: <strong>{category}</strong></p>
          </div>
        ) : (
          <div className="bmi-placeholder">
            <h3>Hey !! are you fit...?</h3>
            <p>Enter your height and weight to calculate your BMI.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
