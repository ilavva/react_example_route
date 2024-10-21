export type Speaker = {
  login: {
    uuid: string;
  };
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
  nat: string;
  location: {
    city: string;
    state: string;
    country: string;

    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
};
