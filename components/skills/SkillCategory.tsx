import { SkillCategory as SkillCategoryType } from '@/lib/types';
import Badge from '@/components/ui/Badge';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <Badge key={index} variant="pink">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
