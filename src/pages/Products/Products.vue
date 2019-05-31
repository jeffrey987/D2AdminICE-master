<template>
  <!-- d2-container 文档 https://doc.d2admin.fairyever.com/zh/sys-components/container.html -->
  <d2-container class="page-Products">
    <template slot="header">管理员</template>
    <template>
      <div>
        <d2-crud
          :columns="columns"
          :data="data"
          :loading="loading"
          :pagination="pagination"
          :options="options"
          :form-template="formTemplate"
          :form-options="formOptions"
          :form-rules="formRules"
          :rowHandle="rowHandle"
          selection-row
          @selection-change="handleSelectionChange"
          @row-add="handleRowAdd"
          @row-edit="handleDialogEdit"
          @row-remove="handleRowRemove"
          @dialog-cancel="handleDialogCancel"
          @pagination-current-change="paginationCurrentChange"
        >
          <add-button slot="headerButton"/>
          <el-button slot="headerButton" icon="el-icon-refresh" size="small" type="success" @click="refreshData">刷新</el-button>
          <el-button slot="headerButton" type="danger" icon="el-icon-delete" size="small">删除</el-button>
        </d2-crud>
      </div>
    </template>
    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
import AddDialog from "./components/AddDialog";
import { mapActions } from "vuex";
import util from "@/libs/util.js";
export default {
  components: {
    "add-button": AddDialog
  },
  name: "ProductsForm",
  data() {
    return {
      columns: [
        {
          title: "产品id",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "产品名称",
          dataIndex: "title",
          key: "title"
        },
        {
          title: "开始时间",
          dataIndex: "starttime",
          key: "starttime",
          formatter: this.formatDate
        },{
          title: "结束时间",
          dataIndex: "endtime",
          key: "endtime",
          formatter: this.formatDate
        },
        // {
        //   title: "订单状态",
        //   dataIndex: "status",
        //   key: "status",
        //   filters: [
        //     { text: "新增", value: 1 },
        //     { text: "已付款", value: 10 },
        //     { text: "已完成", value: 20 }
        //   ],
        //   filterMethod(value, row) {
        //     return row.isActive === value;
        //   },
       //   filterPlacement: "bottom-end"
       // },
        
      ],
      data: [],
      loading: true,
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        layout: "prev, pager, next, total"
      },
      options: {
        stripe: true
      },
      rowHandle: {
        columnHeader: "操作",
        edit: {
          icon: "el-icon-edit",
          text: "编辑",
          size: "small"
        },
        remove: {
          icon: "el-icon-delete",
          text: "删除",
          type: "danger",
          size: "small",
          disabled(index, row) {
            if (row.ProductsName == "admin") {
              return true;
            }
            return false;
          }
        }
      }
    };
  },
  mounted() {
    this.fetchData(this.pagination.currentPage, this.pagination.pageSize);
  },
  methods: {
    ...mapActions("d2admin/Products", [
      "GetAll",
      "CreateOrUpdate",
      "Deleted"
    ]),
    paginationCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      this.fetchData(currentPage, this.pagination.pageSize);
    },
    formatDate(row, column, cellValue, index) {
      var timestr = new Date(cellValue);
      return util.Dtformat("yyyy-MM-dd hh:mm:ss", timestr);
    },
    fetchData(page, pageSize) {
      this.loading = true;
      this.GetAll({
        SkipCount: (page - 1) * pageSize,
        MaxResultCount: pageSize
      })
        .then(res => {
          this.data = res.result;
          this.pagination.total = res.result.length;
          this.loading = false;
        })
        .catch(err => {
          console.log("err", err);
          this.loading = false;
        });
    },
    handleRowAdd(row, done) {
      this.formOptions.saveLoading = true;
      this.CreateOrUpdate(row).then(async res => {
        console.log(res);
        this.$message({
          message: "保存成功",
          type: "success"
        });
      });
      done({
        address: "我是通过d1one事件传入的数据！"
      });
      this.formOptions.saveLoading = false;
    },
    handleDialogCancel(done) {
      this.$message({
        message: "取消保存",
        type: "warning"
      });
      done();
    },
    handleDialogEdit(datas, done) {
      this.formOptions.saveLoading = true;
      this.CreateOrUpdate(datas.row).then(async res => {
        console.log(res);
        this.$message({
          message: "保存成功",
          type: "success"
        });
      });
      this.formOptions.saveLoading = false;
      done();
    },
    handleRowRemove({ index, row }, done) {
      this.Deleted({ id: row.id }).then(async res => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
      });
      done();
    },
    handleSelectionChange(selection) {
      console.log(selection);
    },
    refreshData() {
      this.loading = true;
      this.fetchData(this.pagination.currentPage, this.pagination.pageSize);
    },
    handleAddDialog() {
      console.log(AddDialog);
      AddDialog.dialogFormVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Products.scss";
</style>
