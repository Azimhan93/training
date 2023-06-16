import "./Article.css";
import office from './cinema.jpg';


export default function Article() {
    return (
      <div className="Article">
        <div className="Article-span">
          <span>WELCOME</span>
        </div>
        <div className="Article-container">
          <div className="Article-text">
              <p>
                  With HubSpot's free landing page builder, you can easily build professional landing pages that attract more visitors and convert
                  them into qualified business leads — no designers or IT help required.
                  Use landing pages to support new product launches, drive event registrations,
                  and more — then watch your CRM database fill up with interested prospects you can sell to.
                  The Components tab shows you the root React components that were rendered on the page,
                  as well as the components that they ended up rendering.
                  By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right.
                  In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on.
                  By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right.
                  In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on.
              </p>
          </div>
          <div className="Article-image">
            <img src={office} alt="office"/>
          </div>
        </div>
      </div>
    );
}