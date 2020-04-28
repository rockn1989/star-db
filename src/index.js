import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("root"));

// Fetch + (типа ответов)
// async-await
// React.fragment
// this.props.children
// React.Children
// HOC - фун-я высшего порядка
// React-router: подключаем Browsersec, Route from react-router-dom
// Route задается path и имя компонента для отрисовки component={MyComponent}
// для точности path, прописывается аттрибут exact
// в Route можно передавать render фун-ю
// ссылки для страниц задаются через компонент Link to="/url"
// withRouter - фун-я HOC , для Route (чтобы иметь доступ к match,history,location)
// Switch - HOC для Route и Redirect, если в конце будет пустой Route , то выполнится он
