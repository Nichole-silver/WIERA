import os
import base64
from pymongo import MongoClient

# Kết nối tới MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["signs_img"]
collection = db["wiera"]

# 🧭 Thư mục chứa ảnh trong frontend
ASSETS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "frontend", "src", "assets", "images"))


# Duyệt qua tất cả thư mục con (mỗi thư mục là 1 nhóm)
for group in os.listdir(ASSETS_DIR):
    group_path = os.path.join(ASSETS_DIR, group)
    if not os.path.isdir(group_path):
        continue

    print(f"📦 Đang xử lý nhóm: {group}")
    data = {}
    for filename in os.listdir(group_path):
        if filename.lower().endswith((".png", ".jpg", ".jpeg")):
            file_path = os.path.join(group_path, filename)
            with open(file_path, "rb") as f:
                encoded = base64.b64encode(f.read()).decode("utf-8")
                data[filename] = encoded

    # Ghi vào MongoDB
    collection.update_one(
        {"group": group},
        {"$set": {"data": data}},
        upsert=True
    )

    print(f"✅ Đã tải {len(data)} ảnh cho nhóm {group}")

print("🎉 Hoàn tất upload ảnh từ thư mục assets/images!")
