import React from "react";
import ProdTable from "../../components/ProdTable";
import ProdForm from "../../components/ProdForm";

const ProdPages = ({
  products,
  loading,
  form,
  isEditing,
  onChange,
  onEdit,
  onSubmit,
  onDelete,
}) => {
  if (loading)
    return (
      <div className="flex justify-center p-10 font-bold italic text-bliue-600">
        Loading...
      </div>
    );

  return (
    <>
      <ProdForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        isEditing={isEditing}
      />

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-neutral-quaternary border-0" />
        <span className="absolute px-3 font-medium text-heading -translate-x-1/2 bg-neutral-primary left-1/2">↕</span>
      </div>

      <ProdTable products={products} onDelete={onDelete} onEdit={onEdit} />
    </>
  );
};

export default ProdPages;
