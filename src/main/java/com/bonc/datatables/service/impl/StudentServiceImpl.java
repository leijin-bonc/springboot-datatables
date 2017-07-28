/*
 * 文件名：StudentServiceImpl.java
 * 版权：Copyright by www.bonc.com.cn
 * 描述：
 * 修改人：Jingege
 * 修改时间：2017年7月27日
 */

package com.bonc.datatables.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonc.datatables.dao.StudentDao;
import com.bonc.datatables.entity.Student;
import com.bonc.datatables.service.StudentService;


@Service("studentService")
public class StudentServiceImpl implements StudentService{
    @Autowired
    StudentDao studentDao;
    public List<Student> getStudentList(){
        List<Student> list = studentDao.findAll();
        System.out.println(list.toString());
        return list;
    }
}
