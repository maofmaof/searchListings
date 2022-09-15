package com.example.jobscrape.controller;

import com.example.jobscrape.model.Jobs;
import com.example.jobscrape.respository.JobRepository;
import com.example.jobscrape.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class JobController {

    @Autowired
    JobService jobService;

    @Autowired
    JobRepository jobRepository;



    @GetMapping("/allFakeJobs")
    public List<Jobs> getAllFakeJobs(){
        return jobService.getAllFakeJobs();
    }



    @GetMapping("/fromDb")
    public List <Jobs> getFromDb(){  return jobRepository.findAll();}

    @PostMapping
    public Jobs addJobs(@RequestBody Jobs jobs){
        return jobService.addJob(jobs);
    }

    @DeleteMapping("/deleteAll")
    public void deleteJobs(){ jobService.deleteAll();
    }

    @DeleteMapping("/{id}")
    public void deleteJobListing(@PathVariable("id") String id){ jobService.deleteJobListing(id);
    }

}
