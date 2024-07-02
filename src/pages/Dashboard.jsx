import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { data } from "../../data/founders-and-investors";

export function Dashboard() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    const combinedProfiles = [...data.founders, ...data.investors].sort(
      () => 0.5 - Math.random()
    );
    setProfiles(combinedProfiles);
  }, []);

  const showFounders = () => {
    setFilterOn(true);
    setFilteredProfiles([]);
    setFilteredProfiles(data.founders);
  };

  const showInvestors = () => {
    setFilterOn(true);
    setFilteredProfiles([]);
    setFilteredProfiles(data.investors);
  };
  const profilesToShow = filterOn ? filteredProfiles : profiles;

  return (
    <>
      <div className="flex justify-center mt-4 pt-16">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2 transition-colors">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="border-2 px-4 py-2 rounded-[10px] bg-blue-400 hover:bg-blue-300 text-white font-semibold"
                onClick={showFounders}
              >
                Founders
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="border-2 px-4 py-2 rounded-[10px] bg-blue-400 hover:bg-blue-300 text-white font-semibold"
                onClick={showInvestors}
              >
                Investors
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {profilesToShow.map((profile) => (
          <div key={profile.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={profile.profile_picture}
              alt={`${profile.name}'s profile`}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h2 className="text-center text-xl font-semibold mt-2">
              {profile.name}
            </h2>
            <p className="text-center text-gray-600">{profile.title}</p>
            {profile.company && (
              <p className="text-center text-gray-600">{profile.company}</p>
            )}
            {profile.firm && (
              <p className="text-center text-gray-600">{profile.firm}</p>
            )}
            <p className="text-center text-gray-600">{profile.location}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href={profile.linkedin} className="text-blue-500">
                LinkedIn
              </a>
              <a href={profile.twitter} className="text-blue-500">
                Twitter
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
