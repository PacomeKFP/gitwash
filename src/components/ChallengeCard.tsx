import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Challenge as ChallengeType } from "../types";

type ChallengeProps = ChallengeType;

export const ChallengeCard: FC<ChallengeProps> = ({
  icon: Icon,
  title,
  description,
  learnings,
  keywords,
}) => (
  <div className="group transform transition-all duration-300 hover:-translate-y-1">
    <Card className="mb-6 hover:shadow-xl border-l-4 border-l-blue-500">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <div className="space-x-2">
          {keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary" className="w-fit">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="group-hover:translate-x-1 transition-transform">
          <h4 className="font-semibold mb-2">Description</h4>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="group-hover:translate-x-1 transition-transform">
          <h4 className="font-semibold mb-2">Ce que tu apprendras</h4>
          <ul className="list-disc pl-4 space-y-1">
            {learnings.map((learning, idx) => (
              <li key={idx} className="text-gray-600">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);
