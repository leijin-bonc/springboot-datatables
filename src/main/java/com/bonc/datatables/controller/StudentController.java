/*
 * 文件名：StudentController.java
 * 版权：Copyright by www.bonc.com.cn
 * 描述：
 * 修改人：Jingege
 * 修改时间：2017年7月25日
 */

package com.bonc.datatables.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bonc.datatables.entity.Student;
import com.bonc.datatables.service.StudentService;

@Controller
public class StudentController{
    
    @Autowired
    @Qualifier("studentService")
    private StudentService studentService;
    
    
    @RequestMapping(value = {"/"})
    public String showTables(){
        return "index";
    }
    
    @RequestMapping(value = {"/showTable"})
    public String show(){
        //List<Student> list = studentService.getStudentList();
        return "datatablestest";
    }
    
    @RequestMapping(value = {"/student/getStudentList"})
    @ResponseBody
    public Map<String, Object> getStudentList(){
        System.err.println("123");
        List<Student> list = studentService.getStudentList();
        Map<String, Object> map = new HashMap<String, Object>();
        /*map.put("draw","1");
        map.put("recordsFiltered", list.size());
        map.put("recordsTotal", list.size());*/
        map.put("data", list);
      
        return map;
    }
    
    
    @RequestMapping(value = {"/showTableFromServer"})
    public String showTableFromServer(){
        return "datatablesFromServer";
    }
    
    @RequestMapping(value = {"/student/getStudentListFromServer"})
    @ResponseBody
    public Map<String,Object> getStudentMap(){
        List<Student> list = studentService.getStudentList();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("draw","1");
        map.put("recordsFiltered", list.size());
        map.put("recordsTotal", list.size());
        map.put("data", list);
        return map;
    }
    
}
