import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BannerContext = createContext();
export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);

  const fetchBanners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/banners");
      setBanners(res.data);
    } catch (error) {
      console.error("Error fetching banners in context", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <BannerContext.Provider value={{ banners, setBanners, fetchBanners }}>
      {children}
    </BannerContext.Provider>
  );
};

