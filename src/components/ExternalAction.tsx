interface ExternalActionProps {
  href: string | null;
  label: string;
}

export function ExternalAction({ href, label }: ExternalActionProps) {
  if (href === null) {
    return (
      <span className="external-action external-action--disabled" aria-disabled="true">
        {label} · 待配置
      </span>
    );
  }

  return (
    <a
      className="external-action"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}