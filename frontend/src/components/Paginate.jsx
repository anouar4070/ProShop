import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            as={Link}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;


// *NOTE:
// * Why is the path /search/:keyword not included in Paginate.jsx, and yet the app still works fine?
// When visiting /search/:keyword (e.g., /search/phone), it loads the HomeScreen component and displays page 1 of the results.
// Paginate.jsx does not generate a link for /search/:keyword directly — instead, it creates links like
// /search/:keyword/page/2, /search/:keyword/page/3, etc., for navigating between pages.
//
// This works fine because both routes (/search/:keyword and /search/:keyword/page/:pageNumber)
// are handled by the same HomeScreen component, which reads the keyword and pageNumber from the URL
// and fetches the appropriate data.
//
// Also, pagination will only appear when `pages > 1` — that means when there are enough search results
// to require multiple pages. Otherwise, Paginate.jsx returns nothing and no pagination links are shown.

