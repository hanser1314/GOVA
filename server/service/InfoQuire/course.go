package InfoQuire

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/InfoQuire"
	InfoQuireReq "github.com/flipped-aurora/gin-vue-admin/server/model/InfoQuire/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
)

type CourseService struct {
}

// CreateCourse 创建课程表记录
// Author [piexlmax](https://github.com/piexlmax)
func (courseService *CourseService) CreateCourse(course *InfoQuire.Course) (err error) {
	err = global.GVA_DB.Create(course).Error
	return err
}

// DeleteCourse 删除课程表记录
// Author [piexlmax](https://github.com/piexlmax)
func (courseService *CourseService) DeleteCourse(course InfoQuire.Course) (err error) {
	err = global.GVA_DB.Unscoped().Delete(&course).Error
	return err
}

// DeleteCourseByIds 批量删除课程表记录
// Author [piexlmax](https://github.com/piexlmax)
func (courseService *CourseService) DeleteCourseByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Unscoped().Delete(&[]InfoQuire.Course{}, "id in ?", ids.Ids).Error
	return err
}

// UpdateCourse 更新课程表记录
// Author [piexlmax](https://github.com/piexlmax)
func (courseService *CourseService) UpdateCourse(course InfoQuire.Course) (err error) {
	err = global.GVA_DB.Save(&course).Error
	return err
}

// GetCourse 根据id获取课程表记录
// Author [piexlmax](https://github.com/piexlmax)
func (courseService *CourseService) GetCourse(id uint) (course InfoQuire.Course, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&course).Error
	return
}

// GetCourseInfoList 分页获取课程表记录
// Author [piexlmax](https://github.com/piexlmax)
func (courseService *CourseService) GetCourseInfoList(info InfoQuireReq.CourseSearch) (list []InfoQuire.Course, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&InfoQuire.Course{})
	var courses []InfoQuire.Course
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}
	var OrderStr string
	orderMap := make(map[string]bool)
	orderMap["cno"] = true
	if orderMap[info.Sort] {
		OrderStr = info.Sort
		if info.Order == "descending" {
			OrderStr = OrderStr + " desc"
		}
		db = db.Order(OrderStr)
	}

	if limit != 0 {
		db = db.Limit(limit).Offset(offset)
	}

	err = db.Find(&courses).Error
	return courses, total, err
}
