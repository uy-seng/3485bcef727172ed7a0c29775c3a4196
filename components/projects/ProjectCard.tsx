import { Project } from '@/lib/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex-1 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{project.description}</p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="bg-pink-50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-pink-700 font-semibold text-sm">
              <TrendingUp size={16} />
              <span>Key Results</span>
            </div>
            <ul className="space-y-1">
              {project.metrics.map((metric, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
