// ThankYouPopup.tsx
import React from 'react';

interface ThankYouPopupProps {
    onClose: () => void;
}

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ onClose }) => {
    return (
        <div className="thank-you-popup">
            <p>Thank you for your feedback!</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ThankYouPopup;
