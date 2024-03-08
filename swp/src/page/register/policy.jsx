import { Container } from "react-bootstrap";

const Policy = () => {
  return (
    <Container className="mt-5">
      <h1>Điều khoản Dịch vụ</h1>
      <p>
        Để tạo Tài khoản Google, bạn cần phải đồng ý với Điều khoản Dịch vụ bên
        dưới.
      </p>
      <p>
        Bên cạnh đó, khi bạn tạo Tài khoản, chúng tôi sẽ lưu trữ thông tin của
        bạn theo Chính sách dữ liệu cá nhân của chúng tôi và Chính sách cookie,
        bao gồm chi tiết như sau:
      </p>
      <h2>Dữ liệu chúng tôi xử lý khi bạn sử dụng Google</h2>
      <ul>
        <li>
          Khi bạn thiết lập Tài khoản Google, chúng tôi yêu cầu email và thông
          tin cá nhân cơ bản của bạn.
        </li>
        <li>
          Khi bạn sử dụng các dịch vụ của chúng tôi để làm việc như viết email
          trong Gmail hoặc xem một video YouTube Maps hoặc xem video trên
          YouTube, chúng tôi thu thập thông tin về hoạt động đó.
        </li>
        <li>
          Chúng tôi có thể xử lý thông tin này để hiển thị quảng cáo hợp lí - ví
          dụ: quảng cáo liên quan đến sản phẩm mà bạn đã từng xem trực tiếp trên
          các website khác.
        </li>
      </ul>
      <p>
        Chúng ta có thể sử dụng loại bỏ thông tin được một số điều kiện - ví dụ:
        nếu nó không liên quan đến Tài khoản Google của bạn.
      </p>
    </Container>
  );
};

export default Policy;
