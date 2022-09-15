package com.example.jobscrape.service;


import com.example.jobscrape.model.Jobs;
import com.example.jobscrape.respository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<Jobs> getAllFakeJobs(){

        List<Jobs> jobList = new ArrayList<>();

        jobList.add(new Jobs( "Backend utvecklare", "www.yolo.com","hej","något","may 15"));
        jobList.add(new Jobs( "Systemutvecklare", "www.example.com","hej","något","may 15"));
        jobList.add(new Jobs( "Frontend utvecklare", "www.hello.com","hej","något","may 15"));

        return jobList;
    }


 public Jobs addJob(Jobs jobs){
        Jobs newJob = new Jobs( jobs.getTitle(), jobs.getLink(), jobs.getCompanyName(), jobs.getBodyText(), jobs.getReleaseDate());
        jobRepository.save(newJob);
        return newJob;
 }

 public void deleteAll(){
        jobRepository.deleteAll();
    }

 public void deleteJobListing(String id){
        jobRepository.deleteById(id);
 }

}

