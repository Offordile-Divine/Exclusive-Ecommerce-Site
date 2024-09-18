import React, { useState } from "react";
import TpsNav from "../../components/navigation/terms-privacy-support-nav/TpsNav";
import Profile_inactive from "./Profile_inactive";

const Profile = () => {
  const [activeProfile, setActiveProfile] = useState(false);
  return activeProfile ? (
    <div>
      <TpsNav />
      profile
    </div>
  ) : (
    <Profile_inactive />
  );
};

export default Profile;
