
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const SavedTripsContext = createContext(null);

export function SavedTripsProvider({ children }) {
  const [savedTrips, setSavedTrips] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedTrips")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("savedTrips", JSON.stringify(savedTrips));
  }, [savedTrips]);

  function toggleSavedTrip(id) {
    setSavedTrips((current) =>
      current.includes(id)
        ? current.filter((tripId) => tripId !== id)
        : [...current, id]
    );
  }

  function isSaved(id) {
    return savedTrips.includes(id);
  }

  return (
    <SavedTripsContext.Provider
      value={{ savedTrips, toggleSavedTrip, isSaved }}
    >
      {children}
    </SavedTripsContext.Provider>
  );
}

export function useSavedTrips() {
  const context = useContext(SavedTripsContext);

  if (!context) {
    throw new Error(
      "useSavedTrips must be used inside SavedTripsProvider"
    );
  }

  return context;
}
