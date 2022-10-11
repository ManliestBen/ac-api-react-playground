const Villager = ({villager}) => {
  return (
    <>
      <h2>{villager.name["name-USen"]}</h2>
      <img src={villager.image_uri} alt="" />
    </>
  );
}

export default Villager;