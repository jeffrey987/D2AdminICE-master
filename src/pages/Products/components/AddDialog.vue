<template>
  <div :style="style.addDialog">
    <el-button icon="el-icon-plus" type="primary" size="small" @click="dialogFormVisible = true">新增</el-button>
    <el-dialog title="新增产品" :visible.sync="dialogFormVisible">
      <el-form :model="userModel" :rules="rules" ref="ruleForm">
        <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
          <el-input v-model="userModel.title"></el-input>
        </el-form-item>
        <el-form-item label="二级标题" :label-width="formLabelWidth" prop="subtitle">
          <el-input v-model="userModel.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth" prop="orglprice">
          <el-input v-model="userModel.orglprice"></el-input>
        </el-form-item>
        <el-form-item label="售价" :label-width="formLabelWidth" prop="sellprice">
          <el-input v-model="userModel.sellprice"></el-input>
        </el-form-item>
        <el-form-item label="折扣" :label-width="formLabelWidth" prop="discount">
          <el-switch v-model="userModel.discount"></el-switch>
        </el-form-item>
        <el-form-item label="人数" :label-width="formLabelWidth" prop="proplenumble">
          <el-input type="password" v-model="userModel.proplenumble"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" :label-width="formLabelWidth" prop="starttime">
          <el-switch v-model="userModel.starttime"></el-switch>
        </el-form-item>
        <el-form-item label="结束时间" :label-width="formLabelWidth" prop="endtime">
          <el-switch v-model="userModel.endtime"></el-switch>
        </el-form-item>
         <el-form-item label="封面图片" :label-width="formLabelWidth" prop="image">
          <el-switch v-model="userModel.image"></el-switch>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth" prop="content">
          <el-switch v-model="userModel.content"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        style: {
          addDialog: {
            display: "inline-block",
            marginRight: "8px"
          }
        },
        dialogFormVisible: false,
        userModel: {
          id:0,
          title: "",
          subtitle:"",
          starttime:"",
          endtime:"",
          image:"",
          content:"",
          orglprice:0,
          sellprice:0,
          discount:0,
          proplenumble:0

        },
        rules: {
          title: [{required: true,message: "必填选项",trigger: "blur"}],
          starttime: [{required: true,message: "必填选项",trigger: "blur"}],
          endtime: [{required: true,message: "必填选项",trigger: "blur"}],
          sellprice: [{required: true,message: "必填选项",trigger: "blur"}],
          orglprice: [{required: true,message: "必填选项",trigger: "blur"}]

        },
        props: {},
        formLabelWidth: "80px"
      };
    },
    computed: {},
    methods: {
      ...mapActions("d2admin/Products", ["GetAll", "CreateOrUpdate"]),
      handleSubmit(formName) {
        this.$refs[formName].validate(valid => {
          if (!valid) {
            return false;
          }
          this.CreateOrUpdate(this.userModel)
            .then(async res => {
              if (res.success) {
                this.$message.success("添加成功！");
                this.dialogFormVisible = false;
              } else {
                console.log("err: ", res.error);
              }
            })
            .catch(err => {
              console.log("err: ", err);
            });
        });
      }
    }
  };
</script>