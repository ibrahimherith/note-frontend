import React, { useState } from "react";

type User = {
  name: string;
  age: number;
};

const Something = () => {
  const [user, setUser] = useState<User | null>({ name: "ibrah", age: 8 });

  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.age}</p>
    </div>
  );
};

export default Something;
