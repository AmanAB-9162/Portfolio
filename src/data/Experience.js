import TimelineBadge from "../components/UI/TimelineBadge";

export default function ExperienceContent({ company, title, children }) {
  return (
    <>
      <div className="h-[18rem]">
        <TimelineBadge timeline="June 2024 - August 2024" />
        <p className="mt-3  text-cyan-900">
          <span className="text-[1.5rem] font-bold">{company}</span>
          <span> - </span>
          <span className="text-[1.25rem] font-semibold">{title}</span>
        </p>
        {children}
      </div>
    </>
  );
}
