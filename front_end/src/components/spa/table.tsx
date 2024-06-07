import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Մերսում',
    dataIndex: 'name',
    filters: [
      {
        text: 'Քարերով',
        value: 'Քար',
      },
      {
        text: 'Մերսում',
        value: 'Մերսում',
        children: [
          {
            text: 'Մկանային',
            value: 'Մկանային',
          },
          {
            text: 'Թայ',
            value: 'Թայ',
          },
          {
            text: 'Շվեդական',
            value: 'Շվեդական',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
    width: '30%',
  },
  {
    title: 'Գին (դրամ)',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Տևողություն',
    dataIndex: 'address',
    filters: [
      {
        text: '30 րոպե',
        value: '30',
      },
      {
        text: '60 րոպե',
        value: '60',
      },
      {
        text: '75 րոպե',
        value: '75',
      },
      {
        text: '90 րոպե',
        value: '90',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value as string),
    filterSearch: true,
    width: '40%',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Քարերով Շվեդական Մերսում',
    age: 21000,
    address: '75 րոպե',
  },
  {
    key: '2',
    name: ' Շվեդական Մերսում',
    age: 15000,
    address: '60 րոպե',
  },
  {
    key: '3',
    name: 'Խոր Մկանային Մերսում',
    age: 20000,
    address: '75 րոպե',
  },
  {
    key: '4',
    name: 'Արոմաթերապիա',
    age: 15000,
    address: '60 րոպե',
  },
  {
    key: '5',
    name: 'Թայ Մերսում',
    age: 22000,
    address: '90 րոպե',
  },
  {
    key: '6',
    name: 'Քարերով Կորեական մաշկի մերսում',
    age: 25000,
    address: '60 րոպե',
  },
  {
    key: '7',
    name: 'Մկանային շիացու մերսում',
    age: 15000,
    address: '30 րոպե',
  },

];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableSpa: React.FC = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default TableSpa;