export default function ArticlePage(props: any) {
  const {params} = props
  const {articleName} = params
  return <div>This is Article Page: {articleName}</div>;
}
