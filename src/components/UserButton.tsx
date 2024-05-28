import { User } from "@/api/types";
import { getUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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

  return (
    <Button variant={"none"} className="rounded-xl">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-8 h-8 rounded-full"
      />
      <span className="ml-2">{user.login}</span>
    </Button>
  );
}

export default UserButton;
