<template>
    <section>
        <h2 id="button-an-niu"> Buttons 按钮</h2>
        <el-row>
            <h3>通用按钮1</h3>
            <el-button>批量导入</el-button>
            <el-button>批量删除</el-button>
            <el-button>重置</el-button>
            <el-button>取消</el-button>
        </el-row>
        <el-row>
            <h3>通用按钮2</h3>
            <el-button type="primary">确定</el-button>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">提交</el-button>
            <el-button type="primary">新增房屋</el-button>
        </el-row>
        <el-row>
            <h3>通用按钮3</h3>
            <el-button type="primary" size="small" plain>人员档案</el-button>
            <el-button type="primary" size="small" plain>编辑信息</el-button>
        </el-row>
        <el-row>
            <h3>通用按钮4</h3>
            <el-button type="primary" size="mini" plain>查看详情</el-button>
            <el-button type="primary" size="mini" plain>入库</el-button>
        </el-row>
        <el-row>
            <h3>通用按钮5</h3>
            <el-button type="primary" size="medium">查看详情</el-button>
            <el-button type="primary" size="medium-98">查看详情</el-button>
        </el-row>
        <el-row>
            <h3>通用按钮6</h3>
            <el-button type="primary"><i class="icon iconfont icon-icon-jieting"></i>接听</el-button>
            <el-button><i class="icon iconfont icon-icon-guaduan"></i>挂断</el-button>
            <el-button><i class="iconfont icon-kaimen"></i>开门</el-button>
        </el-row>
    </section>
</template>

<script>
    export default {
        name: 'button',
        components: ElementUIComponents
    }
</script>
