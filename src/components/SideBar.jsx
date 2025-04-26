export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sideBar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button>
          <i
            onClick={handleToggleModal}
            className="fa-solid fa-arrow-right"
          ></i>
        </button>
      </div>
    </div>
  );
}
