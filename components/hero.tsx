import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <div className="flex h-screen flex-col justify-between py-36">
      <div>
        <h3 className="mb-2 pl-1 text-lg leading-6 text-highlight">
          Hi all. I am
        </h3>
        <h6 className="text-6xl text-highlight">Zhenqing</h6>
        <h6 className="text-6xl text-highlight">Lang</h6>
        <h3 className="pl-1 text-lg font-medium text-theme-green">
          {'>'} Activately seeking Software Engineer, and Machine Learning Engineer positions.
        </h3>
      </div>
      <div className="space-y-4 text-sm">
        <h3 className="text-theme-gray">{'/* '} Find my profile. {' */'}</h3>
        <p className="font-medium">
          <span className="text-sm text-theme-blue">
            var{' '}
          </span>
          <span className="text-sm text-theme-green ">GithubLink </span>
          <span className="text-sm">= </span>
          <a href={siteConfig.links.github}>
            <span className="text-sm text-theme-red hover:text-hover">
              {'"'}
              {siteConfig.links.github}
              {'"'}
            </span>
          </a>
          <span className="text-sm">;</span>
        </p>
        <p className="font-medium">
          <span className="text-sm text-theme-blue">
            var{' '}
          </span>
          <span className="text-sm text-theme-green ">LinkedInLink </span>
          <span className="text-sm">= </span>
          <a href={siteConfig.links.linkedin}>
            <span className="text-sm text-theme-red hover:text-hover">
              {'"'}
              {siteConfig.links.linkedin}
              {'"'}
            </span>
          </a>
          <span className="text-sm">;</span>
        </p>
      </div>
    </div>
  );
}
