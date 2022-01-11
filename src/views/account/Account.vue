<template>
  <div>
    <div class="head">
      <div class="head-item">
        <span class="head-item-name">用户名称：</span>
        <div class="head-item-input">
          <a-input placeholder="Basic usage" />
        </div>
      </div>
      <div class="head-item">
        <span class="head-item-name">手机号：</span>
        <div class="head-item-input">
          <a-input placeholder="Basic usage" />
        </div>
      </div>
      <div class="head-item">
        <span class="head-item-name">注册时间：</span>
        <div class="head-item-input time">
          <a-date-picker style="width: 200px; margin-right: 20px" />
          <a-date-picker style="width: 200px" />
        </div>
      </div>
      <div class="head-item">
        <button>查询</button>
      </div>
    </div>
    <div class="middle">
      <button>添加</button>
    </div>
    <div class="table">
      <a-table
        :columns="columns"
        :data-source="columnsData"
        :rowClassName="rowClassName"
      >
        <a slot="number" slot-scope="text">{{ text }}</a>
        <a slot="operation" slot-scope="a, b">
          <span class="operation-btn" @click="editColumnsDataItem(a, b)">
            <a-icon type="edit" />
            编辑
          </span>
          <span class="operation-btn" @click="deleteColumnsDataItem(a, b)">
            <a-icon type="delete" />
            删除
          </span>
        </a>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      columnsData: [
        {
          key: "1",
          number: 1,
          username: "张三",
          tel: "18255556666",
          createTime: "2021-12-20",
        },
      ],
      columns: [
        {
          title: "序号",
          dataIndex: "number",
          key: "name",
          width: 60,
          align: "center",
          scopedSlots: { customRender: "number" },
        },
        {
          title: "用户名称",
          dataIndex: "username",
          key: "username",
          ellipsis: true,
          align: "center",
        },
        {
          title: "手机号",
          dataIndex: "tel",
          key: "tel",
          ellipsis: true,
          align: "center",
        },
        {
          title: "创建时间",
          dataIndex: "createTime",
          key: "createTime",
          ellipsis: true,
          align: "center",
        },
        {
          title: "操作",
          dataIndex: "operation",
          key: "operation",
          ellipsis: true,
          align: "center",
          width: 180,
          scopedSlots: { customRender: "operation" },
        },
      ],
    };
  },
  methods: {
    // 编辑表格数据
    editColumnsDataItem(a, b) {
      console.log(a, b);
    },
    // 删除表格数据
    deleteColumnsDataItem(a, item) {
      this.$confirm({
        title: "确定要删除吗？",
        okText: "确认",
        cancelText: "取消",
        onOk: () => {
          let index = this.columnsData.findIndex((attr) => attr.id == item.id);
          index != -1 && this.columnsData.splice(index, 1);
        },
      });
    },
    rowClassName(record, index) {
      let className = "th-odd-bg";
      if (index % 2 == 0) {
        className = "th-even-bg";
      }
      return className;
    },
  },
};
</script>

<style>
.head {
  padding: 20px 20px 0;
  border: 1px solid #ccc;
  background: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.head .head-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-right: 30px;
  margin-bottom: 20px;
}
.head .head-item .head-item-name {
  margin-right: 6px;
}
.head .head-item .head-item-input {
  width: 200px;
  display: flex;
}
.head .head-item .head-item-input .ant-input-number {
  width: 100%;
}
.head .head-item button {
  height: 32px;
  width: 70px;
  border: none;
  outline: none;
  background: #1d3f6c;
  color: #fff;
  border-radius: 4px;
}
.head .head-item div.time {
  width: 400px;
}

.middle {
  width: 100%;
  margin-bottom: 30px;
  text-align: right;
}
.middle button {
  height: 32px;
  width: 70px;
  outline: none;
  border: 1px solid #1d3f6c;
  color: #1d3f6c;
  border-radius: 4px;
  background: #fff;
}
</style>