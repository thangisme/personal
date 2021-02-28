+++
title = "Biến và các kiểu dữ liệu đơn giản trong Python"
date = 2021-02-27
[extra]
cover = "../static/imgs/bien-va-cac-kieu-du-lieu-co-ban-trong-python.png"
+++

<div class="highlight red-bg white-text">Bài viết này được viết với mục đích của cố kiến thức, có thể cói nhều sai sót</div>

## Biến
Không như C, C++,... khi khai báo biến trong Python, ta không cần khai bảo kiểu dữ liệu. Tên biến phải tuân theo một số nguyên tắc:

* Chỉ được có các kí tự, số và dấu gạch dưới (_). Tuy nhiên không được bắt đầu bằng số
* Không có khoảng cách
* Tránh sử dụng từ khóa có sẵn của Python
* Tuy không bắt buộc nhưng tên biến nên ngắn gọn nhưng vẫn dễ hiểu

## Strings
String được dùng để lưu trữ **một chuỗi kí tự** trong Python, được khai báo trong cặp dấu nháy đôi hoặc đơn
```Python
name = "Quang Thang"
message = "Have you ever learned Python?"
```
### String methods
Giả sử bạn muốn người dùng nhập tên nhưng không chắc nó sẽ được định
dạng đúng, có thể sử dụng hàm `title()` để định dạng lại string người dùng đã nhập
```Python
name = "nguyen anh tuan"
print(name.title()) # Nguyen Anh Tuan
```
> Lưu ý: `#` dùng để ghi chú trong python, nội dung sau nó sẽ bị bỏ qua khi chạy. Trong bài này, những ghi chú thể hiện kết quả khi chạy

Ngoài ra, ta có thể dùng các hàm `upper()` và `lower()` để định dạng chữ in hoa và in thường
```Python
name = "Hello!"
print(name.upper()) # HELLO!
print(name.lower()) # hello!
```
### F-strings
Trước đây, nếu muốn dùng biến trong chuỗi kí tự, ta cần sử dụng hàm `format()` như sau:
```Python
first_name = "Taylor"
last_name = "Swift"
full_name = "{} {}".format(first_name, last_name) # Taylor Swift
```
Từ bản Python 3.6 trở đi, ta có thể sử dụng F-strings thay thế
```Python
first_name = "Taylor"
last_name = "Swift"
full_name = f"{first_name} {last_name}" # Taylow Swift
```
### Định dạng strings
Để xuống dòng, cách ra một khoảng trống lớn(tab) trong Python strings, ta có thể dùng `\n` và `\t`
```
print("Sau dong chu nay se xuong dong moi\n\t Tab")
```
Kết quả khi chạy chương trình trên: 
```Python
Sau dong chu nay se xuong dong moi
    Tab
```
Ngoài ra, để loại bỏ khoảng cách ở đầu hoặc cuối chuỗi kí tự, ta có thể làm như sau:
```Python
message = " Hi there!     "
# Loại bỏ khoảng trống bên phải (cuối chuỗi)
print(message.rstrip()) # " Hi there!"
# Loại bỏ khoảng trông bên trái (đầu chuỗi)
print(message.lstrip()) # "Hi there!      "
# Loại bỏ khoảng trống ở cả đầu và cuối chuỗi
print(message.strip()) # "Hi there!"
```

## Số
### Số nguyên (Integer Numbers)
Có thể cộng (`+`), trừ (`-`), nhân (`*`), chia (`/`) các số nguyên trong Python như sau :
```Python
2 + 3 # 5
6 - 4 # 2
3 * 5 # 15
11 / 2 # 5.5
```
Để  thể hiện số mũ, ta có thể dùng `**`
```Python
2 ** 3 # 8
```
Trong Python, để thể hiện độ ưu tiên, chúng ta chỉ dùng cặp dấu ngoặc kép: 
```Python
((6 - 8) * 2) ** 2 # 16
```
### Số thực (Floats)
Có thể thực hiện các phép tính như số nguyên :v
### Số nguyên và số thực
Khi chia hai số bất kì, kết quả nhận được luôn có dạng số thực
```Python
4 / 2 # 2.0
```
Neus trong phép tính có số thực, kết quả nhận được cũng sẽ là số thực, for sure :3
```Python
1 + 6.5 - 2.3 # 5.2
```
### Dấu gạch dưới trong số
Từ Python 3.6 trở đi, ta có thể dùng dấu gạch dưới `_` để nhóm, phân cách số cho dễ đọc
```
universe_age = 14_000_000_000
million = 1000_000 # Muốn nhóm bao nhiêu số cũng được :v
billion = 1_0_00_0000_00 # Nên tránh nhóm như này vì nó phản tác dụng :>
```
## Gán cùng lúc nhiều biến
Python có cái hay là có thẻ gán nhiều biến cùng lúc như này: 
```Python
x, y, z = 1, 2, 3
```
# Hằng số
Hằng số là biến mà giá trị của nó không đổi xuyên suốt chương trình. Tuy nhiên, không như các ngôn ngữ khác, Python không có sẵn hàng số (???). Thế nên, lập trình viên Python thường viết hoa tên biến  để coi nó như hằng số:
```
MAX_CONNECTIONS = 5000 # Động vào là tao giết :)
```

> To be continued ...