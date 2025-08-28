import Toggle from "@components/Toggle";
import Para from "@components/Para";

export default function Score() {
  return (
    <Toggle title="Call Stack - CallBack Queue - Event Loop" size={3}>
      <Para title="Call Stack">
        Khi Hàm được gọi, nó sẽ được đẩy (push) vào đỉnh của stack. Khi hàm đó
        thực thi xong, nó sẽ được lấy ra (pop) khỏi stack
      </Para>
      <div>
        Callback Queue
        <Para title="Web APIs">
          Đây là những tính năng do trình duyệt cung cấp (không phải của lõi
          JavaScript) như setTimeout, fetch (để gọi API), DOM events. Khi bạn
          gọi một hàm như setTimeout, JavaScript sẽ chuyển nó cho Web API xử lý
          và tiếp tục chạy các lệnh tiếp theo trong Call Stack.
        </Para>
        <Para title="Callback Queue">
          Khi một tác vụ của Web API hoàn thành (ví dụ: setTimeout hết giờ), hàm
          callback tương ứng (hàm bạn truyền vào) sẽ được đẩy vào một hàng đợi
          gọi là Callback Queue. Hàng đợi này hoạt động theo cơ chế FIFO
          (First-In, First-Out).
        </Para>
      </div>
    </Toggle>
  );
}
