package com.example.jobscrape.respository;

import com.example.jobscrape.model.Jobs;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends MongoRepository<Jobs, String> {

}


