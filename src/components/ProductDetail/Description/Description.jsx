const Description = ({ name, description }) => {
  return (
    <div className="detail-description flex flex-col gap-2 mx-40 my-10">
      <h2 className="font-bold text-2xl">Descripción</h2>
      <p>
        <strong>{name}</strong>
        <br />
        <br />
        {name} lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Provident hic voluptas voluptatem laudantium quibusdam asperiores cumque
        animi et numquam recusandae. Esse commodi, voluptatibus molestiae enim
        eius aliquam quibusdam provident alias! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quam eaque amet similique adipisci
        recusandae ipsam maxime quia perspiciatis distinctio repudiandae.
        Commodi iste, deserunt doloribus enim harum dolore dignissimos delectus
        culpa.
      </p>
    </div>
  );
};

export default Description;
