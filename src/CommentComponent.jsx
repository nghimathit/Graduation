import React, { useState } from 'react';

const CommentComponent = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem các trường có trống không
    if (!name || !comment) {
      setError('Vui lòng nhập tên và bình luận.');
      setSuccess('');
      return;
    }

    // Xử lý gửi bình luận ở đây
    console.log(`Tên: ${name}, Bình luận: ${comment}`);

    // Hiển thị thông báo thành công
    setSuccess('Gửi thành công!');

    // Reset trường nhập và xóa lỗi
    setName('');
    setComment('');
    setError('');
  };

  return (
    <div className="w-full mx-auto p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "Merienda" }}>Gửi Lời Chúc Tới Thanh</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" style={{ fontFamily: "Coiny" }} htmlFor="name">
            Tên:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" style={{ fontFamily: "Coiny" }} htmlFor="comment">
            Bình luận:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit" style={{ fontFamily: "Coiny" }}
          className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600"
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default CommentComponent;
