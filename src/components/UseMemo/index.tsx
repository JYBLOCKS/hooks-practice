import { ChangeEvent, useEffect, useMemo, useState } from "react";

/**
 * useMemo se usa para memorisar resultados de una funcion
 * quiere decir que si el resultado es el mismo entonces 
 * no se vuelve a calcular solo presenta el mismo resultado ya calculado
 * usarlo en operaciones rapidas puede ser mas bien malo 
 * ya que el tiempo de ejecucion puede ser afectado al intentar memorisar el resultado
 */

export function UseMemo() {
  const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = (await res.json()) as { name: string }[];
      setCountries(data.map((item) => item.name));
    };

    getCountries();

    return () => {};
  }, []);

  const handleChangeSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const onClickShowMore = () => {
    setShowMore(!showMore);
  };

  const filterByCountry = useMemo(() => {
    if (country.length > 0) {
      return countries.filter((item) =>
        item.toLowerCase().includes(country.toLowerCase())
      );
    }
    return countries;
  }, [country, countries]);

  const countriesFiltered = useMemo(() => {
    return !showMore
      ? filterByCountry.filter((_, index) => index < 6)
      : filterByCountry;
  }, [showMore, filterByCountry]);

  return (
    <>
      <h1>useMemo</h1>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        <input onChange={handleChangeSearchByName} />
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Countries</h2>
        <button onClick={onClickShowMore} style={{ width: 130, height: 46 }}>
          {!showMore ? "Show more" : "Show less"}
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 16,
        }}
      >
        {countriesFiltered.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </div>
    </>
  );
}
