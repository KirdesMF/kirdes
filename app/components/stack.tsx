type StackProps = {
  children: React.ReactNode;
  gap: string;
  align: 'items-start' | 'items-center' | 'items-end';
  justify: 'justify-evenly' | 'justify-around' | 'justify-between';
};

export function Stack(props: StackProps) {
  const { gap = 'size-xs' } = props;

  const test = 'gap-$' + gap;

  return (
    <div className={` flex flex-col gap-$size-xs flow-space-$md `}>
      {props.children}
    </div>
  );
}
