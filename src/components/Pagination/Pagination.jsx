//Styles
import "./Pagination.scss";

const Navigation = ({ page, totalPages, setPage }) => {
  if (!totalPages) {
    return;
  }
  return (
    <ul className="navigation">
      {page > 1 && (
        <button
          className="navigation__button"
          onClick={() => setPage(page - 1)}
        >
          &lt;
        </button>
      )}

      {page < totalPages && (
        <button
          className="navigation__button"
          onClick={() => setPage(page + 1)}
        >
          &gt;
        </button>
      )}
    </ul>
  );
};

export default Navigation;
