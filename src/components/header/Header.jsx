import { BsCartCheck } from "react-icons/bs";

function Header() {
  return (
    <div className="bg-dark text-white pt-3 pb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h3>shopping clothes website</h3>
          <span className="p-3 position-relative bg-secondary rounded-circle d-flex cursor-pointer justify-content-center align-items-center">
            <BsCartCheck />
            <i className="badge bg-danger position-absolute top-0 start-50 rounded-circle">5</i>
          </span>
        </div>

        <h1 className="py-5 mb-5">check out your product</h1>
      </div>
    </div>
  );
}

export default Header;
