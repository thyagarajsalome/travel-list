// Stats
function Stats({ items }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = total > 0 ? Math.round((packed / total) * 100) : 0;

  return (
    <footer className="stats">
      {total === 0
        ? "Start adding some items to your packing list 🚀"
        : `You have ${total} item(s), and you already packed ${packed} (${percent}%)`}
    </footer>
  );
}

export default Stats;
