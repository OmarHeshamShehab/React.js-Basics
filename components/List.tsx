type ListParam = {
  description?: string;
};
export default function List(props: ListParam) {
  return <div>{props.description}</div>;
}
