export default function SideBar(props) {
  const { handleToggleModal } = props;
  return (
    <div className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>The Brutal Matian Landscape</h2>
        <div>
          <p>Description</p>
          <p>Some description about the image</p>
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
