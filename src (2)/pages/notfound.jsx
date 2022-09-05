import { LinksBack } from "../components/layout-component";
function Notfound() {
  return (
    <div className="page-notfound">
      <div className="notfound">404</div>
      <LinksBack value="<- Назад"/>
    </div>    
  );
}

export { Notfound };