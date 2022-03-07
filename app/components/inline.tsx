type Props = {
  children: React.ReactNode;
};
export function Inline(props: Props) {
  return <div className="flex gap-5 items-center">{props.children}</div>;
}
