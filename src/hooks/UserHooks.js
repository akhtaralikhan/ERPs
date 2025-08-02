import { useState, useEffect } from "react";

// hooks
import { useRedux } from "./index";

// api
import { createSelector } from "reselect";
import { getLoggedinUser } from "../api/apiCore";

const useProfile = () => {
  // global store
  const { useAppSelector } = useRedux();

  // const { settings } = useAppSelector(state => ({
  //   settings: state.Settings.settings,
  // }));

  const errorData = createSelector(
    (state) => state.Settings,
    (state) => ({
      settings: state.settings,
    })
  );
  // Inside your component
  const { settings } = useAppSelector(errorData);

  const image = settings.basicDetails && settings.basicDetails.profile;
  const userProfileSession = getLoggedinUser();
  const [loading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(
    userProfileSession ? { ...userProfileSession, profileImage: image } : null
  );
  useEffect(() => {
    const userProfileSession = getLoggedinUser();
    setUserProfile(
      userProfileSession ? { ...userProfileSession, profileImage: image } : null
    );
  }, [image]);

  return { userProfile, loading };
};

export { useProfile };
