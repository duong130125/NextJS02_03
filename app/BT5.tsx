import React from "react";
import "./BT5.scss";

export default function BT5() {
  return (
    <div className="delete-confirmation">
      <div className="delete-confirmation__alert-icon">
        <span>!</span>
      </div>
      <div className="delete-confirmation__title">
        <h2>Delete blog post</h2>
      </div>
      <p className="delete-confirmation__message">
        Are you sure you want to delete this post? This action cannot be undone.
      </p>
      <div className="delete-confirmation__button-group">
        <button className="delete-confirmation__button delete-confirmation__button--cancel">
          Cancel
        </button>
        <button className="delete-confirmation__button delete-confirmation__button--delete">
          Delete
        </button>
      </div>
    </div>
  );
}
