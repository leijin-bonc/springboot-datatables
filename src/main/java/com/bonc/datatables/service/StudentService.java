/*
 * 文件名：StudentService.java
 * 版权：Copyright by www.bonc.com.cn
 * 描述：
 * 修改人：Jingege
 * 修改时间：2017年7月27日
 */

package com.bonc.datatables.service;

import java.util.List;

import com.bonc.datatables.entity.Student;

public interface StudentService{
    List<Student> getStudentList();
}
