import { Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types";

export type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "startMonth" | "endMonth" | "year"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState([]);

  const { data: semesters } = useGetAllSemestersQuery(params);

  const tableData = semesters?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      key: "year",
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      key: "startMonth",
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      key: "endMonth",
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester;
