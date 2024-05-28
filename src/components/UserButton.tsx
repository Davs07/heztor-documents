import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { getUser } from "@/hooks/useUser";
import { User } from "@/api/types";

function UserButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const username = "Davs07";
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(username);
        setUser(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return <Button></Button>;
}

export default UserButton;
