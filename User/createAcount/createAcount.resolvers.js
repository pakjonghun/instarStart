import client from "../../client";
import bcrypt from "bcrypt";
import { createWriteStream } from "fs";

export default {
  Mutation: {
    createAcount: async (
      _,
      { avatar, userName, password, firstName, email }
    ) => {
      const newPassword = await bcrypt.hash(password, 10);
      const newUser = await client.user.create({
        data: { userName, firstName, email, password: newPassword },
      });

      if (avatar) {
        const { filename, createReadStream } = await avatar;
        const newFileName = `${newUser.id}-${Date.now()}-${filename}`;
        const destination = createWriteStream(
          process.cwd() + "/uploads/" + newFileName
        );
        createReadStream().pipe(destination);
      }

      return newUser;
    },
  },
};
