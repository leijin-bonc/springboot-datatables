$(document).ready(function() {
    var table = $('#tableexample').DataTable({
    	
    	  
    	//用来启用或禁用自动列的宽度计算。通常被禁用作为优化
        "autoWidth": false,
        //指定它才能显示表格底部的分页按钮,这个通常需要设置为true，
        //当然它也与dom的值息息相关，如果dom中没有指定p这个字符，它即使为true也是无效的。
        "paging": true,
        //"dom": 'T<"clear"><"toolbar">Clfrtip',
        "dom": 'iCflrtp',
        
        //iDisplayLength和lengthMenu,这两个元素是和dom的l字符对应的，
        //"iDisplayLength": 100,   ------表示默认1页是100行数据
        //"lengthMenu": [[100, 500, 1000, -1], [100, 500, 1000, "所有"]],  
        //-------自定义每页显示的行数，
        "iDisplayLength": 10,
        "lengthMenu": [[10, 50, 100, -1], [10, 50, 100, "所有"]],
        
        //tableTools这个也有很多参数，这里只写了常见的。
        //swf可以导出为csv,pdf,xls三种文件，若需要一种，可以在aButtons中指定
        /*"tableTools": {
            "sSwfPath": "/js/datatables/tabletools/swf/copy_csv_xls_pdf.swf",
            "aButtons": [
                 {sExtends: "csv", oSelectorOpts: {page: "current" }},
                 "print"],
            "sRowSelect": 
            "os",
        },*/
        
        //如果设置为true这个是保存当前用户的状态的
        "stateSave": false,
        
        //这个对应dom中的r，即加载数据时显示的进度
        "processing": true,
        
        //即后端传来的json数据
        "ajax": {
            "url": "/student/getStudentList"
             
        },
        
        //排序，这个可以对单列排序，可以按照指定的顺序，先按哪列排序再按哪列排序
        //表示先对第1列进行升序排序，再按照第二列升序排序，最后按照第三列降序排序
        "order": [
                [0, "asc"], 
                [1, "asc"], 
                [2, "desc"],
            ],
            
        //第四列的宽度设置占所有列宽度的25%，它还有很强大的功能，如改变某列元素的属性，增加列
        "columnDefs": [
              {width: '25%', targets: 3},
            ],
            
        //这个指定了传过来的数据的字段，visible字段默认是true，如果设置false的话，显示的时候是隐藏的
        "columns": [{
            "data": "id",
        }, {
            "data": "name",
        }, {
            "data": "sex",
        }, {
            "data": "age",
            "visible":false
        }],
        
      //是否启动服务器端数据导入
        //"bServerSide": true, 
        
        //sPaginationType: 分页样式，支持四种内置方式，
        //simple、simple_numbers、full和 full_numbers, 默认使用 simple_numbers
        "sPaginationType": "full_numbers",
        
        
        //数据表的语言设置，默认都是英文的，可以通过修改下面源码的字段来修改成中文，更可以改为喜欢的展现方式。
        "oLanguage": {
            //"sProcessing": "<img src='/images/datatable_loading.gif'>  努力加载数据中.",
        	"sProcessing": "  努力加载数据中.",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "抱歉， 没有找到",
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
            "sInfoEmpty": "没有数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "sZeroRecords": "没有检索到数据",
            "sSearch": "模糊查询:  ",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
            }
        },
    });
});