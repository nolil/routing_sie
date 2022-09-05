import { LinksBack } from "../components/layout-component";
function Blog({title, descriprion}) {
  return (
    <div className="page-blog">
      <h1>{title}</h1>
      <p>{descriprion}</p>
      <LinksBack value="<- Назад"/>
    </div>    
  );
}

export { Blog };