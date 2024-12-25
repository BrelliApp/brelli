import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WordCloud = () => {
  const words = [
    { text: "meet", size: "text-xl font-bold text-red-500" },
    { text: "location", size: "text-lg font-semibold text-orange-500" },
    { text: "private", size: "text-base font-medium text-yellow-500" },
    { text: "secret", size: "text-lg font-semibold text-red-400" },
    { text: "alone", size: "text-xl font-bold text-red-600" },
    { text: "promise", size: "text-base font-medium text-orange-400" },
    { text: "address", size: "text-lg font-semibold text-yellow-600" },
    { text: "gift", size: "text-base font-medium text-red-300" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flagged Words</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          {words.map((word, index) => (
            <span key={index} className={`${word.size} hover:opacity-75 transition-opacity cursor-default`}>
              {word.text}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};