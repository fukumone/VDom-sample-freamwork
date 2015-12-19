package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
    // "fmt"
 )


type ArticleForm struct {
    Name    string `form:"name" binding:"required"`
    Title string `form:"title" binding:"required"`
    Body string `form:"body" binding:"required"`
}

func main() {
    router := gin.Default()
    router.Static("/assets","assets")
    router.LoadHTMLGlob("templates/*")

    router.GET("/", func(c *gin.Context) {
        c.HTML(200, "index.tmpl", "")
    })

    router.POST("/article", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{"response": c.PostForm("article")})
        // c.Redirect(301, "/")
    })

    // Listen and server on 0.0.0.0:8080
    router.Run(":8080")
}
