import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <div className="row">
        {/* <!-- blog item --> */}
        <div className="col-md-12">
          <div className="blog-item bi-feature">
            <figure className="blog-thumb">
              <table>
                <tr>
                  <td class="table-active">Sr No.</td>
                  <td class="table-primary">Sender</td>
                  <td class="table-secondary">recipient</td>
                  <td class="table-success">amount</td>
                  <td class="table-danger">Details</td>
                </tr>
                <tr>
                  <td class="table-warning">This Week in</td>
                  <td class="table-info">This Week in</td>
                  <td class="table-light">This Week in</td>
                  <td class="table-dark">This Week in</td>
                  <td class="table-dark">This Week in</td>
                </tr>
              </table>
            </figure>
          </div>
        </div>
      </div>
      <button className="post-loadmore site-btn sb-gradients sbg-line mt-5">
        LOAD MORE
      </button>
    </div>
  );
}
