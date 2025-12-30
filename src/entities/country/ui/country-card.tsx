import type { TCountry } from "@/shared/api/country";
import { cn } from "@/shared/lib/utils";
import { Card, CardContent } from "@/shared/ui/card";

interface CountryCardProps {
  country: TCountry;
  onClick?: () => void;
}

export const CountryCard = ({ country, onClick }: CountryCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "hover:shadow-xl transition-shadow",
        onClick ? "cursor-pointer" : ""
      )}
    >
      <CardContent className="flex items-center gap-2">
        <img src={country.flag_url_32} />
        {country.name_en}
      </CardContent>
    </Card>
  );
};
