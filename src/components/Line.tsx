interface Props {
  content: string
}

export default function Line({ content }: Props) {
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-4xl font-bold border-b-2 border-b-#cccccc pb-2">{content}</h2>
    </div>
  );
}