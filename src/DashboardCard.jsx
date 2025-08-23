import React from "react";

const DashboardCard = ({ data }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <p>
            <strong>Name:</strong> {data?.name}
          </p>
          <p>
            <strong>Referral Code:</strong> {data?.referralCode}
          </p>
          <p>
            <strong>Total Donations:</strong> {data?.donations}
          </p>

          <div>
            <h3>🎁 Rewards & Unlockables</h3>
            <ul>
              <li>🏅 Bronze Badge – Unlock at {data?.donations} BDT</li>
              <li>🥈 Silver Badge – Unlock at 2,000 BDT</li>
              <li>🥇 Gold Badge – Unlock at 3,000 BDT</li>
              <li>🎉 Exclusive Merch – Unlock at 5,000 BDT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
