<template>
   	<section>
		<h2 id="tree-structure"> 树结构</h2>
		<el-row  ref="oBox" class="oBox">
			<div class="tree-structure" ref="dragLeft">
				<el-input
					placeholder="输入关键字进行过滤"
					v-model="filterText"
					suffix-icon="el-icon-search"
					>
				</el-input>
				<el-tree
					class="filter-tree"
					:data="data2"
					node-key="id"
					:props="defaultProps"
					default-expand-all
					:filter-node-method="filterNode"
					ref="leftLeftUnit">
					<span class="custom-tree-node" slot-scope="{ node, data }">
						<span>{{ node.label }}</span>
						<span>
							({{ data.children?data.children.length:'0' }})
						</span>
					</span>
				</el-tree>
				<div ref="oLine" class="drag-line">
					<span class="circle-span" @mousedown="lineMousedown">
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</span>
	            </div>
			</div>
			<div class="right-content"  ref="dragRight"> rightContent </div>
		</el-row>
	</section>
</template>

<script>
    export default {
        name:'tree',
		components:{},
        data() {
            return {
                filterText: '',
				data2: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1很长很长的三级三级1很长很长'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1'
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
            }
        },
        watch: {
			filterText(val) {
				this.$refs.tree2.filter(val);
			}
		},
        methods: {
        	// 左边树可以左右拖动
			lineMousedown(e) {
				let oBox = this.$refs.oBox;
				let oTop = this.$refs.dragLeft;
				let oBottom = this.$refs.dragRight;
				let oLine = this.$refs.oLine;
				let disX = (e || event).clientX; // 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条
				oLine.left = oLine.offsetLeft;
				document.onmousemove = function (e) {
					let iT = oLine.left + ((e || event).clientX - disX);
					if (iT <= 156 || iT >= 400) {
						return false;
					}
//					oLine.style.left = iT - 3 + 'px';
					oTop.style.width = iT + 'px';
					oBottom.style.width = oBox.clientWidth - iT + 'px';
					return false;
				};
				document.onmouseup = function () {
					document.onmousemove = null;
					document.onmouseup = null;
					oLine.releaseCapture && oLine.releaseCapture();
				};
				oLine.setCapture && oLine.setCapture();
				return false;
			},
           	filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},
        }
    }
</script>
