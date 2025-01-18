import { Calendar, Clock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WorkshopType } from "@/types";
import { FC } from "react";

interface WorkshopCardProps {
  workshop: WorkshopType;
}

export const WorkshopCard: FC<WorkshopCardProps> = ({ workshop }) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex flex-row justify-between sm:flex-row sm:items-center sm:justify-between gap-2">
          <Badge variant="outline" className="w-fit">
            {workshop.domain}
          </Badge>
          <div className="flex items-center font-bold gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {workshop.schedule.duration}
          </div>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold mt-2">{workshop.theme}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Speaker Info */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={workshop.speaker.avatar} alt={workshop.speaker.name} />
              <AvatarFallback>{workshop.speaker.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="font-semibold leading-none">{workshop.speaker.name}</h3>
              <p className="text-sm text-muted-foreground">{workshop.speaker.title}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Mail className="w-3 h-3 mr-1" />
                {workshop.speaker.email}
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {new Date(workshop.schedule.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'short'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {workshop.schedule.time}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="pt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {workshop.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-2 rounded-lg font-medium transition-colors">
            S'inscrire à l'atelier
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
