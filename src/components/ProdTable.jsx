import React from "react";

const ProdTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-5 py-24">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl">
          <header className="px-4 py-3 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">
              📦 Inventory management
            </h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table Head */}
                <thead className="text-[13px] text-slate-500/70">
                  <tr>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">#</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Nama Produk</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Kategori</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Harga</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Aksi</div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="text-sm font-medium">
                  {products && products.length > 0 ? (
                    products.map((prd) => (
                      <tr key={prd.id}>
                        <td class="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-linear-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                          <div class="text-slate-500">{prd.id}</div>
                        </td>
                        <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-linear-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                          <div className="flex items-center">
                            <img
                              src={prd.image}
                              alt={prd.title}
                              style={{
                                width: "45px",
                                height: "45px",
                                objectFit: "contain",
                              }}
                            />
                            <div className="text-slate-900">{prd.title}</div>
                          </div>
                        </td>
                        <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-linear-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                          <div className="text-slate-500">{prd.category}</div>
                        </td>
                        <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-linear-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                          <div className="text-slate-500">$ {prd.price}</div>
                        </td>
                        <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-linear-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                          <button
                            className="h-8 whitespace-nowrap justify-center rounded-full px-3 py-1 text-sm font-medium text-indigo-500 hover:text-white border border-slate-200 shadow-sm hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors group"
                            onClick={() => onEdit(prd)}
                          >
                            Edit
                          </button>
                          <button
                            className="h-8 whitespace-nowrap justify-center rounded-full px-3 py-1 text-sm font-medium text-indigo-500 hover:text-white border border-slate-200 shadow-sm hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors group"
                            onClick={() => onDelete(prd.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-linear-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                        Tidak ada Data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdTable;
