type TextPanelProps = {
  content: string;
};
export function TextPanel(props: TextPanelProps) {
  return (
    <div className="mx-auto max-w-lg py-2 px-8 shadow-card border-2 border-$dark-black">
      <p className="font-secondary font-medium">{props.content}</p>
    </div>
  );
}
