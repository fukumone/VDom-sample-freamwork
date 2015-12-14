package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/t-fukui/gin"
    "fmt"
 )

// type ArticlePost struct {
//     Name string `form:"name" json:"name" binding:"required"`
//     Title string `form:"title" json:"title" binding:"required"`
//     Body string `form:"body" json:"body" binding:"required"`
// }

func ArticlesList(c *gin.Context) {
    var articles []Article
    _, err := dbmap.Select(&articles, "select * from articles order by article_id")
    checkErr(err, "Select failed")
    content := gin.H{}
    for k, v := range articles {
        content[strconv.Itoa(k)] = v
    }
    c.JSON(200, content)
}

func ArticlesDetail(c *gin.Context) {
    article_id := c.Params.ByName("id")
    a_id, _ := strconv.Atoi(article_id)
    article := getArticle(a_id)
    content := gin.H{"title": article.Title, "content": article.Content}
    c.JSON(200, content)
}

func ArticlePost(c *gin.Context) {
    var json Article

    c.Bind(&json) // This will infer what binder to use depending on the content-type header.
    article := createArticle(json.Title, json.Content)
    if article.Title == json.Title {
        content := gin.H{
            "result": "Success",
            "name": article.Name,
            "title": article.Title,
            "body": article.Body,
        }
        c.JSON(201, content)
    } else {
        c.JSON(500, gin.H{"result": "An error occured"})
    }
}

func main() {
    router := gin.Default()
    router.Static("/assets","assets")
    router.LoadHTMLGlob("templates/*")

    router.GET("/", func(c *gin.Context) {
        c.HTML(200, "index.tmpl", "")
    })

    router.POST("/articles", ArticlePost)
    router.GET("/articles/:article_id", ArticleDetail)

    // Listen and server on 0.0.0.0:8080
    router.Run(":8080")
}
