const render = new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["Alim", "alim@example.com", "(353) 01 222 3333"],
    ["Atep", "atep@gmail.com", "(01) 22 888 4444"],
    ["Nopal", "nopal@gmail.com", "0097 22 654 00033"],
    ["Gopay", "gopay@gmail.com", "+322 876 1233"],
    ["Ujang", "uajng@mail.com", "(353) 22 87 8356"],
  ],
  search: true,
  pagination: {
    limit: 2,
    summary: false,
  },
  style: {
    td: {
      border: "1px solid #ccc",
    },
    table: {
      "font-size": "15px",
    },
  },
  language: {
    search: {
      placeholder: "🔍 Search...",
    },
    pagination: {
      previous: "⬅️",
      next: "➡️",
      showing: "😃 Displaying",
      results: () => "Records",
    },
  },
}).render(document.getElementById("wrapper"));

export { render };
