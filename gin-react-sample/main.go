package main

import (
    "github.com/gin-gonic/gin"
 )

func main() {
    router := gin.Default()
    router.Static("/assets","assets")
    router.LoadHTMLGlob("templates/*")

    router.GET("/", func(c *gin.Context) {
        c.HTML(200, "index.tmpl", "")
    })

    router.POST("/article", func(c *gin.Context) {
        message := c.PostForm("message")

        c.JSON(200, gin.H{
            "status": "posted",
            "message": message,
        })
    })

    // Listen and server on 0.0.0.0:8080
    router.Run(":8080")
}
