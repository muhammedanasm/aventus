const ProfileCard = ({ name, email, bio, avatar }) => (
  <div className="max-w-md mx-auto bg-white p-8 border border-gray-100 rounded-[var(--radius)] shadow-lg text-center">
    <img
      src={avatar}
      alt={name}
      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[var(--primary-color)]"
    />
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="text-sm text-[var(--primary-color)] mb-4">{email}</p>
    <p className="text-gray-600 leading-relaxed italic">"{bio}"</p>
  </div>
);

export default ProfileCard;
