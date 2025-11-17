import { TableData } from '@/types/blog-types';
import React from 'react';

interface DynamicTableProps {
  table: TableData;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ table }) => {
  if (!table || !table.columns || !table.rows) return null;

  return (
    <div className="overflow-x-auto w-full my-6  rounded-[1.5rem] border bg-white border-[#EAEAEA]">
      <table className=" w-full  rounded-[1.5rem] border bg-white border-[#EAEAEA]">
        <thead>
          <tr className="bg-[#BF8B50]  ">
            {table.columns.map((col, index) => (
              <th
                key={index}
                className="blog-subTitle text-start md:min-h-[4rem] py-[1rem] px-[1.5rem] border-[2px] border-[#EAEBF0] text-white"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td
                  key={cIndex}
                  className={`blog-description text-start px-[1.5rem] h-full md:min-h-[4.625rem] py-[0.75rem] border-[2px] border-[#EAEBF0] ${rIndex === table.rows.length - 1 ? 'font-instrument-sans-700 blog-text-48' : ' font-instrument-sans-500  text-[#5F6D7E]'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
