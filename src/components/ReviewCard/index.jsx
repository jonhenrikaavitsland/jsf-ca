/* eslint-disable react/prop-types */
export default function ReviewCard({ review }) {
  return (
    <div className="bg-slate-100 rounded-xl p-4 shadow-lg shadow-slate-300 border-2 flex flex-col gap-4">
      <section className="flex flex-col gap-1">
        <h3>Review by: {review.username}</h3>
        <IconDisplay rating={review.rating} Icon={RatingIcon} />
      </section>
      <p>{review.description}</p>
    </div>
  );
}

function IconDisplay({ rating, Icon }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }, (_, index) => (
        <Icon key={index} />
      ))}
    </div>
  );
}

function RatingIcon() {
  return (
    <span>
      <img
        src="/cart-shopping-fast-solid.svg"
        alt="rating icon"
        className="h-5 w-5"
      />
    </span>
  );
}
