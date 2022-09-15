package com.example.jobscrape.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document
public class Jobs {

    @Id
    private String id;
    @Field
    private String title;
    @Field
    private String link;
    @Field
    private String companyName;
    @Field
    private String bodyText;
    @Field
    private String releaseDate;

    public Jobs() {
    }

    public Jobs(String title, String link, String companyName, String bodyText, String releaseDate) {

        this.title = title;
        this.link = link;
        this.companyName = companyName;
        this.bodyText = bodyText;
        this.releaseDate = releaseDate;
    }
}
