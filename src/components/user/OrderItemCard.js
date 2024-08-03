const OrderItemCard = () => {
  return (
    <div className="w-[90%]">
      <div className="my-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Token</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Items</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Payment Mode</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">#5901574055</td>
              <td className="px-6 py-4 whitespace-nowrap">5</td>
              <td className="px-6 py-4 whitespace-nowrap">25326</td>
              <td className="px-6 py-4 whitespace-nowrap">26/09/2024</td>
              <td className="px-6 py-4 whitespace-nowrap">online</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItemCard;
