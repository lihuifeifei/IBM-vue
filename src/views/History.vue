<template>
    <div style="width: 90%;margin: 0 auto">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            height="700"
            :row-style="tableRowStyle"
            :header-cell-style="tableHeaderColor">
            <el-table-column
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="question"
                label="Question"
                width="280">
            </el-table-column>
            <el-table-column
                prop="answer"
                label="Answer"
                width="380">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="Time">
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData:null,
            }
        },
        mounted () {
            this.$axios.get('/getHistory'
            )
                .then((res)=>{
                    this.tableData = res.data.data;
                    console.log(res.data.data);
                })
        },
        methods:{
            // 修改table tr行的背景色
            tableRowStyle({ row, rowIndex }) {
                return 'background-color: pink;font-size:20px;'
            },
            // 修改table header的背景色
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'background-color: lightblue;color: #fff;font-weight: 500;font-size:25px'
                }
            }
        }
    }
</script>
<style rel="stylesheet/scss"  scoped>

</style>