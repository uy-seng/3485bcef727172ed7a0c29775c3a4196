import { Experience } from '@/lib/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-4 top-8 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-medium hidden md:block" />

      <div className="space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
              <div className="flex items-center gap-2 mt-1 text-pink-600 font-semibold">
                <Briefcase size={16} />
                <span>{experience.company}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-pink-500 mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.skills.map((skill, index) => (
              <Badge key={index} variant="pink">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
