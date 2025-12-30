import { CountryCard, mockCountry } from "@/entities/country";
import { HeadingPage } from "@/app/layout/heading-page";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["country"],
    queryFn: () =>
      fetch(
        "https://www.thesportsdb.com/api/v1/json/123/all_countries.php"
      ).then((res) => res.json()),
  });

  return (
    <>
      <HeadingPage>Select Country</HeadingPage>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {mockCountry.map((c, index) => {
          return (
            <CountryCard
              country={c}
              key={index}
              onClick={() => console.log(c.name_en)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
