package routers

import (
	"github.com/t-fukui/capejs-sample/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}
