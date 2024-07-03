import { Icons } from '@/components/icons';
import { Badge } from "@/components/ui/badge";

export interface ProjectItemProps {
  title: string;
  date: string;
  tags: string[];
  descriptions: string[];
}

export function ProjectItem({
  title,
  date,
  tags,
  descriptions,
}: ProjectItemProps) {
  return (
    <details className="group" open>
      <summary className="flex items-center hover:cursor-pointer hover:text-hover">
        <div className="flex w-12 items-center justify-around px-1">
          <Icons.chevronRight
            size={16}
            className="transition group-open:rotate-90"
          />
        </div>
        <h3 className="font-medium">{title}</h3>
      </summary>
      <div className="space-y-1.5 py-1 pl-12 text-sm md:text-base">
        <div className="text-xs font-extralight">{date}</div>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
        <ul>
          {descriptions.map((description, index) => (
            <li key={index} className="list-disc">
              {' '}
              {description}{' '}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
