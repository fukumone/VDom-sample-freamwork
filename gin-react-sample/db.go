package main

import (
    "github.com/t-fukui/gin-react-sample/config"
    "github.com/t-fukui/gin-react-sample/models"
    "fmt"
 )

func main() {
    db := config.Database()
    articles := []models.Article{}
    db.Debug().Find(&articles)

    fmt.Println("aaa")
    fmt.Println(models.NewArticle)
}
