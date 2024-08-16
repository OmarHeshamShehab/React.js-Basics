type HeaderParam = {
  text: string;
  textsub?: string;
};

export default function Header({ text, textsub="this is default value since it is null" }: HeaderParam) {
  return (
    <>
      <h1>{text}</h1>
      <h5>{textsub}</h5>
    </>
  );
}
