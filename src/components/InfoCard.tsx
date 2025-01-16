import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { InfoCard as InfoCardType } from '../types';

interface InfoCardProps extends InfoCardType {}

export const InfoCard: FC<InfoCardProps> = ({ icon: Icon, title, status, description }) => (
  <div className="group">
    <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-blue-50">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-700">
              {status}
            </Badge>
          </div>
        </div>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </CardContent>
    </Card>
  </div>
);