package main

import (
    "github.com/gin-gonic/gin"
 )

func main() {
    r := gin.Default()
    r.LoadHTMLGlob("templates/*")
    r.GET("/", func(c *gin.Context) {
        c.HTML(200, "index.tmpl", obj)
    })

    // Listen and server on 0.0.0.0:8080
    r.Run(":8080")
}
