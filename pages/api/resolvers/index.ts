export const resolvers = {
  Query: {
    getUser: (): User => {
      return {
        id: "Foo",
        name: "Tomo"
      };
    },
    hello: (): String => "Hello world!"
  },
};

type User = {
  id: string;
  name: String;
};