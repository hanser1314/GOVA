package request

import (
	"github.com/flipped-aurora/gin-vue-admin/server/model/InfoQuire"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
)

type StudentSearchBySno struct {
	InfoQuire.Student
	Sno string `json:"sno" form:"sno"`
	request.PageInfo
}
