package InfoQuire

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/InfoQuire"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
    InfoQuireReq "github.com/flipped-aurora/gin-vue-admin/server/model/InfoQuire/request"
)

type SctService struct {
}

// CreateSct 创建选课信息表记录
// Author [piexlmax](https://github.com/piexlmax)
func (sctService *SctService) CreateSct(sct *InfoQuire.Sct) (err error) {
	err = global.GVA_DB.Create(sct).Error
	return err
}

// DeleteSct 删除选课信息表记录
// Author [piexlmax](https://github.com/piexlmax)
func (sctService *SctService)DeleteSct(sct InfoQuire.Sct) (err error) {
	err = global.GVA_DB.Delete(&sct).Error
	return err
}

// DeleteSctByIds 批量删除选课信息表记录
// Author [piexlmax](https://github.com/piexlmax)
func (sctService *SctService)DeleteSctByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]InfoQuire.Sct{},"id in ?",ids.Ids).Error
	return err
}

// UpdateSct 更新选课信息表记录
// Author [piexlmax](https://github.com/piexlmax)
func (sctService *SctService)UpdateSct(sct InfoQuire.Sct) (err error) {
	err = global.GVA_DB.Save(&sct).Error
	return err
}

// GetSct 根据id获取选课信息表记录
// Author [piexlmax](https://github.com/piexlmax)
func (sctService *SctService)GetSct(id uint) (sct InfoQuire.Sct, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&sct).Error
	return
}

// GetSctInfoList 分页获取选课信息表记录
// Author [piexlmax](https://github.com/piexlmax)
func (sctService *SctService)GetSctInfoList(info InfoQuireReq.SctSearch) (list []InfoQuire.Sct, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
    // 创建db
	db := global.GVA_DB.Model(&InfoQuire.Sct{})
    var scts []InfoQuire.Sct
    // 如果有条件搜索 下方会自动创建搜索语句
    if info.StartCreatedAt !=nil && info.EndCreatedAt !=nil {
     db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
    }
	err = db.Count(&total).Error
	if err!=nil {
    	return
    }

	if limit != 0 {
       db = db.Limit(limit).Offset(offset)
    }
	
	err = db.Find(&scts).Error
	return  scts, total, err
}
