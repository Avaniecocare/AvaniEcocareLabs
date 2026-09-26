import PropTypes from "prop-types";

/** Inline structured data. Content is our own static data, never user input. */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

JsonLd.propTypes = {
  data: PropTypes.object.isRequired,
};
