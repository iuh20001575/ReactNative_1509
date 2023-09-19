/**
 * IIFE function là một function được khởi tạo và thực thi ngay lập tức
 * Khi Javascript được load thì function này cũng được thực thi
 * Khi function được thực thì sẽ thẻ h1 sẽ được lấy và sau đó màu của h1 sẽ được
 * thay đổi sang màu đỏ
 * Tiếp theo, thẻ body được lấy và được thêm sự kiện click,
 * nếu click vào body thì mày của h1 sẽ được đổi thành màu xanh
 */
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    const body = document.querySelector('body');

    body.addEventListener('click', () => {
        header.style.color = 'blue';
    });
})();
