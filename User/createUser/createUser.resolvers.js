import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Query: {
    createUser: async (
      _,
      userName,
      firstName,
      avatar,
      email,
      password,
      bio
    ) => {
      console.log(password, typeof process.env.PORT);
      const newPW = bcrypt.hash(password, Number(process.env.PORT));
      const user = await client.user.create({
        data: { userName, firstName, bio, email, password: newPW },
      });
      return {
        ok: true,
        data: user,
      };
    },
  },
};
