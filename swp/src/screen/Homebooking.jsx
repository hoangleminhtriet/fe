import Logo from "../assets/image/logo.png";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Thay thế 'Logo' bằng logo của bạn */}
        <div> Image =src {Logo} </div>
        <h1>Plan Event</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Thay thế '#' bằng liên kết thực tế */}
        <a href="#" style={{ marginRight: "20px" }}>
          Login
        </a>
        {/* Thêm biểu tượng cờ khi cần */}
        <select>
          <option value="en">EN</option>
          {/* Thêm thêm các tùy chọn khi cần */}
        </select>
      </div>
    </header>
  );
};

export default Header;
