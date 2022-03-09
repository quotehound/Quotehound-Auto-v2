// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/

const { ApolloServer, gql } = require('apollo-server');

// Schema
const typeDefs = gql`

  type Car {
    year: Int
    make: String
  }

# Queries
  type Query {
    CarYear: [Car]
    CarMake: [Car]
  }
`;

// Stored CarYear
const car_year = [
  {
      "year": "1899"
  },
  {
      "year": "1900"
  },
  {
      "year": "1901"
  },
  {
      "year": "1902"
  },
  {
      "year": "1903"
  },
  {
      "year": "1904"
  },
  {
      "year": "1905"
  },
  {
      "year": "1906"
  },
  {
      "year": "1907"
  },
  {
      "year": "1908"
  },
  {
      "year": "1909"
  },
  {
      "year": "1910"
  },
  {
      "year": "1911"
  },
  {
      "year": "1912"
  },
  {
      "year": "1913"
  },
  {
      "year": "1914"
  },
  {
      "year": "1915"
  },
  {
      "year": "1916"
  },
  {
      "year": "1917"
  },
  {
      "year": "1918"
  },
  {
      "year": "1919"
  },
  {
      "year": "1920"
  },
  {
      "year": "1921"
  },
  {
      "year": "1922"
  },
  {
      "year": "1923"
  },
  {
      "year": "1924"
  },
  {
      "year": "1925"
  },
  {
      "year": "1926"
  },
  {
      "year": "1927"
  },
  {
      "year": "1928"
  },
  {
      "year": "1929"
  },
  {
      "year": "1930"
  },
  {
      "year": "1931"
  },
  {
      "year": "1932"
  },
  {
      "year": "1933"
  },
  {
      "year": "1934"
  },
  {
      "year": "1935"
  },
  {
      "year": "1936"
  },
  {
      "year": "1937"
  },
  {
      "year": "1938"
  },
  {
      "year": "1939"
  },
  {
      "year": "1940"
  },
  {
      "year": "1941"
  },
  {
      "year": "1942"
  },
  {
      "year": "1943"
  },
  {
      "year": "1944"
  },
  {
      "year": "1945"
  },
  {
      "year": "1946"
  },
  {
      "year": "1947"
  },
  {
      "year": "1948"
  },
  {
      "year": "1949"
  },
  {
      "year": "1950"
  },
  {
      "year": "1951"
  },
  {
      "year": "1952"
  },
  {
      "year": "1953"
  },
  {
      "year": "1954"
  },
  {
      "year": "1955"
  },
  {
      "year": "1956"
  },
  {
      "year": "1957"
  },
  {
      "year": "1958"
  },
  {
      "year": "1959"
  },
  {
      "year": "1960"
  },
  {
      "year": "1961"
  },
  {
      "year": "1962"
  },
  {
      "year": "1963"
  },
  {
      "year": "1964"
  },
  {
      "year": "1965"
  },
  {
      "year": "1966"
  },
  {
      "year": "1967"
  },
  {
      "year": "1968"
  },
  {
      "year": "1969"
  },
  {
      "year": "1970"
  },
  {
      "year": "1971"
  },
  {
      "year": "1972"
  },
  {
      "year": "1973"
  },
  {
      "year": "1974"
  },
  {
      "year": "1975"
  },
  {
      "year": "1976"
  },
  {
      "year": "1977"
  },
  {
      "year": "1978"
  },
  {
      "year": "1979"
  },
  {
      "year": "1980"
  },
  {
      "year": "1981"
  },
  {
      "year": "1982"
  },
  {
      "year": "1983"
  },
  {
      "year": "1984"
  },
  {
      "year": "1985"
  },
  {
      "year": "1986"
  },
  {
      "year": "1987"
  },
  {
      "year": "1988"
  },
  {
      "year": "1989"
  },
  {
      "year": "1990"
  },
  {
      "year": "1991"
  },
  {
      "year": "1992"
  },
  {
      "year": "1993"
  },
  {
      "year": "1994"
  },
  {
      "year": "1995"
  },
  {
      "year": "1996"
  },
  {
      "year": "1997"
  },
  {
      "year": "1998"
  },
  {
      "year": "1999"
  },
  {
      "year": "2000"
  },
  {
      "year": "2001"
  },
  {
      "year": "2002"
  },
  {
      "year": "2003"
  },
  {
      "year": "2004"
  },
  {
      "year": "2005"
  },
  {
      "year": "2006"
  },
  {
      "year": "2007"
  },
  {
      "year": "2008"
  },
  {
      "year": "2009"
  },
  {
      "year": "2010"
  },
  {
      "year": "2011"
  },
  {
      "year": "2012"
  },
  {
      "year": "2013"
  },
  {
      "year": "2014"
  },
  {
      "year": "2015"
  },
  {
      "year": "2016"
  },
  {
      "year": "2017"
  },
  {
      "year": "2018"
  },
  {
      "year": "2019"
  },
  {
      "year": "2020"
  },
  {
      "year": "2021"
  },
  {
      "year": "2022"
  }
];

// Stored CarMake
const car_make = [
  {
    "make": "Acura"
  },
  {
    "make": "Alfa Romeo"
  },
  {
    "make": "Aston Martin"
  },
  {
    "make": "Audi"
  },
  {
    "make": "Bentley"
  },
  {
    "make": "BMW"
  },
  {
    "make": "Buick"
  },
  {
    "make": "Cadillac"
  },
  {
    "make": "Chevrolet"
  },
  {
    "make": "Chrysler"
  },
  {
    "make": "Dodge"
  },
  {
    "make": "Ferrari"
  },
  {
    "make": "FIAT"
  },
  {
    "make": "Ford"
  },
  {
    "make": "Freightliner"
  },
  {
    "make": "Genesis"
  },
  {
    "make": "GMC"
  },
  {
    "make": "Honda"
  },
  {
    "make": "Hyundai"
  },
  {
    "make": "INFINITI"
  },
  {
    "make": "Jaguar"
  },
  {
    "make": "Jeep"
  },
  {
    "make": "Karma"
  },
  {
    "make": "Kia"
  },
  {
    "make": "Lamborghini"
  },
  {
    "make": "Land Rover"
  },
  {
    "make": "Lexus"
  },
  {
    "make": "Lincoln"
  },
  {
    "make": "Lotus"
  },
  {
    "make": "Maserati"
  },
  {
    "make": "Mazda"
  },
  {
    "make": "McLaren"
  },
  {
    "make": "Mercedes-Benz"
  },
  {
    "make": "MINI"
  },
  {
    "make": "Mitsubishi"
  },
  {
    "make": "Nissan"
  },
  {
    "make": "Polestar"
  },
  {
    "make": "Porsche"
  },
  {
    "make": "RAM"
  },
  {
    "make": "Rivian"
  },
  {
    "make": "Rolls-Royce"
  },
  {
    "make": "Subaru"
  },
  {
    "make": "Tesla"
  },
  {
    "make": "Toyota"
  },
  {
    "make": "Volkswagen"
  },
  {
    "make": "Volvo"
  }
];

// Resolvers
const resolvers = {
    Query: {
      CarYear: () => car_year,
      CarMake: () => car_make,
    },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});