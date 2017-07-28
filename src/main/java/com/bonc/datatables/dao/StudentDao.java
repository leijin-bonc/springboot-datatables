/*
 * 文件名：StudentDao.java
 * 版权：Copyright by www.bonc.com.cn
 * 描述：
 * 修改人：Jingege
 * 修改时间：2017年7月27日
 */

package com.bonc.datatables.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bonc.datatables.entity.Student;

public interface StudentDao extends JpaRepository<Student,Long>{
    List<Student> findAll();
}
